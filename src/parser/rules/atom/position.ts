import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type PositionValue =
  | 'static'
  | 'fixed'
  | 'absolute'
  | 'relative'
  | 'sticky';

export interface Position extends MatchResult<PositionValue> {
  type: 'position';
}

const matcher = alternation(
  literal('static'),
  literal('fixed'),
  literal('absolute'),
  literal('relative'),
  literal('sticky'),
);

export default function position(feed: Feed): Position | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'position',
      value: result.value as PositionValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
