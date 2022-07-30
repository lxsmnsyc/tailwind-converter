import { BoxSizingValue, BOX_SIZING } from '../../../values/box-sizing';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface BoxSizing extends MatchResult<BoxSizingValue> {
  type: 'box-sizing';
}

const matcher = match(BOX_SIZING);

export default function boxSizing(feed: Feed): BoxSizing | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'box-sizing',
      value: result.value as BoxSizingValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
