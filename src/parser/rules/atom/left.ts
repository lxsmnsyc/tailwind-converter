import { LEFT, LeftValue } from '../../../values/inset';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Left extends MatchResult<LeftValue> {
  type: 'left';
}

const matcher = match(LEFT);

export default function left(feed: Feed): Left | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'left',
      value: result.value as LeftValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
