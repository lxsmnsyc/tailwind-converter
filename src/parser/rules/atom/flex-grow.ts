import { FLEX_GROW, FlexGrowValue } from '../../../values/flex-grow';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface FlexGrow extends MatchResult<FlexGrowValue> {
  type: 'flex-grow';
}

const matcher = match(FLEX_GROW);

export default function flexGrow(feed: Feed): FlexGrow | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'flex-grow',
      value: result.value as FlexGrowValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
