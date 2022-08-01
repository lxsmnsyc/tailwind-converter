import { ATOMS, AtomValue } from '../values';
import { VARIANT, VariantValue } from '../values/variants';
import { ClassList } from './classlist';
import { MatchResult } from './core';
import cssSelector, { CSSSelector } from './css-selector';
import ParserError from './ParserError';
import { AtomWithVariant } from './rules/atom-with-variant';
import tokenize, { Selector } from './tokenize';

export interface Atom extends MatchResult<AtomValue> {
  type: 'atom';
}

function validateAtom({ value, start, end }: MatchResult<string>): Atom {
  if (value in ATOMS) {
    return {
      type: 'atom',
      value: value as AtomValue,
      start,
      end,
    };
  }
  throw new ParserError(`atom '${value}'`, start, end);
}

export interface Variant extends MatchResult<VariantValue> {
  type: 'variant';
}

function validateVariant({ value, start, end }: MatchResult<string>): Variant {
  if (value in VARIANT) {
    return {
      type: 'variant',
      value: value as VariantValue,
      start,
      end,
    };
  }
  throw new ParserError(`variant '${value}'`, start, end);
}

export interface VariantAtom extends MatchResult<Atom | VariantAtom> {
  type: 'atom-with-variant';
  variant: Variant;
}

function validateAtomWithVariant(instance: AtomWithVariant): VariantAtom {
  return {
    type: 'atom-with-variant',
    variant: validateVariant(instance.variant),
    value: 'type' in instance.value
      ? validateAtomWithVariant(instance.value)
      : validateAtom(instance.value),
    start: instance.start,
    end: instance.end,
  };
}

export interface AtomList extends MatchResult<(Atom | VariantAtom)[]> {
  type: 'atom-list';
}

function validateClassList(instance: ClassList): AtomList {
  return {
    type: 'atom-list',
    value: instance.value.map((item) => (
      item.type === 'atom-with-variant'
        ? validateAtomWithVariant(item)
        : validateAtom(item)
    )),
    start: instance.start,
    end: instance.end,
  };
}

export interface ValidSelector extends MatchResult<CSSSelector> {
  classlist: AtomList;
}

function validateSelector(value: Selector): ValidSelector {
  return {
    value: cssSelector(value.value),
    classlist: validateClassList(value.classlist),
    start: value.start,
    end: value.end,
  };
}

export default function parseClassnames(
  classnames: string,
): ValidSelector[] {
  const results = tokenize(classnames);

  return results.map((result) => validateSelector(result));
}
