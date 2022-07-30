import createSortedMap from '../../../utils/sorted-map';
import { Unwrap } from '../../../utils/unwrap';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

const SELECTORS = createSortedMap({
  'motion-reduce': '',
  'motion-safe': '',
});

export type PrefersReducedMotionValue = Unwrap<typeof SELECTORS>;

export interface PrefersReducedMotion extends MatchResult<PrefersReducedMotionValue> {
  type: 'variant:prefers-reduced-motion';
}

const matcher = match(SELECTORS);

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
