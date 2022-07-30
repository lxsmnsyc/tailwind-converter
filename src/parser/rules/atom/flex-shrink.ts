import { FLEX_SHRINK, FlexShrinkValue } from '../../../values/flex-shrink';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface FlexShrink extends MatchResult<FlexShrinkValue> {
  type: 'flex-shrink';
}

const matcher = match(FLEX_SHRINK);

export default function flexShrink(feed: Feed): FlexShrink | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'flex-shrink',
      value: result.value as FlexShrinkValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
