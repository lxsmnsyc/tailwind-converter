import { AtomValue } from '../../parser/rules/atom';
import createAspectRatioProperty from './aspect-ratio';
import createBoxDecorationProperty from './box-decoration';
import createBoxSizingProperty from './box-sizing';
import createBreakAfterProperty from './break-after';
import createBreakBeforeProperty from './break-before';
import createBreakInsideProperty from './break-inside';
import createColumnsProperty from './columns';
import createContainerProperty from './container';

export default function createAtom(atom: AtomValue): void {
  switch (atom.type) {
    case 'aspect-ratio': return createAspectRatioProperty(atom);
    case 'container': return createContainerProperty(atom);
    case 'columns': return createColumnsProperty(atom);
    case 'break-after': return createBreakAfterProperty(atom);
    case 'break-before': return createBreakBeforeProperty(atom);
    case 'break-inside': return createBreakInsideProperty(atom);
    case 'box-decoration': return createBoxDecorationProperty(atom);
    case 'box-sizing': return createBoxSizingProperty(atom);
    default:
      throw new Error('Unknown type');
  }
}
