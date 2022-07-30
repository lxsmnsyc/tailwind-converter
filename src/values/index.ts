import createSortedMap from '../utils/sorted-map';
import { ASPECT_RATIO } from './aspect-ratio';
import { BOX_DECORATION } from './box-decoration';
import { BOX_SIZING } from './box-sizing';
import { BREAK_AFTER } from './break-after';
import { BREAK_BEFORE } from './break-before';
import { BREAK_INSIDE } from './break-inside';
import { CLEAR } from './clear';
import { COLUMNS } from './columns';
import { DISPLAY } from './display';
import { FLEX } from './flex';
import { FLEX_BASIS } from './flex-basis';
import { FLEX_DIRECTION } from './flex-direction';
import { FLEX_GROW } from './flex-grow';
import { FLEX_SHRINK } from './flex-shrink';
import { FLEX_WRAP } from './flex-wrap';
import { FLOAT } from './float';
import { GRID_COLUMN_START } from './grid-column-start';
import { GRID_TEMPLATE_COLUMNS } from './grid-template-columns';
import {
  BOTTOM, INSET, INSET_X, INSET_Y, LEFT, RIGHT, TOP,
} from './inset';
import { ISOLATION } from './isolation';
import { OBJECT_FIT } from './object-fit';
import { OBJECT_POSITION } from './object-position';
import { ORDER } from './order';
import { OVERFLOW } from './overflow';
import { OVERSCROLL } from './overscroll';
import { POSITION } from './position';
import { VISIBILITY } from './visibility';
import { Z_INDEX } from './z-index';

export const ATOMS = createSortedMap({
  ...ASPECT_RATIO,
  ...BOX_DECORATION,
  ...BOX_SIZING,
  ...BREAK_AFTER,
  ...BREAK_BEFORE,
  ...BREAK_INSIDE,
  ...CLEAR,
  ...COLUMNS,
  ...DISPLAY,
  ...FLEX_BASIS,
  ...FLEX_DIRECTION,
  ...FLEX_GROW,
  ...FLEX_SHRINK,
  ...FLEX_WRAP,
  ...FLEX,
  ...FLOAT,
  ...GRID_COLUMN_START,
  ...GRID_TEMPLATE_COLUMNS,
  ...INSET,
  ...INSET_X,
  ...INSET_Y,
  ...BOTTOM,
  ...TOP,
  ...LEFT,
  ...RIGHT,
  ...ISOLATION,
  ...OBJECT_FIT,
  ...OBJECT_POSITION,
  ...ORDER,
  ...OVERFLOW,
  ...OVERSCROLL,
  ...POSITION,
  ...VISIBILITY,
  ...Z_INDEX,
  container: '',
});

export type AtomValue = keyof typeof ATOMS;
