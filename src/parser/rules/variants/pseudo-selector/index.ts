import { alternation, Feed } from '../../../core';
import childrenPseudoSelector, { Children } from './children';
import formStatePseudoSelector, { FormState } from './form-states';
import openPseudoSelector, { Open } from './open';
import statePseudoSelector, { State } from './states';

export type PseudoSelector =
  | State
  | Children
  | FormState
  | Open;

const matcher = alternation(
  statePseudoSelector,
  childrenPseudoSelector,
  formStatePseudoSelector,
  openPseudoSelector,
);

export default function pseudoSelector(feed: Feed): PseudoSelector | undefined {
  const result = matcher(feed);

  if (result) {
    return result as PseudoSelector;
  }
  return undefined;
}
