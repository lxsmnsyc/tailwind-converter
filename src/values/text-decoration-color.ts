import { createPropertiesMap } from '../utils/properties';
import { BASE_COLOR } from './base/colors';

export const TEXT_DECORATION_COLOR = {
  'decoration-black': `text-decoration-color: ${BASE_COLOR.black}`,
  'decoration-current': `text-decoration-color: ${BASE_COLOR.current}`,
  'decoration-inherit': `text-decoration-color: ${BASE_COLOR.inherit}`,
  'decoration-transparent': `text-decoration-color: ${BASE_COLOR.transparent}`,
  'decoration-white': `text-decoration-color: ${BASE_COLOR.white}`,
  ...createPropertiesMap('decoration-amber', 'text-decoration-color', BASE_COLOR.amber),
  ...createPropertiesMap('decoration-blue', 'text-decoration-color', BASE_COLOR.blue),
  ...createPropertiesMap('decoration-cyan', 'text-decoration-color', BASE_COLOR.cyan),
  ...createPropertiesMap('decoration-emerald', 'text-decoration-color', BASE_COLOR.emerald),
  ...createPropertiesMap('decoration-fuchsia', 'text-decoration-color', BASE_COLOR.fuchsia),
  ...createPropertiesMap('decoration-gray', 'text-decoration-color', BASE_COLOR.gray),
  ...createPropertiesMap('decoration-green', 'text-decoration-color', BASE_COLOR.green),
  ...createPropertiesMap('decoration-indigo', 'text-decoration-color', BASE_COLOR.indigo),
  ...createPropertiesMap('decoration-lime', 'text-decoration-color', BASE_COLOR.lime),
  ...createPropertiesMap('decoration-neutral', 'text-decoration-color', BASE_COLOR.neutral),
  ...createPropertiesMap('decoration-orange', 'text-decoration-color', BASE_COLOR.orange),
  ...createPropertiesMap('decoration-pink', 'text-decoration-color', BASE_COLOR.pink),
  ...createPropertiesMap('decoration-purple', 'text-decoration-color', BASE_COLOR.purple),
  ...createPropertiesMap('decoration-red', 'text-decoration-color', BASE_COLOR.red),
  ...createPropertiesMap('decoration-rose', 'text-decoration-color', BASE_COLOR.rose),
  ...createPropertiesMap('decoration-sky', 'text-decoration-color', BASE_COLOR.sky),
  ...createPropertiesMap('decoration-slate', 'text-decoration-color', BASE_COLOR.slate),
  ...createPropertiesMap('decoration-stone', 'text-decoration-color', BASE_COLOR.stone),
  ...createPropertiesMap('decoration-teal', 'text-decoration-color', BASE_COLOR.teal),
  ...createPropertiesMap('decoration-violet', 'text-decoration-color', BASE_COLOR.violet),
  ...createPropertiesMap('decoration-yellow', 'text-decoration-color', BASE_COLOR.yellow),
  ...createPropertiesMap('decoration-zinc', 'text-decoration-color', BASE_COLOR.zinc),
};

export type TextDecorationColorValue = keyof typeof TEXT_DECORATION_COLOR;
