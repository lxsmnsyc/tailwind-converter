export function sortKeys(value: Record<string, any>): string[] {
  return Object.keys(value).sort((a, b) => b.length - a.length);
}

export default function createSortedMap<T extends Record<string, any>>(
  value: T,
): T {
  const properties = {} as T;

  const keys = sortKeys(value);

  for (const property of keys) {
    properties[property as keyof T] = value[property as keyof T];
  }

  return properties;
}
