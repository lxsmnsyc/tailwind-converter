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

export type SignedPropertiesMap<Prefix extends string, Key extends string | number> =
  PropertiesMap<Prefix | `-${Prefix}`, Key>

export type SignedPropertiesMapMixed<Prefix extends string, Key extends string | number> =
  PropertiesMapMixed<Prefix | `-${Prefix}`, Key>

export function createSignedPropertiesMap<Prefix extends string, Key extends string | number>(
  prefix: Prefix,
  css: string,
  baseValues: Record<Key, string>,
): SignedPropertiesMap<Prefix, Key> {
  const properties: Record<string, string> = {};

  for (const property of Object.keys(baseValues)) {
    properties[`${prefix}-${property}`] = `${css}: ${baseValues[property as Key]};`;
    properties[`-${prefix}-${property}`] = `${css}: -${baseValues[property as Key]};`;
  }

  return properties as SignedPropertiesMap<Prefix, Key>;
}

export function createSignedPropertiesMapMixed<Prefix extends string, Key extends string | number>(
  prefix: Prefix,
  css: string[],
  baseValues: Record<Key, string>,
): SignedPropertiesMapMixed<Prefix, Key> {
  const properties: Record<string, string[]> = {};

  for (const property of Object.keys(baseValues)) {
    properties[`${prefix}-${property}`] = css.map((style) => `${style}: ${baseValues[property as Key]};`);
    properties[`-${prefix}-${property}`] = css.map((style) => `${style}: -${baseValues[property as Key]};`);
  }

  return properties as SignedPropertiesMapMixed<Prefix, Key>;
}
