import { createPropertiesMap } from '../utils/properties';
import { BASE_COLOR } from './base/colors';

export const TEXT_COLOR = {
  black: `color: ${BASE_COLOR.black}`,
  current: `color: ${BASE_COLOR.current}`,
  inherit: `color: ${BASE_COLOR.inherit}`,
  transparent: `color: ${BASE_COLOR.transparent}`,
  white: `color: ${BASE_COLOR.white}`,
  ...createPropertiesMap('text-amber', 'color', BASE_COLOR.amber),
  ...createPropertiesMap('text-blue', 'color', BASE_COLOR.blue),
  ...createPropertiesMap('text-cyan', 'color', BASE_COLOR.cyan),
  ...createPropertiesMap('text-emerald', 'color', BASE_COLOR.emerald),
  ...createPropertiesMap('text-fuchsia', 'color', BASE_COLOR.fuchsia),
  ...createPropertiesMap('text-gray', 'color', BASE_COLOR.gray),
  ...createPropertiesMap('text-green', 'color', BASE_COLOR.green),
  ...createPropertiesMap('text-indigo', 'color', BASE_COLOR.indigo),
  ...createPropertiesMap('text-lime', 'color', BASE_COLOR.lime),
  ...createPropertiesMap('text-neutral', 'color', BASE_COLOR.neutral),
  ...createPropertiesMap('text-orange', 'color', BASE_COLOR.orange),
  ...createPropertiesMap('text-pink', 'color', BASE_COLOR.pink),
  ...createPropertiesMap('text-purple', 'color', BASE_COLOR.purple),
  ...createPropertiesMap('text-red', 'color', BASE_COLOR.red),
  ...createPropertiesMap('text-rose', 'color', BASE_COLOR.rose),
  ...createPropertiesMap('text-sky', 'color', BASE_COLOR.sky),
  ...createPropertiesMap('text-slate', 'color', BASE_COLOR.slate),
  ...createPropertiesMap('text-stone', 'color', BASE_COLOR.stone),
  ...createPropertiesMap('text-teal', 'color', BASE_COLOR.teal),
  ...createPropertiesMap('text-violet', 'color', BASE_COLOR.violet),
  ...createPropertiesMap('text-yellow', 'color', BASE_COLOR.yellow),
  ...createPropertiesMap('text-zinc', 'color', BASE_COLOR.zinc),
};

export type TextColorValue = keyof typeof TEXT_COLOR;
