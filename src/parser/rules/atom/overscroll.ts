import { OVERSCROLL, OverscrollValue } from '../../../values/overscroll';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Overscroll extends MatchResult<OverscrollValue> {
  type: 'overscroll';
}

const matcher = match(OVERSCROLL);

export default function overflowBehavior(feed: Feed): Overscroll | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'overscroll',
      value: result.value as OverscrollValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
