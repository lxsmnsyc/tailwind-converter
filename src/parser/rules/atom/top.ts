import { TOP, TopValue } from '../../../values/inset';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Top extends MatchResult<TopValue> {
  type: 'top';
}

const matcher = match(TOP);

export default function top(feed: Feed): Top | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'top',
      value: result.value as TopValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
