import { Children } from '../../parser/rules/variants/pseudo-selector/children';
import { CSSBlock, createCSSBlock } from '../css-block';

export default function createChildrenCSSBlock(
  base: string[],
  variant: Children,
): CSSBlock {
  switch (variant.value) {
    case 'empty':
      return createCSSBlock(base.map((item) => `${item}:empty`), variant);
    case 'even':
      return createCSSBlock(base.map((item) => `${item}:nth-child(even)`), variant);
    case 'first':
      return createCSSBlock(base.map((item) => `${item}:first-child`), variant);
    case 'first-of-type':
      return createCSSBlock(base.map((item) => `${item}:first-of-type`), variant);
    case 'last':
      return createCSSBlock(base.map((item) => `${item}:last-child`), variant);
    case 'last-of-type':
      return createCSSBlock(base.map((item) => `${item}:last-of-type`), variant);
    case 'odd':
      return createCSSBlock(base.map((item) => `${item}:nth-child(odd)`), variant);
    case 'only':
      return createCSSBlock(base.map((item) => `${item}:only-child`), variant);
    case 'only-of-type':
      return createCSSBlock(base.map((item) => `${item}:only-of-type`), variant);
    default: throw new Error('Invalid pseudo-selector');
  }
}
