import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type PrefersReducedMotionValue =
  | 'motion-reduce'
  | 'motion-safe';

export interface PrefersReducedMotion extends MatchResult<PrefersReducedMotionValue> {
  type: 'variant:prefers-reduced-motion';
}

const matcher = alternation(
  literal('motion-reduce'),
  literal('motion-safe'),
);

export default function prefersReducedMotionVariant(feed: Feed): PrefersReducedMotion | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:prefers-reduced-motion',
      value: result.value as PrefersReducedMotionValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
