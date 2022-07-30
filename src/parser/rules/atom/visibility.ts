import { VISIBILITY, VisibilityValue } from '../../../values/visibility';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Visibility extends MatchResult<VisibilityValue> {
  type: 'visibility';
}

const matcher = match(VISIBILITY);

export default function visibility(feed: Feed): Visibility | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'visibility',
      value: result.value as VisibilityValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
