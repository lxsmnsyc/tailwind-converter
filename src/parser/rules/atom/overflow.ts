import { OVERFLOW, OverflowValue } from '../../../values/overflow';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Overflow extends MatchResult<OverflowValue> {
  type: 'overflow';
}

const matcher = match(OVERFLOW);

export default function overflow(feed: Feed): Overflow | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'overflow',
      value: result.value as OverflowValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
