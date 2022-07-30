import { ObjectPositionValue, OBJECT_POSITION } from '../../../values/object-position';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface ObjectPosition extends MatchResult<ObjectPositionValue> {
  type: 'object-position';
}

const matcher = match(OBJECT_POSITION);

export default function objectPosition(feed: Feed): ObjectPosition | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'object-position',
      value: result.value as ObjectPositionValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
