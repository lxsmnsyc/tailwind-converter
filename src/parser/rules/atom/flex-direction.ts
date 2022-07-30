import { FLEX_DIRECTION, FlexDirectionValue } from '../../../values/flex-direction';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface FlexDirection extends MatchResult<FlexDirectionValue> {
  type: 'flex-direction';
}

const matcher = match(FLEX_DIRECTION);

export default function flexDirection(feed: Feed): FlexDirection | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'flex-direction',
      value: result.value as FlexDirectionValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
