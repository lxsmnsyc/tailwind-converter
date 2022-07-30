import { AtomValue } from '../../parser/rules/atom';
import { ASPECT_RATIO } from '../../values/aspect-ratio';
import { BOX_DECORATION } from '../../values/box-decoration';
import { BOX_SIZING } from '../../values/box-sizing';
import { BREAK_AFTER } from '../../values/break-after';
import { BREAK_BEFORE } from '../../values/break-before';
import { BREAK_INSIDE } from '../../values/break-inside';
import { CLEAR } from '../../values/clear';
import { COLUMNS } from '../../values/columns';
import { DISPLAY } from '../../values/display';
import { FLEX } from '../../values/flex';
import { FLEX_BASIS } from '../../values/flex-basis';
import { FLEX_DIRECTION } from '../../values/flex-direction';
import { FLEX_GROW } from '../../values/flex-grow';
import { FLEX_SHRINK } from '../../values/flex-shrink';
import { FLEX_WRAP } from '../../values/flex-wrap';
import { FLOAT } from '../../values/float';
import { GRID_COLUMN_START } from '../../values/grid-column-start';
import { GRID_TEMPLATE_COLUMNS } from '../../values/grid-template-columns';
import {
  BOTTOM,
  INSET,
  INSET_X,
  INSET_Y,
  LEFT,
  RIGHT,
  TOP,
} from '../../values/inset';
import { ISOLATION } from '../../values/isolation';
import { OBJECT_FIT } from '../../values/object-fit';
import { OBJECT_POSITION } from '../../values/object-position';
import { ORDER } from '../../values/order';
import { OVERFLOW } from '../../values/overflow';
import { OVERSCROLL } from '../../values/overscroll';
import { POSITION } from '../../values/position';
import { VISIBILITY } from '../../values/visibility';
import { Z_INDEX } from '../../values/z-index';
import {
  insertProperty,
} from '../css-context';
import createContainerProperty from './container';

export default function createAtom(atom: AtomValue): void {
  switch (atom.type) {
    case 'aspect-ratio': return insertProperty(ASPECT_RATIO[atom.value], atom);
    case 'container': return createContainerProperty(atom);
    case 'columns': return insertProperty(COLUMNS[atom.value], atom);
    case 'break-after': return insertProperty(BREAK_AFTER[atom.value], atom);
    case 'break-before': return insertProperty(BREAK_BEFORE[atom.value], atom);
    case 'break-inside': return insertProperty(BREAK_INSIDE[atom.value], atom);
    case 'box-decoration': return insertProperty(BOX_DECORATION[atom.value], atom);
    case 'box-sizing': return insertProperty(BOX_SIZING[atom.value], atom);
    case 'display': return insertProperty(DISPLAY[atom.value], atom);
    case 'float': return insertProperty(FLOAT[atom.value], atom);
    case 'clear': return insertProperty(CLEAR[atom.value], atom);
    case 'isolation': return insertProperty(ISOLATION[atom.value], atom);
    case 'object-fit': return insertProperty(OBJECT_FIT[atom.value], atom);
    case 'object-position': return insertProperty(OBJECT_POSITION[atom.value], atom);
    case 'overflow': return insertProperty(OVERFLOW[atom.value], atom);
    case 'overscroll': return insertProperty(OVERSCROLL[atom.value], atom);
    case 'position': return insertProperty(POSITION[atom.value], atom);
    case 'inset': return insertProperty(INSET[atom.value], atom);
    case 'inset-x': return insertProperty(INSET_X[atom.value], atom);
    case 'inset-y': return insertProperty(INSET_Y[atom.value], atom);
    case 'top': return insertProperty(TOP[atom.value], atom);
    case 'bottom': return insertProperty(BOTTOM[atom.value], atom);
    case 'left': return insertProperty(LEFT[atom.value], atom);
    case 'right': return insertProperty(RIGHT[atom.value], atom);
    case 'visibility': return insertProperty(VISIBILITY[atom.value], atom);
    case 'flex-basis': return insertProperty(FLEX_BASIS[atom.value], atom);
    case 'flex-direction': return insertProperty(FLEX_DIRECTION[atom.value], atom);
    case 'flex-wrap': return insertProperty(FLEX_WRAP[atom.value], atom);
    case 'flex': return insertProperty(FLEX[atom.value], atom);
    case 'flex-grow': return insertProperty(FLEX_GROW[atom.value], atom);
    case 'flex-shrink': return insertProperty(FLEX_SHRINK[atom.value], atom);
    case 'order': return insertProperty(ORDER[atom.value], atom);
    case 'z-index': return insertProperty(Z_INDEX[atom.value], atom);
    case 'grid-template-columns': return insertProperty(GRID_TEMPLATE_COLUMNS[atom.value], atom);
    case 'grid-column-start': return insertProperty(GRID_COLUMN_START[atom.value], atom);
    default:
      throw new Error('Unknown type');
  }
}
