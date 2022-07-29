import { Variant } from '../../parser/rules/variants';
import { CSSBlock, createCSSBlock } from '../css-block';
import { createCSSMediaQuery, CSSMediaQuery } from '../css-media-query';

export default function createDarkCSSBlock(
  base: string[],
  variant: Variant,
  selector?: string,
): CSSBlock | CSSMediaQuery {
  if (selector) {
    return createCSSBlock(base.map((item) => `${selector} ${item}`), variant);
  }
  return createCSSMediaQuery('(prefers-color-scheme: dark)', variant);
}
