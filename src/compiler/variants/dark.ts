import { Variant } from '../../parser/rules/variants';
import { CSSBlock, createCSSBlock } from '../css-block';
import { createCSSMediaQuery, CSSMediaQuery } from '../css-media-query';

export default function createDarkCSSBlock(
  base: string[],
  variant: Variant,
  mode: 'media' | 'class',
): CSSBlock | CSSMediaQuery {
  if (mode === 'media') {
    return createCSSMediaQuery('(prefers-color-scheme: dark)', variant);
  }
  return createCSSBlock(base.map((item) => `.dark ${item}`), variant);
}
