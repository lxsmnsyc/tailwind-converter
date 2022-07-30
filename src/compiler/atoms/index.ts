import { Atom } from '../../parser/rules/atom';
import { ATOMS } from '../../values';
import {
  insertProperty,
} from '../css-context';
import createContainerProperty from './container';

export default function createAtom(atom: Atom): void {
  if (atom.value === 'container') {
    createContainerProperty(atom);
  } else {
    insertProperty(ATOMS[atom.value], atom);
  }
}
