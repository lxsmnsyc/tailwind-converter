import { AtomValue } from '../parser/rules/atom';
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

export function insertProperty(property: string | string[], atom: AtomValue): void {
  if (Array.isArray(property)) {
    for (const prop of property) {
      getBlock().properties.push({
        value: prop,
        start: atom.start,
        end: atom.end,
      });
    }
  } else {
    getBlock().properties.push({
      value: property,
      start: atom.start,
      end: atom.end,
    });
  }
}
