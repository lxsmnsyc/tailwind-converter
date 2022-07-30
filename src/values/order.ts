import { sortKeys } from '../utils/sorted-map';
import { BaseOrderValue, BASE_ORDER } from './base/order';

type OrderProperties = {
  [key in `order-${BaseOrderValue}`]: string;
}

function createOrder(): OrderProperties {
  const properties: Record<string, string> = {};

  const keys = sortKeys(BASE_ORDER);

  for (const property of keys) {
    properties[`order-${property}`] = `order: ${BASE_ORDER[property as BaseOrderValue]};`;
  }

  return properties as OrderProperties;
}

export const ORDER = createOrder();

export type OrderValue = keyof typeof ORDER;
