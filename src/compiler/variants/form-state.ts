import { FormState } from '../../parser/rules/variants/pseudo-selector/form-states';
import { CSSBlock, createCSSBlock } from '../css-block';

export default function createFormStateCSSBlock(
  base: string[],
  variant: FormState,
): CSSBlock {
  switch (variant.value) {
    case 'autofill':
      return createCSSBlock(base.map((item) => `${item}:autofill`), variant);
    case 'checked':
      return createCSSBlock(base.map((item) => `${item}:checked`), variant);
    case 'default':
      return createCSSBlock(base.map((item) => `${item}:default`), variant);
    case 'disabled':
      return createCSSBlock(base.map((item) => `${item}:disabled`), variant);
    case 'enabled':
      return createCSSBlock(base.map((item) => `${item}:enabled`), variant);
    case 'in-range':
      return createCSSBlock(base.map((item) => `${item}:in-range`), variant);
    case 'indeterminate':
      return createCSSBlock(base.map((item) => `${item}:indeterminate`), variant);
    case 'invalid':
      return createCSSBlock(base.map((item) => `${item}:invalid`), variant);
    case 'optional':
      return createCSSBlock(base.map((item) => `${item}:optional`), variant);
    case 'out-of-range':
      return createCSSBlock(base.map((item) => `${item}:out-of-range`), variant);
    case 'placeholder-shown':
      return createCSSBlock(base.map((item) => `${item}:placeholder-shown`), variant);
    default: throw new Error('Invalid pseudo-selector');
  }
}
