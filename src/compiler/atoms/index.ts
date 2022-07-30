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
import { FLOAT } from '../../values/float';
import { ISOLATION } from '../../values/isolation';
import { OBJECT_FIT } from '../../values/object-fit';
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
    default:
      throw new Error('Unknown type');
  }
}
