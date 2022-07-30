import { RIGHT, RightValue } from '../../../values/inset';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Right extends MatchResult<RightValue> {
  type: 'right';
}

const matcher = match(RIGHT);

export default function right(feed: Feed): Right | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'right',
      value: result.value as RightValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
