import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type OrientationValue =
  | 'portrait'
  | 'landscape';

export interface Orientation extends MatchResult<OrientationValue> {
  type: 'variant:orientation';
}

const matcher = alternation(
  literal('portrait'),
  literal('landscape'),
);

export default function orientationVariant(feed: Feed): Orientation | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:orientation',
      value: result.value as OrientationValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
