import createColorMap from './utils/color-map';

export const TEXT_COLOR = createColorMap('text', 'color');

export type TextColorValue = keyof typeof TEXT_COLOR;
