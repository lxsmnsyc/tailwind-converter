import { FLEX, FlexValue } from '../../../values/flex';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Flex extends MatchResult<FlexValue> {
  type: 'flex';
}

const matcher = match(FLEX);

export default function flex(feed: Feed): Flex | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'flex',
      value: result.value as FlexValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
