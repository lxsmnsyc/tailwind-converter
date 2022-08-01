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
import { GAP, GAP_X, GAP_Y } from './gap';
import { GRID_AUTO_COLUMNS } from './grid-auto-columns';
import { GRID_AUTO_FLOW } from './grid-auto-flow';
import { GRID_AUTO_ROWS } from './grid-auto-rows';
import { GRID_COLUMN } from './grid-column';
import { GRID_COLUMN_END } from './grid-column-end';
import { GRID_COLUMN_START } from './grid-column-start';
import { GRID_ROW } from './grid-row';
import { GRID_ROW_END } from './grid-row-end';
import { GRID_ROW_START } from './grid-row-start';
import { GRID_TEMPLATE_COLUMNS } from './grid-template-columns';
import { GRID_TEMPLATE_ROWS } from './grid-template-rows';
import {
  BOTTOM, INSET, INSET_X, INSET_Y, LEFT, RIGHT, TOP,
} from './inset';
import { ISOLATION } from './isolation';
import { JUSTIFY_CONTENT } from './justify-content';
import { JUSTIFY_ITEMS } from './justify-items';
import { JUSTIFY_SELF } from './justify-self';
import { OBJECT_FIT } from './object-fit';
import { OBJECT_POSITION } from './object-position';
import { ORDER } from './order';
import { OVERFLOW } from './overflow';
import { OVERSCROLL } from './overscroll';
import { POSITION } from './position';
import { VISIBILITY } from './visibility';
import { Z_INDEX } from './z-index';

export const ATOMS = {
  // Layouts
  ...ASPECT_RATIO,
  container: '',
  ...COLUMNS,
  ...BREAK_AFTER,
  ...BREAK_BEFORE,
  ...BREAK_INSIDE,
  ...BOX_DECORATION,
  ...BOX_SIZING,
  ...DISPLAY,
  ...FLOAT,
  ...CLEAR,
  ...ISOLATION,
  ...OBJECT_FIT,
  ...OBJECT_POSITION,
  ...OVERFLOW,
  ...OVERSCROLL,
  ...POSITION,
  ...INSET,
  ...INSET_X,
  ...INSET_Y,
  ...BOTTOM,
  ...TOP,
  ...LEFT,
  ...RIGHT,
  ...VISIBILITY,
  ...Z_INDEX,
  // Flex and Grid
  ...FLEX_BASIS,
  ...FLEX_DIRECTION,
  ...FLEX_WRAP,
  ...FLEX,
  ...FLEX_GROW,
  ...FLEX_SHRINK,
  ...ORDER,
  ...GRID_TEMPLATE_COLUMNS,
  ...GRID_COLUMN,
  ...GRID_COLUMN_START,
  ...GRID_COLUMN_END,
  ...GRID_TEMPLATE_ROWS,
  ...GRID_ROW,
  ...GRID_ROW_START,
  ...GRID_ROW_END,
  ...GRID_AUTO_FLOW,
  ...GRID_AUTO_COLUMNS,
  ...GRID_AUTO_ROWS,
  ...GAP,
  ...GAP_X,
  ...GAP_Y,
  ...JUSTIFY_CONTENT,
  ...JUSTIFY_ITEMS,
  ...JUSTIFY_SELF,
};

export type AtomValue = keyof typeof ATOMS;
