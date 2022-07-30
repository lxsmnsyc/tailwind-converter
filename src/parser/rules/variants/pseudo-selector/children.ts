export const CHILDREN_VARIANT = {
  first: 'first-child',
  last: 'last-child',
  odd: 'nth-child(odd)',
  even: 'nth-child(even)',
  only: 'only-child',
  'first-of-type': 'first-of-type',
  'last-of-type': 'last-of-type',
  'only-of-type': 'only-of-type',
  empty: 'empty',
};

export type ChildrenVariantValue = keyof typeof CHILDREN_VARIANT;

export function isChildrenVariant(value: string): value is ChildrenVariantValue {
  return value in CHILDREN_VARIANT;
}
