import createSortedMap from '../../../utils/sorted-map';
import { Unwrap } from '../../../utils/unwrap';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

const SELECTORS = createSortedMap({
  portrait: '',
  landscape: '',
});

export type OrientationValue = Unwrap<typeof SELECTORS>;

export interface Orientation extends MatchResult<OrientationValue> {
  type: 'variant:orientation';
}

const matcher = match(SELECTORS);

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
