import { POSITION, PositionValue } from '../../../values/position';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Position extends MatchResult<PositionValue> {
  type: 'position';
}

const matcher = match(POSITION);

export default function position(feed: Feed): Position | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'position',
      value: result.value as PositionValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
