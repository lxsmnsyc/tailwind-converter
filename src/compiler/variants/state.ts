import { State } from '../../parser/rules/variants/pseudo-selector/states';
import { CSSBlock, createCSSBlock } from '../css-block';

export default function createStateCSSBlock(
  base: string[],
  variant: State,
): CSSBlock {
  switch (variant.value) {
    case 'active':
      return createCSSBlock(base.map((item) => `${item}:active`), variant);
    case 'focus':
      return createCSSBlock(base.map((item) => `${item}:focus`), variant);
    case 'focus-visible':
      return createCSSBlock(base.map((item) => `${item}:focus-visible`), variant);
    case 'focus-within':
      return createCSSBlock(base.map((item) => `${item}:focus-within`), variant);
    case 'hover':
      return createCSSBlock(base.map((item) => `${item}:hover`), variant);
    case 'target':
      return createCSSBlock(base.map((item) => `${item}:target`), variant);
    case 'visited':
      return createCSSBlock(base.map((item) => `${item}:visited`), variant);
    default: throw new Error('Invalid pseudo-selector');
  }
}
