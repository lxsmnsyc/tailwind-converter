import createSortedMap from '../../../../utils/sorted-map';
import { Unwrap } from '../../../../utils/unwrap';
import {
  Feed,
  match,
  MatchResult,
} from '../../../core';

const SELECTORS = createSortedMap({
  required: '',
  optional: '',
  valid: '',
  invalid: '',
  disabled: '',
  enabled: '',
  'read-only': '',
  indeterminate: '',
  checked: '',
  default: '',
  'in-range': '',
  'out-of-range': '',
  'placeholder-shown': '',
  autofill: '',
});

export type FormStateValue = Unwrap<typeof SELECTORS>;

export interface FormState extends MatchResult<FormStateValue> {
  type: 'pseudo-selector:form-state';
}

const matcher = match(SELECTORS);

export default function formStatePseudoSelector(feed: Feed): FormState | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'pseudo-selector:form-state',
      value: result.value as FormStateValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
