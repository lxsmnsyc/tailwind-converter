import { createPropertiesMap } from '../utils/properties';
import { BASE_ORDER } from './base/order';

export const ORDER = createPropertiesMap('order', 'order', BASE_ORDER);

export type OrderValue = keyof typeof ORDER;
