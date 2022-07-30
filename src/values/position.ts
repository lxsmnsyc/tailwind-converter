export const POSITION = {
  static: 'position: static;',
  fixed: 'position: fixed;',
  absolute: 'position: absolute;',
  relative: 'position: relative;',
  sticky: 'position: sticky;',
};

export type PositionValue = keyof typeof POSITION;
