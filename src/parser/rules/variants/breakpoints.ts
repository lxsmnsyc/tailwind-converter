import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type BreakpointValue =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl';

export interface Breakpoint extends MatchResult<BreakpointValue> {
  type: 'variant:breakpoint';
}

const matcher = alternation(
  literal('sm'),
  literal('md'),
  literal('lg'),
  literal('xl'),
  literal('2xl'),
);

export default function breakpointVariant(feed: Feed): Breakpoint | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:breakpoint',
      value: result.value as BreakpointValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
