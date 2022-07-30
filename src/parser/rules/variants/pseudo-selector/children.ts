import createSortedMap from '../../../../utils/sorted-map';
import { Unwrap } from '../../../../utils/unwrap';
import {
  Feed,
  match,
  MatchResult,
} from '../../../core';

const SELECTORS = createSortedMap({
  first: '',
  last: '',
  odd: '',
  even: '',
  only: '',
  'first-of-type': '',
  'last-of-type': '',
  'only-of-type': '',
  empty: '',
});

type ChildrenValue = Unwrap<typeof SELECTORS>;

export interface Children extends MatchResult<ChildrenValue> {
  type: 'pseudo-selector:children';
}

const matcher = match(SELECTORS);

export default function childrenPseudoSelector(feed: Feed): Children | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'pseudo-selector:children',
      value: result.value as ChildrenValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
