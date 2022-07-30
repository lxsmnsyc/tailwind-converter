import {
  BreakInsideValue,
  BREAK_INSIDE,
} from '../../../values/break-inside';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface BreakInside extends MatchResult<BreakInsideValue> {
  type: 'break-inside';
}

const matcher = match(BREAK_INSIDE);

export default function breakInside(feed: Feed): BreakInside | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'break-inside',
      value: result.value as BreakInsideValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
