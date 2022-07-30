import { BreakAfter } from '../../parser/rules/atom/break-after';
import { BREAK_AFTER } from '../../values/break-after';
import { insertProperty } from '../css-context';

export default function createBreakAfterProperty(atom: BreakAfter) {
  insertProperty(BREAK_AFTER[atom.value], atom);
}
