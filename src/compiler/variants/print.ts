import { Print } from '../../parser/rules/variants/print';
import { createCSSMediaQuery, CSSMediaQuery } from '../css-media-query';

export default function createPrintMediaQuery(
  variant: Print,
): CSSMediaQuery {
  return createCSSMediaQuery('print', variant);
}
