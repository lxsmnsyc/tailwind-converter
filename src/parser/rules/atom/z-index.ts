import { Z_INDEX, ZIndexValue } from '../../../values/z-index';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface ZIndex extends MatchResult<ZIndexValue> {
  type: 'z-index';
}

const matcher = match(Z_INDEX);

export default function zIndex(feed: Feed): ZIndex | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'z-index',
      value: result.value as ZIndexValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
