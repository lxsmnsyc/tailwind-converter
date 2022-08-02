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

interface TransformParameter<
  Key extends string | number,
  Properties extends string
>{
  property: Properties;
  key: Key;
  value: string;
}

export function createPropertiesMapMixed<
  Prefix extends string,
  Key extends string | number,
  Properties extends string
>(
  prefix: Prefix,
  css: Properties[],
  baseValues: Record<Key, string>,
  transform?: Record<Properties, (params: TransformParameter<Key, Properties>) => string>,
): PropertiesMapMixed<Prefix, Key> {
  const properties: Record<string, string[]> = {};

  if (transform) {
    for (const property of Object.keys(baseValues)) {
      properties[`${prefix}-${property}`] = css.map((style) => {
        if (style in transform) {
          return transform[style]({
            property: style,
            value: baseValues[property as Key],
            key: property as Key,
          });
        }
        return `${style}: ${baseValues[property as Key]};`;
      });
    }
  } else {
    for (const property of Object.keys(baseValues)) {
      properties[`${prefix}-${property}`] = css.map((style) => (
        `${style}: ${baseValues[property as Key]};`
      ));
    }
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

export function createPrefixedMap<Prefix extends string, Key extends string>(
  prefix: Prefix,
  origin: Record<Key, string>,
): Record<`${Prefix}${Key}`, string> {
  const record: Record<string, string> = {};

  for (const key of Object.keys(origin)) {
    record[`${prefix}${key}`] = origin[key as Key];
  }

  return record as Record<`${Prefix}${Key}`, string>;
}
