import { FLOAT, FloatValue } from '../../../values/float';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Float extends MatchResult<FloatValue> {
  type: 'float';
}

const matcher = match(FLOAT);

export default function float(feed: Feed): Float | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'float',
      value: result.value as FloatValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
