export const FORM_STATE_VARIANT = {
  required: 'required',
  optional: 'optional',
  valid: 'valid',
  invalid: 'invalid',
  disabled: 'disabled',
  enabled: 'enabled',
  'read-only': 'read-only',
  indeterminate: 'indeterminate',
  checked: 'checked',
  default: 'default',
  'in-range': 'in-range',
  'out-of-range': 'out-of-range',
  'placeholder-shown': 'placeholder-shown',
  autofill: 'autofill',
};

export type FormStateVariantValue = keyof typeof FORM_STATE_VARIANT;

export function isFormStateVariant(value: string): value is FormStateVariantValue {
  return value in FORM_STATE_VARIANT;
}
