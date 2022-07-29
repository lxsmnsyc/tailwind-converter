import { RTL } from '../../parser/rules/variants/rtl';
import { CSSBlock, createCSSBlock } from '../css-block';

export default function createRTLBlock(
  base: string[],
  variant: RTL,
): CSSBlock {
  switch (variant.value) {
    case 'rtl':
      return createCSSBlock(base.map((item) => `[dir="rtl"] ${item}`), variant);
    case 'ltr':
      return createCSSBlock(base.map((item) => `[dir="ltr"] ${item}`), variant);
    default: throw new Error('Invalid pseudo-selector');
  }
}
