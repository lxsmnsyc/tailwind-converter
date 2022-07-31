import {
  MatchResult,
  Feed,
  pattern,
  sequence,
  literal,
  optional,
  createFeed,
} from './core';
import ParserError from './ParserError';

// Rules
const Hex = '[0-9a-fA-F]';
const NewlineOrSpace = '(\\r\\n)|[ \\t\\r\\n\\f]';
const Unicode = `\\\\${Hex}${Hex}?${Hex}?${Hex}?${Hex}?${Hex}(${NewlineOrSpace})`;
const Escape = `(${Unicode})|(\\\\[^\\r\\n\\f0-9a-fA-F])`;
const Nonascii = '[^\\u0000-\\u007f]';
const Nmstart = `[_a-zA-Z]|${Nonascii}|(${Escape})`;
const Nmchar = `[_a-zA-Z0-9\\-]|${Nonascii}|(${Escape})`;
const Identifier = `-?(${Nmstart})(${Nmchar})*`;
const Name = `(${Nmchar})+`;
const NewLine = '\\n|(\\r\\n)|\\r|\\f';
const BaseString = `([^\\n\\r\\f\\"]|\\\\${NewLine}|${Nonascii}|(${Escape}))*`;
const SingleQuote = `'${BaseString}'`;
const DoubleQuote = `"${BaseString}"`;
const StringExpr = `(${SingleQuote})|(${DoubleQuote})`;
const Space = '[ \\t\\r\\n\\f]+';
const Whitespace = `(${Space})*`;
const AttrMatcher = '[~|\\^$*]?=';

const ident = pattern(Identifier);

const attributeValue = optional(
  sequence(
    pattern(AttrMatcher),
    pattern(Whitespace),
    pattern(`(${StringExpr})|(${Identifier})`),
    pattern(Whitespace),
    pattern('[is]?'),
    pattern(Whitespace),
  ),
);

const attributeSelector = sequence(
  literal('['),
  pattern(Whitespace),
  ident,
  pattern(Whitespace),
  attributeValue,
  literal(']'),
);

const idSelector = sequence(
  literal('#'),
  pattern(Name),
);
const classSelector = sequence(
  literal('.'),
  ident,
);

interface IdSelector extends MatchResult<string> {
  type: 'id-selector';
}

interface ClassSelector extends MatchResult<string> {
  type: 'class-selector';
}

interface TypeSelector extends MatchResult<string> {
  type: 'type-selector';
}

interface AttributeSelector extends MatchResult<string | undefined | null> {
  type: 'attribute-selector';
  property: string;
  matcher?: string | null;
  modifier?: string | null;
}

export type CSSSelector = IdSelector | ClassSelector | TypeSelector | AttributeSelector;

export default function cssSelector(
  feed: Feed,
): CSSSelector {
  const idResult = idSelector(feed);

  if (idResult) {
    return {
      type: 'id-selector',
      value: idResult.value[1].value,
      start: idResult.start,
      end: idResult.end,
    };
  }
  const classResult = classSelector(feed);

  if (classResult) {
    return {
      type: 'class-selector',
      value: classResult.value[1].value,
      start: classResult.start,
      end: classResult.end,
    };
  }

  const typeResult = ident(feed);

  if (typeResult) {
    return {
      type: 'type-selector',
      value: typeResult.value,
      start: typeResult.start,
      end: typeResult.end,
    };
  }

  const attrResult = attributeSelector(feed);

  if (attrResult) {
    const property = attrResult.value[2];
    const afterProperty = attrResult.value[4].value as MatchResult<MatchResult<string>[]>;
    return {
      type: 'attribute-selector',
      property: property.value as string,
      matcher: afterProperty.value?.[0]?.value as string | null,
      value: afterProperty.value?.[2]?.value as string | null,
      modifier: afterProperty.value?.[4]?.value as string | null,
      start: attrResult.start,
      end: attrResult.end,
    };
  }

  throw new ParserError(feed);
}
