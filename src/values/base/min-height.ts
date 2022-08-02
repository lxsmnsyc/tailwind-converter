export const BASE_MIN_HEIGHT = {
  0: '0px',
  full: '100%',
  screen: '100vh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export type BaseMinHeightValue = keyof typeof BASE_MIN_HEIGHT;
