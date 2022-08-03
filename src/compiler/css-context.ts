import { Atom } from '../parser/rules/atom';
import { CSSBlock } from './css-block';
import { CSSMediaQuery } from './css-media-query';

const BLOCK_STACK: CSSBlock[] = [];
const MEDIA_STACK: CSSMediaQuery[] = [];

export function pushBlock(block: CSSBlock) {
  BLOCK_STACK.push(block);
}

export function pushMedia(media: CSSMediaQuery) {
  MEDIA_STACK.push(media);
}

export function popBlock(): void {
  BLOCK_STACK.pop();
}

export function popMedia() {
  MEDIA_STACK.pop();
}

export function getMedia(): CSSMediaQuery {
  return MEDIA_STACK[MEDIA_STACK.length - 1];
}

export function getBlock(): CSSBlock {
  return BLOCK_STACK[BLOCK_STACK.length - 1];
}

export function getDefaultBlock(): CSSBlock {
  return BLOCK_STACK[0];
}

export function insertPropertyForBlock(
  block: CSSBlock,
  properties: Record<string, string | number>,
  atom: Atom,
) {
  for (const property of Object.keys(properties)) {
    block.properties.push({
      property,
      value: properties[property],
      start: atom.start,
      end: atom.end,
    });
  }
}

export function insertProperty(properties: Record<string, string | number>, atom: Atom): void {
  insertPropertyForBlock(getBlock(), properties, atom);
}
