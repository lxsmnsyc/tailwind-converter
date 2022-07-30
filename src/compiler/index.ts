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

  console.log(result);
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
    css: serializeMediaQuery(topMedia),
  };
}
