import {
  AspectRatioValue,
  ASPECT_RATIO,
} from '../../../values/aspect-ratio';
import {
  alternation,
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface AspectRatio extends MatchResult<AspectRatioValue> {
  type: 'aspect-ratio';
}

const matcher = alternation(
  ...match(ASPECT_RATIO),
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
