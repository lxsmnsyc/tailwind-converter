import { INSET_Y, InsetYValue } from '../../../values/inset';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface InsetY extends MatchResult<InsetYValue> {
  type: 'inset-y';
}

const matcher = match(INSET_Y);

export default function insetY(feed: Feed): InsetY | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'inset-y',
      value: result.value as InsetYValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
