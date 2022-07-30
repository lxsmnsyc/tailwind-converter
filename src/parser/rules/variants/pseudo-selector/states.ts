export const STATE_VARIANT = {
  hover: '',
  focus: '',
  active: '',
  visited: '',
  'focus-within': '',
  'focus-visible': '',
  target: '',
};

export type StateVariantValue = keyof typeof STATE_VARIANT;

export function isStateVariant(value: string): value is StateVariantValue {
  return value in STATE_VARIANT;
}
