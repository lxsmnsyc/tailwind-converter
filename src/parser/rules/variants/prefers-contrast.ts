import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type PrefersContrastValue =
  | 'contrast-more'
  | 'contrast-less';

export interface PrefersContrast extends MatchResult<PrefersContrastValue> {
  type: 'variant:prefers-contrast';
}

const matcher = alternation(
  literal('contrast-more'),
  literal('contrast-less'),
);

export default function prefersContrastVariant(feed: Feed): PrefersContrast | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:prefers-contrast',
      value: result.value as PrefersContrastValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
