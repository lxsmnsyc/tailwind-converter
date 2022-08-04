import createColorMap from './utils/color-map';

export const BACKGROUND_COLOR = createColorMap('bg', 'background-color');

export type BackgroundColorValue = keyof typeof BACKGROUND_COLOR;
