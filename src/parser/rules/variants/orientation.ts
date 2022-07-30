export const ORIENTATION_VARIANT = {
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
};

export type OrientationVariantValue = keyof typeof ORIENTATION_VARIANT;

export function isOrientationVariant(value: string): value is OrientationVariantValue {
  return value in ORIENTATION_VARIANT;
}
