export const FONT_SMOOTHING = {
  antialiased: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  'subpixel-antialiased': {
    '-webkit-font-smoothing': 'auto',
    '-moz-osx-font-smoothing': 'auto',
  },
};

export type FontSmoothingValue = keyof typeof FONT_SMOOTHING;
