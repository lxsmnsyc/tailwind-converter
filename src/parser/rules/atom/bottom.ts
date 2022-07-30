import { BOTTOM, BottomValue } from '../../../values/inset';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Bottom extends MatchResult<BottomValue> {
  type: 'bottom';
}

const matcher = match(BOTTOM);

export default function bottom(feed: Feed): Bottom | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'bottom',
      value: result.value as BottomValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
