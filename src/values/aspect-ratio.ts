export const ASPECT_RATIO = {
  'aspect-auto': 'aspect-ratio: auto;',
  'aspect-square': 'aspect-ratio: 1 / 1;',
  'aspect-video': 'aspect-ratio: 16 / 9;',
};

export type AspectRatioValue = keyof typeof ASPECT_RATIO;
