import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type IsolationValue =
  | 'isolation'
  | 'isolation-auto';

export interface Isolation extends MatchResult<IsolationValue> {
  type: 'isolation';
}

const matcher = alternation(
  literal('isolation'),
  literal('isolation-auto'),
);

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
