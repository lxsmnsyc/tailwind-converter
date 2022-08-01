export type PropertiesMap<Prefix extends string, Key extends string | number> = {
  [key in `${Prefix}-${Key}`]: string;
}

export type PropertiesMapMixed<Prefix extends string, Key extends string | number> = {
  [key in `${Prefix}-${Key}`]: string[];
}

export function createPropertiesMap<Prefix extends string, Key extends string | number>(
  prefix: Prefix,
  css: string,
  baseValues: Record<Key, string>,
): PropertiesMap<Prefix, Key> {
  const properties: Record<string, string> = {};

  for (const property of Object.keys(baseValues)) {
    properties[`${prefix}-${property}`] = `${css}: ${baseValues[property as Key]};`;
  }

  return properties as PropertiesMap<Prefix, Key>;
}

export function createPropertiesMapMixed<Prefix extends string, Key extends string | number>(
  prefix: Prefix,
  css: string[],
  baseValues: Record<Key, string>,
): PropertiesMapMixed<Prefix, Key> {
  const properties: Record<string, string[]> = {};

  for (const property of Object.keys(baseValues)) {
    properties[`${prefix}-${property}`] = css.map((style) => `${style}: ${baseValues[property as Key]};`);
  }

  return properties as PropertiesMapMixed<Prefix, Key>;
}
