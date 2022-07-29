import { Orientation } from '../../parser/rules/variants/orientation';
import { createCSSMediaQuery, CSSMediaQuery } from '../css-media-query';

export default function createOrientationMediaQuery(
  variant: Orientation,
): CSSMediaQuery {
  switch (variant.value) {
    case 'landscape': return createCSSMediaQuery('(orientation: landscape)', variant);
    case 'portrait': return createCSSMediaQuery('(orientation: portrait)', variant);
    default: throw new Error('Invalid pseudo-selector');
  }
}
