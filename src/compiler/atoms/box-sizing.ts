import { BoxSizing } from '../../parser/rules/atom/box-sizing';
import { BOX_SIZING } from '../../values/box-sizing';
import { insertProperty } from '../css-context';

export default function createBoxSizingProperty(atom: BoxSizing) {
  insertProperty(BOX_SIZING[atom.value], atom);
}
