import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type AspectRatioValue =
  | 'aspect-auto'
  | 'aspect-square'
  | 'aspect-video';

export interface AspectRatio extends MatchResult<AspectRatioValue> {
  type: 'aspect-ratio';
}

const matcher = alternation(
  literal('aspect-auto'),
  literal('aspect-square'),
  literal('aspect-video'),
);

export default function aspectRatio(feed: Feed): AspectRatio | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'aspect-ratio',
      value: result.value as AspectRatioValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
