import {
  Feed,
  alternation,
  MatchResult,
} from '../../core';
import aspectRatio, { AspectRatio } from './aspect-ratio';
import boxDecoration, { BoxDecoration } from './box-decoration';
import boxSizing, { BoxSizing } from './box-sizing';
import breakAfter, { BreakAfter } from './break-after';
import breakBefore, { BreakBefore } from './break-before';
import breakInside, { BreakInside } from './break-inside';
import clear, { Clear } from './clear';
import columns, { Columns } from './columns';
import container, { Container } from './container';
import display, { Display } from './display';
import float, { Float } from './float';
import isolation, { Isolation } from './isolation';
import objectFit, { ObjectFit } from './object-fit';
import objectPosition, { ObjectPosition } from './object-position';
import overflow, { Overflow } from './overflow';
import overscroll, { Overscroll } from './overscroll';
import position, { Position } from './position';
import visibility, { Visibility } from './visibility';

export type AtomValue =
  | AspectRatio
  | Container
  | Columns
  | BreakAfter
  | BreakBefore
  | BreakInside
  | BoxDecoration
  | BoxSizing
  | Display
  | Float
  | Clear
  | Isolation
  | ObjectFit
  | ObjectPosition
  | Overflow
  | Overscroll
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
  breakInside,
  boxDecoration,
  boxSizing,
  display,
  float,
  clear,
  isolation,
  objectFit,
  objectPosition,
  overflow,
  overscroll,
  position,

  visibility,
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
