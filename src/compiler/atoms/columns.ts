import { Columns } from '../../parser/rules/atom/columns';
import { COLUMNS } from '../../values/columns';
import { insertProperty } from '../css-context';

export default function createColumnsProperty(atom: Columns) {
  insertProperty(COLUMNS[atom.value], atom);
}
