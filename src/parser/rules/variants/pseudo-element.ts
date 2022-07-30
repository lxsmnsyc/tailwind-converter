import createSortedMap from '../../../utils/sorted-map';
import { Unwrap } from '../../../utils/unwrap';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

const SELECTORS = createSortedMap({
  before: '',
  after: '',
  placeholder: '',
  file: '',
  marker: '',
  selection: '',
  'first-line': '',
  'first-letter': '',
  backdrop: '',
});

export type PseudoElementValue = Unwrap<typeof SELECTORS>;

export interface PseudoElement extends MatchResult<PseudoElementValue> {
  type: 'variant:pseudo-element';
}

const matcher = match(SELECTORS);

export default function pseudoElementVariant(feed: Feed): PseudoElement | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:pseudo-element',
      value: result.value as PseudoElementValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
