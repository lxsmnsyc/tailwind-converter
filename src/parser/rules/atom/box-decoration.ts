import { BoxDecorationValue, BOX_DECORATION } from '../../../values/box-decoration';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface BoxDecoration extends MatchResult<BoxDecorationValue> {
  type: 'box-decoration';
}

const matcher = match(BOX_DECORATION);

export default function boxDecoration(feed: Feed): BoxDecoration | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'box-decoration',
      value: result.value as BoxDecorationValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
