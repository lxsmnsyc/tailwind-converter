import {
  alternation,
  parse,
  quantifier,
  sequence,
} from './core';
import blank from './rules/blank';
import atom, { Atom } from './rules/atom';
import atomWithVariant, { AtomWithVariant } from './rules/atom-with-variant';

export default function parseClassnames(
  classnames: string,
): (Atom | AtomWithVariant)[] | undefined {
  const list = sequence(
    alternation(
      atom,
      atomWithVariant,
    ),
    quantifier(
      sequence(
        blank,
        alternation(
          atom,
          atomWithVariant,
        ),
      ),
    ),
  );

  const result = parse(list, classnames);
  if (result) {
    const mappers = [result.value[0] as (Atom | AtomWithVariant)];

    if (result.value[1]) {
      const item = result.value[1];
      if (Array.isArray(item.value)) {
        for (const mapper of item.value) {
          mappers.push(mapper.value[1] as (Atom | AtomWithVariant));
        }
      }
    }
    return mappers;
  }
  return undefined;
}
