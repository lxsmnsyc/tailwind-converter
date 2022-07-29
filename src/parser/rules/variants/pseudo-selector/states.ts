import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../../core';

export type StateValue =
  | 'hover'
  | 'focus'
  | 'active'
  | 'visited'
  | 'focus-within'
  | 'focus-visible'
  | 'target';

export interface State extends MatchResult<StateValue> {
  type: 'pseudo-selector:state';
}

const matcher = alternation(
  literal('hover'),
  literal('focus'),
  literal('active'),
  literal('visited'),
  literal('focus-within'),
  literal('focus-visible'),
  literal('target'),
);

export default function statePseudoSelector(feed: Feed): State | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'pseudo-selector:state',
      value: result.value as StateValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
