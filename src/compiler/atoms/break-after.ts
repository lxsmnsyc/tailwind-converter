import { BreakAfter } from '../../parser/rules/atom/break-after';
import { insertProperty } from '../css-context';

const PROPERTIES = {
  'break-after-auto': 'break-after: auto;',
  'break-after-avoid': 'break-after: avoid;',
  'break-after-all': 'break-after: all;',
  'break-after-avoid-page': 'break-after: avoig-page;',
  'break-after-page': 'break-after: page;',
  'break-after-left': 'break-after: left;',
  'break-after-right': 'break-after: right;',
  'break-after-column': 'break-after: column;',
};

export default function createBreakAfterProperty(atom: BreakAfter) {
  insertProperty(PROPERTIES[atom.value], atom);
}
