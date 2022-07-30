import createSortedMap from '../utils/sorted-map';
import { BaseInsetValue, BASE_INSET } from './base/inset';

type InsetKey = 'left' | 'right' | 'top' | 'bottom' | 'inset' | 'inset-x' | 'inset-y';

type InsetProperty<T extends InsetKey> = {
  [key in `${T | `-${T}`}-${BaseInsetValue}`]: string | string[];
};

function createInset<T extends InsetKey>(key: T): InsetProperty<T> {
  const properties: Record<string, string | string[]> = {};

  if (key === 'inset') {
    for (const insetValue of Object.keys(BASE_INSET)) {
      const value = BASE_INSET[insetValue as BaseInsetValue];
      properties[`${key}-${insetValue}`] = [
        `left: ${value};`,
        `right: ${value};`,
        `top: ${value};`,
        `bottom: ${value};`,
      ];
      properties[`-${key}-${insetValue}`] = [
        `left: -${value};`,
        `right: -${value};`,
        `top: -${value};`,
        `bottom: -${value};`,
      ];
    }
  } else if (key === 'inset-x') {
    for (const insetValue of Object.keys(BASE_INSET)) {
      const value = BASE_INSET[insetValue as BaseInsetValue];
      properties[`${key}-${insetValue}`] = [
        `left: ${value};`,
        `right: ${value};`,
      ];
      properties[`-${key}-${insetValue}`] = [
        `left: -${value};`,
        `right: -${value};`,
      ];
    }
  } else if (key === 'inset-y') {
    for (const insetValue of Object.keys(BASE_INSET)) {
      const value = BASE_INSET[insetValue as BaseInsetValue];
      properties[`${key}-${insetValue}`] = [
        `top: ${value};`,
        `bottom: ${value};`,
      ];
      properties[`-${key}-${insetValue}`] = [
        `top: -${value};`,
        `bottom: -${value};`,
      ];
    }
  } else {
    for (const insetValue of Object.keys(BASE_INSET)) {
      const value = BASE_INSET[insetValue as BaseInsetValue];
      properties[`${key}-${insetValue}`] = `${key}: ${value};`;
      properties[`-${key}-${insetValue}`] = `${key}: -${value};`;
    }
  }
  return createSortedMap(properties) as InsetProperty<T>;
}

export const LEFT = createInset('left');
export const RIGHT = createInset('right');
export const TOP = createInset('top');
export const BOTTOM = createInset('bottom');
export const INSET = createInset('inset');
export const INSET_X = createInset('inset-x');
export const INSET_Y = createInset('inset-y');

export type LeftValue = keyof typeof LEFT;
export type RightValue = keyof typeof RIGHT;
export type TopValue = keyof typeof TOP;
export type BottomValue = keyof typeof BOTTOM;
export type InsetValue = keyof typeof INSET;
export type InsetXValue = keyof typeof INSET_X;
export type InsetYValue = keyof typeof INSET_Y;
