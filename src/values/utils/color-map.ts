import { createPropertiesMap, PropertiesMap } from '../../utils/properties';
import {
  BaseColorPaletteValue, BaseColorValue, BASE_COLOR, BASE_COLOR_PALETTE,
} from '../base/colors';

type BaseColorMap = typeof BASE_COLOR_PALETTE;

type ColorMapKey =
  | BaseColorValue
  | `${BaseColorPaletteValue}-${keyof BaseColorMap[BaseColorPaletteValue]}`;

type ColorMap<Prefix extends string> = PropertiesMap<Prefix, ColorMapKey>;

export default function createColorMap<
  Prefix extends string,
  Property extends string,
>(
  prefix: Prefix,
  property: Property,
): ColorMap<Prefix> {
  const records = createPropertiesMap(prefix, property, BASE_COLOR);

  for (const key of Object.keys(BASE_COLOR_PALETTE)) {
    Object.assign(records, createPropertiesMap(`${prefix}-${key}`, property, BASE_COLOR_PALETTE[key as BaseColorPaletteValue]));
  }

  return records as ColorMap<Prefix>;
}
