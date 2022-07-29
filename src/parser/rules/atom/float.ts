import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type FloatValue =
  | 'float-right'
  | 'float-left'
  | 'float-none';

export interface Float extends MatchResult<FloatValue> {
  type: 'float';
}

const matcher = alternation(
  literal('float-right'),
  literal('float-left'),
  literal('float-none'),
);

export default function float(feed: Feed): Float | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'float',
      value: result.value as FloatValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
