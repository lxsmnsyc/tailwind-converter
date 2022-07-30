import {
  BreakAfterValue,
  BREAK_AFTER,
} from '../../../values/break-after';
import {
  alternation,
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface BreakAfter extends MatchResult<BreakAfterValue> {
  type: 'break-after';
}

const matcher = alternation(
  ...match(BREAK_AFTER),
);

export default function breakAfter(feed: Feed): BreakAfter | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'break-after',
      value: result.value as BreakAfterValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
