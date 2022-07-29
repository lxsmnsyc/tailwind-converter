import { Feed, alternation, MatchResult } from '../../core';
import aspectRatio, { AspectRatio } from './aspect-ratio';
import blank, { Blank } from './blank';
import boxDecoration, { BoxDecoration } from './box-decoration';
import boxSizing, { BoxSizing } from './box-sizing';
import breakAfter, { BreakAfter } from './break-after';
import breakBefore, { BreakBefore } from './break-before';
import clear, { Clear } from './clear';
import columns, { Columns } from './columns';
import container, { Container } from './container';
import display, { Display } from './display';
import isolation, { Isolation } from './isolation';
import objectFit, { ObjectFit } from './object-fit';
import objectPosition, { ObjectPosition } from './object-position';
import overflow, { Overflow } from './overflow';
import overflowBehavior, { OverflowBehavior } from './overflow-behavior';
import position, { Position } from './position';
import visibility, { Visibility } from './visibility';

export type AtomValue =
  | AspectRatio
  | Container
  | Columns
  | BreakAfter
  | BreakBefore
  | Blank
  | BoxDecoration
  | BoxSizing
  | Display
  | Clear
  | Isolation
  | ObjectFit
  | ObjectPosition
  | Overflow
  | OverflowBehavior
  | Position
  | Visibility;

export interface Atom extends MatchResult<AtomValue> {
  type: 'atom';
}

const matcher = alternation(
  aspectRatio,
  container,
  columns,
  breakAfter,
  breakBefore,
  boxDecoration,
  boxSizing,
  display,
  clear,
  isolation,
  objectFit,
  objectPosition,
  overflow,
  overflowBehavior,
  position,

  visibility,

  blank,
);

export default function atom(feed: Feed): Atom | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'atom',
      value: result as AtomValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
