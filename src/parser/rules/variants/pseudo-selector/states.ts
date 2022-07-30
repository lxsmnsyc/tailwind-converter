import createSortedMap from '../../../../utils/sorted-map';
import { Unwrap } from '../../../../utils/unwrap';
import {
  Feed,
  match,
  MatchResult,
} from '../../../core';

const SELECTORS = createSortedMap({
  hover: '',
  focus: '',
  active: '',
  visited: '',
  'focus-within': '',
  'focus-visible': '',
  target: '',
});

export type StateValue = Unwrap<typeof SELECTORS>;

export interface State extends MatchResult<StateValue> {
  type: 'pseudo-selector:state';
}

const matcher = match(SELECTORS);

export default function statePseudoSelector(feed: Feed): State | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'pseudo-selector:state',
      value: result.value as StateValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
