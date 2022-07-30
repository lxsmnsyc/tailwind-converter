import { BreakInside } from '../../parser/rules/atom/break-inside';
import { BREAK_INSIDE } from '../../values/break-inside';
import { insertProperty } from '../css-context';

export default function createBreakInsideProperty(atom: BreakInside) {
  insertProperty(BREAK_INSIDE[atom.value], atom);
}
