import { CLEAR, ClearValue } from '../../../values/clear';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Clear extends MatchResult<ClearValue> {
  type: 'clear';
}

const matcher = match(CLEAR);

export default function clear(feed: Feed): Clear | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'clear',
      value: result.value as ClearValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
