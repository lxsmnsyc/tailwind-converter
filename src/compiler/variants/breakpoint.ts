import { Breakpoint } from '../../parser/rules/variants/breakpoints';
import { BREAKPOINTS } from '../../values/breakpoints';
import { createCSSMediaQuery, CSSMediaQuery } from '../css-media-query';

export default function createBreakpointMediaQuery(
  variant: Breakpoint,
): CSSMediaQuery {
  return createCSSMediaQuery(BREAKPOINTS[variant.value], variant);
}
