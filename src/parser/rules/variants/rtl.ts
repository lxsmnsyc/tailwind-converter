import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type RTLValue =
  | 'rtl'
  | 'ltr';

export interface RTL extends MatchResult<RTLValue> {
  type: 'variant:rtl';
}

const matcher = alternation(
  literal('rtl'),
  literal('ltr'),
);

export default function rtlVariant(feed: Feed): RTL | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:rtl',
      value: result.value as RTLValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
