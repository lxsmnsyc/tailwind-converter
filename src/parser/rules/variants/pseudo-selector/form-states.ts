import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../../core';

export type FormStateValue =
  | 'required'
  | 'optional'
  | 'valid'
  | 'invalid'
  | 'disabled'
  | 'enabled'
  | 'read-only'
  | 'indeterminate'
  | 'checked'
  | 'default'
  | 'in-range'
  | 'out-of-range'
  | 'placeholder-shown'
  | 'autofill';

export interface FormState extends MatchResult<FormStateValue> {
  type: 'pseudo-selector:form-state';
}

const matcher = alternation(
  literal('required'),
  literal('optional'),
  literal('valid'),
  literal('invalid'),
  literal('disabled'),
  literal('enabled'),
  literal('read-only'),
  literal('indeterminate'),
  literal('checked'),
  literal('default'),
  literal('in-range'),
  literal('out-of-range'),
  literal('placeholder-shown'),
  literal('autofill'),
);

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
