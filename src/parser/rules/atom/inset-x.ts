import { INSET_X, InsetXValue } from '../../../values/inset';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface InsetX extends MatchResult<InsetXValue> {
  type: 'inset-x';
}

const matcher = match(INSET_X);

export default function insetX(feed: Feed): InsetX | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'inset-x',
      value: result.value as InsetXValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
