import { Atom } from '../../parser/rules/atom';
import {
  ATOMS,
  AtomValue,
  DEFAULTS,
  DefaultValue,
} from '../../values';
import { SpaceBetweenValue, SPACE_BETWEEN } from '../../values/space-between';
import { createCSSBlock } from '../css-block';
import {
  getBlock,
  getDefaultBlock,
  getMedia,
  insertProperty,
  insertPropertyForBlock,
} from '../css-context';
import createContainerProperty from './container';

function isSpaceBetween(
  value: AtomValue,
): value is Exclude<SpaceBetweenValue, 'space-x-reverse' | 'space-y-reverse'> {
  return !(value === 'space-x-reverse' || value === 'space-y-reverse') && value in SPACE_BETWEEN;
}

export default function createAtom(atom: Atom): void {
  const value = atom.value as AtomValue;

  if (value in DEFAULTS) {
    insertPropertyForBlock(getDefaultBlock(), DEFAULTS[value as DefaultValue], atom);
  }

  if (value === 'container') {
    createContainerProperty(atom);
  } else if (isSpaceBetween(value)) {
    const currentBlock = getBlock();
    const block = createCSSBlock(
      currentBlock.selectors.map((item) => `${item} > :not([hidden]) ~ :not([hidden])`),
      atom,
    );
    getMedia().children.push(block);
    insertPropertyForBlock(block, ATOMS[value], atom);
  } else {
    insertProperty(ATOMS[value], atom);
  }
}
