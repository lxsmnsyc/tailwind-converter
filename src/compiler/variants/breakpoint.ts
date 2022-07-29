import { Breakpoint } from '../../parser/rules/variants/breakpoints';
import { createCSSMediaQuery, CSSMediaQuery } from '../css-media-query';

export const BREAKPOINTS = {
  '2xl': '(min-width: 1536px)',
  lg: '(min-width: 1024px)',
  md: '(min-width: 768px)',
  sm: '(min-width: 640px)',
  xl: '(min-width: 1280px)',
};

export default function createBreakpointMediaQuery(
  variant: Breakpoint,
): CSSMediaQuery {
  return createCSSMediaQuery(BREAKPOINTS[variant.value], variant);
}
