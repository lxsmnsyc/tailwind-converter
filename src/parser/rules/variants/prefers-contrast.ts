import createSortedMap from '../../../utils/sorted-map';
import { Unwrap } from '../../../utils/unwrap';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

const SELECTORS = createSortedMap({
  'contrast-more': '',
  'contrast-less': '',
});

export type PrefersContrastValue = Unwrap<typeof SELECTORS>;

export interface PrefersContrast extends MatchResult<PrefersContrastValue> {
  type: 'variant:prefers-contrast';
}

const matcher = match(SELECTORS);

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
