import { BREAKPOINTS, BreakpointValue } from '../../../values/breakpoints';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Breakpoint extends MatchResult<BreakpointValue> {
  type: 'variant:breakpoint';
}

const matcher = match(BREAKPOINTS);

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
