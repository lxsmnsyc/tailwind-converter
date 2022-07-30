import { BreakBefore } from '../../parser/rules/atom/break-before';
import { BREAK_BEFORE } from '../../values/break-before';
import { insertProperty } from '../css-context';

export default function createBreakBeforeProperty(atom: BreakBefore) {
  insertProperty(BREAK_BEFORE[atom.value], atom);
}
