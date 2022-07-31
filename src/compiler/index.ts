import parseClassnames from '../parser';
import { CSSSelector } from '../parser/css-selector';
import { Atom } from '../parser/rules/atom';
import { AtomWithVariant } from '../parser/rules/atom-with-variant';
import createAtom from './atoms';
import { createCSSBlock, CSSBlock, CSSProperty } from './css-block';
import {
  getBlock,
  getMedia,
  popBlock,
  popMedia,
  pushBlock,
  pushMedia,
} from './css-context';
import { createCSSMediaQuery, CSSMediaQuery } from './css-media-query';
import createVariant, { VariantOptions } from './variants';

function indent(level = 0) {
  return '  '.repeat(level);
}

function serializeSelector(selector: CSSSelector) {
  switch (selector.type) {
    case 'class-selector': return `.${selector.value}`;
    case 'id-selector': return `#${selector.value}`;
    case 'type-selector': return selector.value;
    case 'attribute-selector': {
      const modifier = selector.modifier ? ` ${selector.modifier}` : '';
      const matcher = selector.matcher ?? '';
      const value = selector.value ?? '';
      return `[${selector.property}${matcher}${value}${modifier}]`;
    }
    default:
      throw new Error('Unexpected selector');
  }
}

function serializeBlock(block: CSSBlock, level = 0) {
  let result = '';

  if (block.properties.length) {
    for (const selector of block.selectors) {
      result = `${result}${indent(level)}${selector} {\n`;
      for (const property of block.properties) {
        result = `${result}${indent(level + 1)}${property.value}\n`;
      }
      result = `${result}${indent(level)}}`;
      if (selector !== block.selectors[block.selectors.length - 1]) {
        result = `${result}\n`;
      }
    }
  }

  return result;
}

function serializeMediaQuery(block: CSSMediaQuery, level = 0) {
  let result = '';

  if (block.children.length) {
    if (level > 0) {
      result = `${indent(level - 1)}@media ${block.query} {\n`;
    }
    for (const blockChild of block.children) {
      const serialized = blockChild.type === 'media'
        ? serializeMediaQuery(blockChild, level + 1)
        : serializeBlock(blockChild, level);
      result = `${result}${serialized}`;
      if (blockChild !== block.children[block.children.length - 1] && serialized !== '') {
        result = `${result}\n`;
      }
    }
    if (level > 0) {
      result = `${result}\n${indent(level - 1)}}`;
    }
  }
  return result;
}

function mergeBlock(instance: CSSBlock) {
  const properties: Record<string, CSSProperty> = {};

  for (const property of instance.properties) {
    const [key] = property.value.split(':');
    properties[key] = property;
  }

  instance.properties = Object.values(properties);
}

function mergeMediaQueryBlocks(instance: CSSMediaQuery) {
  const blocks: Record<string, CSSBlock> = {};
  const sequence = new Set<CSSBlock | CSSMediaQuery>();

  for (const block of instance.children) {
    if (block.type === 'block') {
      for (const selector of block.selectors) {
        if (selector in blocks) {
          const original = blocks[selector];
          for (const property of block.properties) {
            original.properties.push(property);
          }
          sequence.delete(original);
          sequence.add(original);
        } else {
          const newBlock = createCSSBlock([selector], block);
          newBlock.properties = block.properties;
          blocks[selector] = newBlock;
          sequence.add(newBlock);
        }
      }
    } else {
      sequence.add(block);
    }
  }

  for (const block of Object.values(blocks)) {
    mergeBlock(block);
  }

  instance.children = [...sequence];
}

function mergeMediaQuery(instance: CSSMediaQuery) {
  const queries: Record<string, CSSMediaQuery> = {};
  const sequence = new Set<CSSBlock | CSSMediaQuery>();

  for (const child of instance.children) {
    if (child.type === 'media') {
      mergeMediaQuery(child);

      if (child.query in queries) {
        const original = queries[child.query];
        for (const block of child.children) {
          original.children.push(block);
        }
        sequence.delete(original);
        sequence.add(original);
      } else {
        queries[child.query] = child;
        sequence.add(child);
      }
    } else {
      sequence.add(child);
    }
  }

  for (const query of Object.values(queries)) {
    mergeMediaQueryBlocks(query);
  }

  instance.children = [...sequence];
  mergeMediaQueryBlocks(instance);
}

export default function compile(
  classnames: string,
  options: VariantOptions,
) {
  const ast = parseClassnames(classnames);

  const topMedia = createCSSMediaQuery('', { start: 0, end: classnames.length });
  pushMedia(topMedia);

  function traverse(node: Atom | AtomWithVariant) {
    if (node.type === 'atom-with-variant') {
      const { variant, value } = node;
      const variantBlock = createVariant(getBlock().selectors, variant, options);
      if ('query' in variantBlock) {
        const newTopBlock = createCSSBlock(getBlock().selectors, variant);
        variantBlock.children.push(newTopBlock);
        getMedia().children.push(variantBlock);
        pushMedia(variantBlock);
        pushBlock(newTopBlock);
        traverse(value);
        popBlock();
        popMedia();
      } else {
        getMedia().children.push(variantBlock);
        pushBlock(variantBlock);
        traverse(value);
        popBlock();
      }
    } else {
      createAtom(node);
    }
  }

  if (ast) {
    for (const { selector, value } of ast) {
      const selectorString = serializeSelector(selector);
      const proxyMedia = createCSSMediaQuery('', selector);
      pushMedia(proxyMedia);
      const topBlock = createCSSBlock([selectorString], selector);
      proxyMedia.children.push(topBlock);
      pushBlock(topBlock);
      for (const item of value.value) {
        traverse(item);
      }
      popBlock();
      popMedia();
      mergeMediaQuery(proxyMedia);
      topMedia.children = [...topMedia.children, ...proxyMedia.children];
    }
  }

  popMedia();

  return {
    ast,
    css: serializeMediaQuery(topMedia),
  };
}
