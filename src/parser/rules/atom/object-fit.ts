import { ObjectFitValue, OBJECT_FIT } from '../../../values/object-fit';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface ObjectFit extends MatchResult<ObjectFitValue> {
  type: 'object-fit';
}

const matcher = match(OBJECT_FIT);

export default function objectFit(feed: Feed): ObjectFit | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'object-fit',
      value: result.value as ObjectFitValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
