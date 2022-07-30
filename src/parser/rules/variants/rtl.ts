import createSortedMap from '../../../utils/sorted-map';
import { Unwrap } from '../../../utils/unwrap';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

const SELECTORS = createSortedMap({
  rtl: '',
  ltr: '',
});

export type RTLValue = Unwrap<typeof SELECTORS>;

export interface RTL extends MatchResult<RTLValue> {
  type: 'variant:rtl';
}

const matcher = match(SELECTORS);

export default function rtlVariant(feed: Feed): RTL | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:rtl',
      value: result.value as RTLValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
