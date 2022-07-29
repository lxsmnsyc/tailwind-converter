import { PrefersReducedMotion } from '../../parser/rules/variants/prefers-reduced-motion';
import { createCSSMediaQuery, CSSMediaQuery } from '../css-media-query';

export default function createPrefersReducedMotionMediaQuery(
  variant: PrefersReducedMotion,
): CSSMediaQuery {
  switch (variant.value) {
    case 'motion-reduce': return createCSSMediaQuery('(prefers-reduced-motion: reduce)', variant);
    case 'motion-safe': return createCSSMediaQuery('(prefers-reduced-motion: no-preference)', variant);
    default: throw new Error('Invalid pseudo-selector');
  }
}
