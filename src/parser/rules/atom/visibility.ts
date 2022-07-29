import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type VisibilityValue =
  | 'visible'
  | 'invisible';

export interface Visibility extends MatchResult<VisibilityValue> {
  type: 'visibility';
}

const matcher = alternation(
  literal('visible'),
  literal('invisible'),
);

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
