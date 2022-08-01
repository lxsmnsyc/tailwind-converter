import { createSignedPropertiesMap, createSignedPropertiesMapMixed } from '../utils/properties';
import { BASE_INSET } from './base/inset';

export const LEFT = createSignedPropertiesMap('left', 'left', BASE_INSET);
export const RIGHT = createSignedPropertiesMap('right', 'right', BASE_INSET);
export const TOP = createSignedPropertiesMap('top', 'top', BASE_INSET);
export const BOTTOM = createSignedPropertiesMap('bottom', 'bottom', BASE_INSET);
export const INSET = createSignedPropertiesMapMixed('inset', ['left', 'right', 'top', 'left'], BASE_INSET);
export const INSET_X = createSignedPropertiesMapMixed('inset-x', ['left', 'right'], BASE_INSET);
export const INSET_Y = createSignedPropertiesMapMixed('inset-y', ['top', 'left'], BASE_INSET);

export type LeftValue = keyof typeof LEFT;
export type RightValue = keyof typeof RIGHT;
export type TopValue = keyof typeof TOP;
export type BottomValue = keyof typeof BOTTOM;
export type InsetValue = keyof typeof INSET;
export type InsetXValue = keyof typeof INSET_X;
export type InsetYValue = keyof typeof INSET_Y;
