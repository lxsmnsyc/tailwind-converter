import { BaseFlexBasisValue, BASE_FLEX_BASIS } from './base/flex-basis';

type FlexBasisProperties = {
  [key in `basis-${BaseFlexBasisValue}`]: string;
}

function createFlexBasis(): FlexBasisProperties {
  const properties: Record<string, string> = {};

  const keys = Object.keys(BASE_FLEX_BASIS).sort((a, b) => b.length - a.length);

  for (const property of keys) {
    properties[`basis-${property}`] = `flex-basis: ${BASE_FLEX_BASIS[property as BaseFlexBasisValue]};`;
  }

  return properties as FlexBasisProperties;
}

export const FLEX_BASIS = createFlexBasis();

export type FlexBasisValue = keyof typeof FLEX_BASIS;
