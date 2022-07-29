import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type BoxDecorationValue =
  | 'box-decoration-clone'
  | 'box-decoration-slice';

export interface BoxDecoration extends MatchResult<BoxDecorationValue> {
  type: 'box-decoration';
}

const matcher = alternation(
  literal('box-decoration-clone'),
  literal('box-decoration-slice'),
);

export default function boxDecoration(feed: Feed): BoxDecoration | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'box-decoration',
      value: result.value as BoxDecorationValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
