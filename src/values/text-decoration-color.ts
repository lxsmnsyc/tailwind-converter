import createColorMap from './utils/color-map';

export const TEXT_DECORATION_COLOR = createColorMap('decoration', 'text-decoration-color');

export type TextDecorationColorValue = keyof typeof TEXT_DECORATION_COLOR;
