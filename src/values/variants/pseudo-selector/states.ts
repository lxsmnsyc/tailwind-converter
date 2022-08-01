export const STATE_VARIANT = {
  hover: 'hover',
  focus: 'focus',
  active: 'active',
  visited: 'visited',
  'focus-within': 'focus-within',
  'focus-visible': 'focus-visible',
  target: 'target',
};

export type StateVariantValue = keyof typeof STATE_VARIANT;

export function isStateVariant(value: string): value is StateVariantValue {
  return value in STATE_VARIANT;
}
