import { alternation, parse, quantifier } from './core';
import atom, { Atom } from './rules/atom';
import atomWithVariant, { AtomWithVariant } from './rules/atom-with-variant';

export default function parseClassnames(
  classnames: string,
): (Atom | AtomWithVariant)[] | undefined {
  const list = quantifier(
    alternation(
      atom,
      atomWithVariant,
    ),
  );

  const result = parse(list, classnames);
  return result?.value as (Atom | AtomWithVariant)[] | undefined;
}
