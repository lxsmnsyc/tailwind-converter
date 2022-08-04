export type PropertiesMap<Prefix extends string, Key extends string | number> = {
  [key in `${Prefix}-${Key}`]: Record<string, string>;
}

export type PropertiesMapMixed<Prefix extends string, Key extends string | number> = {
  [key in `${Prefix}-${Key}`]: Record<string, string>;
}

export function createPropertiesMap<Prefix extends string, Key extends string | number>(
  prefix: Prefix,
  css: string,
  baseValues: Record<Key, string>,
  transform?: (value: string) => string,
): PropertiesMap<Prefix, Key> {
  const properties: Record<string, Record<string, string>> = {};

  if (transform) {
    for (const property of Object.keys(baseValues)) {
      properties[`${prefix}-${property}`] = {
        [css]: transform(baseValues[property as Key]),
      };
    }
  } else {
    for (const property of Object.keys(baseValues)) {
      properties[`${prefix}-${property}`] = {
        [css]: baseValues[property as Key],
      };
    }
  }

  return properties as PropertiesMap<Prefix, Key>;
}

interface TransformParameter<
  Key extends string | number,
>{
  key: Key;
  value: string;
}

type TransformOption<
  Key extends string | number,
  Properties extends string,
> = {
  [key in Properties]?: string | ((params: TransformParameter<Key>) => string);
};

export function createPropertiesMapMixed<
  Prefix extends string,
  Key extends string | number,
  Properties extends string
>(
  prefix: Prefix,
  css: Properties[],
  baseValues: Record<Key, string>,
  transform?: TransformOption<Key, Properties>,
): PropertiesMapMixed<Prefix, Key> {
  const properties: Record<string, Record<string, string>> = {};

  if (transform) {
    for (const property of Object.keys(baseValues)) {
      const record: Record<string, string> = {};

      for (const style of css) {
        const transformer = transform[style];
        if (transformer) {
          if (typeof transformer === 'function') {
            record[style] = transformer({
              value: baseValues[property as Key],
              key: property as Key,
            });
          } else {
            record[style] = transformer;
          }
        } else {
          record[style] = baseValues[property as Key];
        }
      }

      properties[`${prefix}-${property}`] = record;
    }
  } else {
    for (const property of Object.keys(baseValues)) {
      const record: Record<string, string> = {};

      for (const style of css) {
        record[style] = baseValues[property as Key];
      }

      properties[`${prefix}-${property}`] = record;
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
  const properties: Record<string, Record<string, string>> = {};

  for (const property of Object.keys(baseValues)) {
    properties[`${prefix}-${property}`] = {
      [css]: baseValues[property as Key],
    };
    properties[`-${prefix}-${property}`] = {
      [css]: `-${baseValues[property as Key]}`,
    };
  }

  return properties as SignedPropertiesMap<Prefix, Key>;
}

export function createSignedPropertiesMapMixed<Prefix extends string, Key extends string | number>(
  prefix: Prefix,
  css: string[],
  baseValues: Record<Key, string>,
): SignedPropertiesMapMixed<Prefix, Key> {
  const properties: Record<string, Record<string, string>> = {};

  for (const property of Object.keys(baseValues)) {
    const record: Record<string, string> = {};
    const subRecord: Record<string, string> = {};

    for (const style of css) {
      record[style] = baseValues[property as Key];
      subRecord[style] = `-${baseValues[property as Key]}`;
    }

    properties[`${prefix}-${property}`] = record;
    properties[`-${prefix}-${property}`] = subRecord;
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
