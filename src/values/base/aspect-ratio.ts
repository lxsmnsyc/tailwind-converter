export const BASE_ASPECT_RATIO = {
  auto: 'auto',
  square: '1 / 1',
  video: '16 / 9',
};

export type BaseAspectRatioValue = keyof typeof BASE_ASPECT_RATIO;
