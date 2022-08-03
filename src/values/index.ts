import { ALIGN_CONTENT } from './align-content';
import { ALIGN_ITEMS } from './align-items';
import { ALIGN_SELF } from './align-self';
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
import { FONT_FAMILY } from './font-family';
import { FONT_SIZE } from './font-size';
import { FONT_SMOOTHING } from './font-smoothing';
import { FONT_STYLE } from './font-style';
import { FONT_VARIANT_NUMERIC, FONT_VARIANT_NUMERIC_DEFAULTS } from './font-variant-numeric';
import { FONT_WEIGHT } from './font-weight';
import { GAP } from './gap';
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
import { HEIGHT } from './height';
import {
  BOTTOM, INSET, INSET_X, INSET_Y, LEFT, RIGHT, TOP,
} from './inset';
import { ISOLATION } from './isolation';
import { JUSTIFY_CONTENT } from './justify-content';
import { JUSTIFY_ITEMS } from './justify-items';
import { JUSTIFY_SELF } from './justify-self';
import { LETTER_SPACING } from './letter-spacing';
import { LINE_HEIGHT } from './line-height';
import { LIST_STYLE_POSITION } from './list-style-position';
import { LIST_STYLE_TYPE } from './list-style-type';
import { MARGIN } from './margin';
import { MAX_HEIGHT } from './max-height';
import { MAX_WIDTH } from './max-width';
import { MIN_HEIGHT } from './min-height';
import { MIN_WIDTH } from './min-width';
import { OBJECT_FIT } from './object-fit';
import { OBJECT_POSITION } from './object-position';
import { ORDER } from './order';
import { OVERFLOW } from './overflow';
import { OVERSCROLL } from './overscroll';
import { PADDING } from './padding';
import { PLACE_CONTENT } from './place-content';
import { PLACE_ITEMS } from './place-items';
import { PLACE_SELF } from './place-self';
import { POSITION } from './position';
import { SPACE_BETWEEN } from './space-between';
import { TEXT_ALIGN } from './text-align';
import { TEXT_COLOR } from './text-color';
import { TEXT_DECORATION } from './text-decoration';
import { TEXT_DECORATION_COLOR } from './text-decoration-color';
import { VISIBILITY } from './visibility';
import { WIDTH } from './width';
import { Z_INDEX } from './z-index';

export const DEFAULTS = {
  ...FONT_VARIANT_NUMERIC_DEFAULTS,
};

export const ATOMS = {
  // Layouts
  ...ASPECT_RATIO,
  container: {},
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
  ...JUSTIFY_CONTENT,
  ...JUSTIFY_ITEMS,
  ...JUSTIFY_SELF,
  ...ALIGN_CONTENT,
  ...ALIGN_ITEMS,
  ...ALIGN_SELF,
  ...PLACE_CONTENT,
  ...PLACE_ITEMS,
  ...PLACE_SELF,

  // Spacing
  ...PADDING,
  ...MARGIN,
  ...SPACE_BETWEEN,

  // Sizing
  ...WIDTH,
  ...MIN_WIDTH,
  ...MAX_WIDTH,
  ...HEIGHT,
  ...MIN_HEIGHT,
  ...MAX_HEIGHT,

  // Typegraphy
  ...FONT_FAMILY,
  ...FONT_SIZE,
  ...FONT_SMOOTHING,
  ...FONT_STYLE,
  ...FONT_WEIGHT,
  ...FONT_VARIANT_NUMERIC,
  ...LETTER_SPACING,
  ...LINE_HEIGHT,
  ...LIST_STYLE_TYPE,
  ...LIST_STYLE_POSITION,
  ...TEXT_ALIGN,
  ...TEXT_COLOR,
  ...TEXT_DECORATION,
  ...TEXT_DECORATION_COLOR,
};

export type AtomValue = keyof typeof ATOMS;
export type DefaultValue = keyof typeof DEFAULTS;
