import { FLEX_WRAP, FlexWrapValue } from '../../../values/flex-wrap';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface FlexWrap extends MatchResult<FlexWrapValue> {
  type: 'flex-wrap';
}

const matcher = match(FLEX_WRAP);

export default function flexWrap(feed: Feed): FlexWrap | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'flex-wrap',
      value: result.value as FlexWrapValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
