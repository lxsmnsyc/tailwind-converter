import { BoxDecoration } from '../../parser/rules/atom/box-decoration';
import { BOX_DECORATION } from '../../values/box-decoration';
import { insertProperty } from '../css-context';

export default function createBoxDecorationProperty(atom: BoxDecoration) {
  insertProperty(BOX_DECORATION[atom.value], atom);
}
