import { ASTPosition } from '../parser/core';
import { CSSBlock } from './css-block';

export interface CSSMediaQuery extends ASTPosition {
  type: 'media';
  query: string;
  children: (CSSMediaQuery | CSSBlock)[];
}

export function createCSSMediaQuery(
  query: string,
  { start, end }: ASTPosition,
): CSSMediaQuery {
  return {
    type: 'media',
    query,
    children: [],
    start,
    end,
  };
}
