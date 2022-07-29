import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type ClearValue =
  | 'clear-right'
  | 'clear-left'
  | 'clear-both'
  | 'clear-none';

export interface Clear extends MatchResult<ClearValue> {
  type: 'clear';
}

const matcher = alternation(
  literal('clear-right'),
  literal('clear-left'),
  literal('clear-both'),
  literal('clear-none'),
);

export default function clear(feed: Feed): Clear | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'clear',
      value: result.value as ClearValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
