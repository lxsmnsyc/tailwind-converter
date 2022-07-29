import { PrefersContrast } from '../../parser/rules/variants/prefers-contrast';
import { createCSSMediaQuery, CSSMediaQuery } from '../css-media-query';

export default function createPrefersContrastMediaQuery(
  variant: PrefersContrast,
): CSSMediaQuery {
  switch (variant.value) {
    case 'contrast-less': return createCSSMediaQuery('(prefers-contrast: less)', variant);
    case 'contrast-more': return createCSSMediaQuery('(prefers-contrast: more)', variant);
    default: throw new Error('Invalid pseudo-selector');
  }
}
