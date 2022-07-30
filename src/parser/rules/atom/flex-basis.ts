import { FLEX_BASIS, FlexBasisValue } from '../../../values/flex-basis';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface FlexBasis extends MatchResult<FlexBasisValue> {
  type: 'flex-basis';
}

const matcher = match(FLEX_BASIS);

export default function flexBasis(feed: Feed): FlexBasis | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'flex-basis',
      value: result.value as FlexBasisValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
