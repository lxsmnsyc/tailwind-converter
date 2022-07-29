import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type OverflowBehaviorValue =
  | 'overscroll-auto'
  | 'overscroll-contain'
  | 'overscroll-none'
  | 'overscroll-x-auto'
  | 'overscroll-y-auto'
  | 'overscroll-x-contain'
  | 'overscroll-y-contain'
  | 'overscroll-x-none'
  | 'overscroll-y-none';

export interface OverflowBehavior extends MatchResult<OverflowBehaviorValue> {
  type: 'overflow-behavior';
}

const matcher = alternation(
  literal('overscroll-auto'),
  literal('overscroll-contain'),
  literal('overscroll-none'),
  literal('overscroll-x-auto'),
  literal('overscroll-y-auto'),
  literal('overscroll-x-contain'),
  literal('overscroll-y-contain'),
  literal('overscroll-x-none'),
  literal('overscroll-y-none'),
);

export default function overflowBehavior(feed: Feed): OverflowBehavior | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'overflow-behavior',
      value: result.value as OverflowBehaviorValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
