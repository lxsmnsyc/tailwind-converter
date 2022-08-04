import { createPropertiesMap, PropertiesMap } from '../../utils/properties';
import {
  BaseColorPaletteValue, BaseColorValue, BASE_COLOR, BASE_COLOR_PALETTE,
} from '../base/colors';
import { BaseOpacityValue, BASE_OPACITY } from '../base/opacity';

type BaseColorMap = typeof BASE_COLOR_PALETTE;
type BaseColorOpacity = '' | `/${BaseOpacityValue}`;

type ColorMapKey =
  | BaseColorValue
  | `${BaseColorPaletteValue}-${keyof BaseColorMap[BaseColorPaletteValue]}${BaseColorOpacity}`;

type ColorMap<Prefix extends string> = PropertiesMap<Prefix, ColorMapKey>;

function hexToRgb(hex: string) {
  const bigint = Number.parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}

export default function createColorMap<
  Prefix extends string,
  Property extends string,
>(
  prefix: Prefix,
  property: Property,
): ColorMap<Prefix> {
  const records = createPropertiesMap(prefix, property, BASE_COLOR);

  const palette: Record<string, Record<string, string>> = {};

  for (const key of Object.keys(BASE_COLOR_PALETTE)) {
    Object.assign(palette, createPropertiesMap(`${prefix}-${key}`, property, BASE_COLOR_PALETTE[key as BaseColorPaletteValue]));
  }

  const paletteKeys = Object.keys(palette);
  for (const scale of Object.keys(BASE_OPACITY)) {
    for (const key of paletteKeys) {
      const value = palette[key][property];
      palette[`${key}/${scale}`] = {
        [property]: `rgb(${hexToRgb(value)}, ${BASE_OPACITY[scale as unknown as BaseOpacityValue]})`,
      };
    }
  }

  return Object.assign(records, palette) as ColorMap<Prefix>;
}
