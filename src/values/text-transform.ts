export const TEXT_TRANSFORM = {
  uppercase: { 'text-transform': 'uppercase' },
  lowercase: { 'text-transform': 'lowercase' },
  capitalize: { 'text-transform': 'capitalize' },
  'normal-case': { 'text-transform': 'none' },
};

export type TextTransformValue = keyof typeof TEXT_TRANSFORM;
