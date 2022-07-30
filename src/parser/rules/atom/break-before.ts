import { BreakBeforeValue, BREAK_BEFORE } from '../../../values/break-before';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface BreakBefore extends MatchResult<BreakBeforeValue> {
  type: 'break-before';
}

const matcher = match(BREAK_BEFORE);

export default function breakBefore(feed: Feed): BreakBefore | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'break-before',
      value: result.value as BreakBeforeValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
