export const PREFERS_REDUCED_MOTION = {
  'motion-reduce': '(prefers-reduced-motion: reduce)',
  'motion-safe': '(prefers-reduced-motion: no-preference)',
};

export type PrefersReducedMotionVariantValue = keyof typeof PREFERS_REDUCED_MOTION;

export function isPrefersReducedMotionVariant(
  value: string,
): value is PrefersReducedMotionVariantValue {
  return value in PREFERS_REDUCED_MOTION;
}
