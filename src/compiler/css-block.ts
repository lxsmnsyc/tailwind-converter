import { ASTPosition } from '../parser/core';

export interface CSSProperty extends ASTPosition {
  property: string;
  value: string | number;
}

export interface CSSBlock extends ASTPosition {
  type: 'block';
  selectors: string[];
  properties: CSSProperty[];
  start: number;
  end: number;
}

export function createCSSBlock(
  selectors: string[],
  { start, end }: ASTPosition,
): CSSBlock {
  return {
    type: 'block',
    selectors,
    properties: [],
    start,
    end,
  };
}
