import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type BoxSizingValue =
  | 'box-border'
  | 'box-content';

export interface BoxSizing extends MatchResult<BoxSizingValue> {
  type: 'box-sizing';
}

const matcher = alternation(
  literal('box-border'),
  literal('box-content'),
);

export default function boxSizing(feed: Feed): BoxSizing | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'box-sizing',
      value: result.value as BoxSizingValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
