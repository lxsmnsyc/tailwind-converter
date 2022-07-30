import { INSET, InsetValue } from '../../../values/inset';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Inset extends MatchResult<InsetValue> {
  type: 'inset';
}

const matcher = match(INSET);

export default function inset(feed: Feed): Inset | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'inset',
      value: result.value as InsetValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
