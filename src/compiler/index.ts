import parseClassnames from '../parser';
import { Atom } from '../parser/rules/atom';
import { AtomWithVariant } from '../parser/rules/atom-with-variant';
import createAtom from './atoms';
import { createCSSBlock, CSSBlock } from './css-block';
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
      result = `${result}${indent(level)}}\n`;
    }
  }

  return result;
}

function serialize(block: CSSMediaQuery | CSSBlock, level = -1) {
  if (level === -1) {
    let result = '';

    if (block.type === 'media') {
      for (const child of block.blocks) {
        const blockResult = serialize(child, 0);
        result = `${result}${blockResult}`;
        if (child !== block.blocks[block.blocks.length - 1] && blockResult !== '') {
          result = `${result}\n`;
        }
      }
      if (block.blocks.length && block.children.length) {
        result = `${result}\n`;
      }
      for (const child of block.children) {
        const blockResult = serialize(child, 0);
        result = `${result}${blockResult}`;
        if (child !== block.children[block.children.length - 1] && blockResult !== '') {
          result = `${result}\n`;
        }
      }
    } else {
      result = serializeBlock(block, -1);
    }

    return result;
  }
  let result = '';

  if (block.type === 'media') {
    if (block.blocks.length || block.children.length) {
      result = `${indent(level)}@media ${block.query} {\n`;
      for (const child of block.blocks) {
        const blockResult = serializeBlock(child, level + 1);
        result = `${result}${blockResult}`;
        if (child !== block.blocks[block.blocks.length - 1] && result !== '') {
          result = `${result}\n`;
        }
      }
      if (block.blocks.length && block.children.length) {
        result = `${result}\n`;
      }
      for (const child of block.children) {
        const mediaResult = serialize(child, level + 1);
        result = `${result}${mediaResult}`;
        if (child !== block.children[block.children.length - 1] && result !== '') {
          result = `${result}\n`;
        }
      }
      result = `${result}${indent(level)}}\n`;
    }
  } else {
    result = serializeBlock(block, level);
  }

  return result;
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

  return {
    ast,
    css: serialize(topMedia),
  };
}
