import { ISOLATION, IsolationValue } from '../../../values/isolation';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Isolation extends MatchResult<IsolationValue> {
  type: 'isolation';
}

const matcher = match(ISOLATION);

export default function isolation(feed: Feed): Isolation | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'isolation',
      value: result.value as IsolationValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
