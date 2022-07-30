export default function createSortedMap<T extends Record<string, any>>(
  value: T,
): T {
  const properties = {} as T;

  const keys = Object.keys(value).sort((a, b) => b.length - a.length);

  for (const property of keys) {
    properties[property as keyof T] = value[property as keyof T];
  }

  return properties;
}
