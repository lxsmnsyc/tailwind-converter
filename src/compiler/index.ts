import parseClassnames from '../parser';
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

  if (block.blocks.length || block.children.length) {
    if (level > 0) {
      result = `${indent(level - 1)}@media ${block.query} {\n`;
    }
    if (block.blocks.length) {
      let blockResult = '';
      for (const blockChild of block.blocks) {
        const serialized = serializeBlock(blockChild, level);
        result = `${result}${serialized}`;
        blockResult = `${blockResult}${serialized}`;
        if (blockChild !== block.blocks[block.blocks.length - 1] && serialized !== '') {
          result = `${result}\n`;
        }
      }
      if (block.children.length && blockResult !== '') {
        result = `${result}\n`;
      }
    }
    if (block.children.length) {
      for (const blockChild of block.children) {
        const serialized = serializeMediaQuery(blockChild, level + 1);
        result = `${result}${serialized}`;
        if (blockChild !== block.children[block.children.length - 1] && serialized !== '') {
          result = `${result}\n`;
        }
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

  for (const block of instance.blocks) {
    for (const selector of block.selectors) {
      if (selector in blocks) {
        const original = blocks[selector];
        for (const property of block.properties) {
          original.properties.push(property);
        }
      } else {
        const newBlock = createCSSBlock([selector], block);
        newBlock.properties = block.properties;
        blocks[selector] = newBlock;
      }
    }
  }

  for (const block of Object.values(blocks)) {
    mergeBlock(block);
  }

  instance.blocks = Object.values(blocks);
}

function mergeMediaQuery(instance: CSSMediaQuery) {
  const queries: Record<string, CSSMediaQuery> = {};

  for (const child of instance.children) {
    mergeMediaQuery(child);

    if (child.query in queries) {
      const original = queries[child.query];
      for (const block of child.blocks) {
        original.blocks.push(block);
      }
      for (const block of child.children) {
        original.children.push(block);
      }
    } else {
      queries[child.query] = child;
    }
  }

  for (const query of Object.values(queries)) {
    mergeMediaQueryBlocks(query);
  }

  instance.children = Object.values(queries);
  mergeMediaQueryBlocks(instance);
}

export default function compile(
  baseSelector: string,
  classnames: string,
  options: VariantOptions,
) {
  const ast = parseClassnames(classnames);

  const topBlock = createCSSBlock([baseSelector], { start: 0, end: classnames.length });
  const topMedia = createCSSMediaQuery('', { start: 0, end: classnames.length });

  topMedia.blocks.push(topBlock);

  pushBlock(topBlock);
  pushMedia(topMedia);

  function traverse(node: Atom | AtomWithVariant) {
    if (node.type === 'atom') {
      createAtom(node.value);
    } else {
      const { variant, value } = node;
      const variantBlock = createVariant(getBlock().selectors, variant, options);
      if ('query' in variantBlock) {
        const newTopBlock = createCSSBlock(getBlock().selectors, variant);
        variantBlock.blocks.push(newTopBlock);
        getMedia().children.push(variantBlock);
        pushMedia(variantBlock);
        pushBlock(newTopBlock);
        traverse(value);
        popBlock();
        popMedia();
      } else {
        getMedia().blocks.push(variantBlock);
        pushBlock(variantBlock);
        traverse(value);
        popBlock();
      }
    }
  }

  if (ast) {
    for (const result of ast) {
      traverse(result);
    }
  }

  popMedia();
  popBlock();

  mergeMediaQuery(topMedia);

  return {
    ast,
    css: serializeMediaQuery(topMedia),
  };
}
