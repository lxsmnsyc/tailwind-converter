import { Variant } from '../../parser/rules/variants';
import { CSSBlock, createCSSBlock } from '../css-block';

export default function createOpenCSSBlock(
  base: string[],
  variant: Variant,
): CSSBlock {
  return createCSSBlock(base.map((item) => `${item}[open]`), variant);
}
