import {
  MatchResult,
  pattern,
  sequence,
  literal,
  optional,
  createFeed,
} from './core';
import ParserError from './ParserError';
import {
  Identifier,
  AttrMatcher,
  Whitespace,
  StringExpr,
  Name,
} from './tokens';

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
  { value, start, end }: MatchResult<string>,
): CSSSelector {
  const feed = createFeed(value);
  const idResult = idSelector(feed);

  if (idResult) {
    return {
      type: 'id-selector',
      value: idResult.value[1].value,
      start,
      end,
    };
  }
  const classResult = classSelector(feed);

  if (classResult) {
    return {
      type: 'class-selector',
      value: classResult.value[1].value,
      start,
      end,
    };
  }

  const typeResult = ident(feed);

  if (typeResult) {
    return {
      type: 'type-selector',
      value: typeResult.value,
      start,
      end,
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
      start,
      end,
    };
  }

  throw new ParserError('CSS Selector', start, end);
}
