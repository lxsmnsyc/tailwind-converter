import {
  Feed,
  alternation,
  MatchResult,
} from '../../core';
import aspectRatio, { AspectRatio } from './aspect-ratio';
import bottom, { Bottom } from './bottom';
import boxDecoration, { BoxDecoration } from './box-decoration';
import boxSizing, { BoxSizing } from './box-sizing';
import breakAfter, { BreakAfter } from './break-after';
import breakBefore, { BreakBefore } from './break-before';
import breakInside, { BreakInside } from './break-inside';
import clear, { Clear } from './clear';
import columns, { Columns } from './columns';
import container, { Container } from './container';
import display, { Display } from './display';
import flex, { Flex } from './flex';
import flexBasis, { FlexBasis } from './flex-basis';
import flexDirection, { FlexDirection } from './flex-direction';
import flexGrow, { FlexGrow } from './flex-grow';
import flexShrink, { FlexShrink } from './flex-shrink';
import flexWrap, { FlexWrap } from './flex-wrap';
import float, { Float } from './float';
import inset, { Inset } from './inset';
import insetX, { InsetX } from './inset-x';
import insetY, { InsetY } from './inset-y';
import isolation, { Isolation } from './isolation';
import left, { Left } from './left';
import objectFit, { ObjectFit } from './object-fit';
import objectPosition, { ObjectPosition } from './object-position';
import overflow, { Overflow } from './overflow';
import overscroll, { Overscroll } from './overscroll';
import position, { Position } from './position';
import right, { Right } from './right';
import top, { Top } from './top';
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
  | Inset
  | InsetX
  | InsetY
  | Top
  | Bottom
  | Left
  | Right
  | Visibility
  // Flexbox and Grid
  | FlexBasis
  | FlexDirection
  | FlexWrap
  | Flex
  | FlexGrow
  | FlexShrink;

export interface Atom extends MatchResult<AtomValue> {
  type: 'atom';
}

const matcher = alternation(
  // Flexbox and Grid
  flexBasis,
  flexDirection,
  flexWrap,
  flex,
  flexGrow,
  flexShrink,

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
  inset,
  insetX,
  insetY,
  top,
  bottom,
  left,
  right,
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
