type DefaultsMap<Properties extends string> = {
  [key in Properties]: Record<string, string>;
};

export default function createDefaults<Properties extends string>(
  properties: Record<Properties, Record<string, string>>,
  defaults: Record<string, string>,
): DefaultsMap<Properties> {
  const records: Record<string, Record<string, string>> = {};

  for (const key of Object.keys(properties)) {
    records[key as Properties] = defaults;
  }

  return records as DefaultsMap<Properties>;
}
