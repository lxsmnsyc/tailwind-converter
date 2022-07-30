import { AtomValue } from '../../parser/rules/atom';
import createAspectRatioProperty from './aspect-ratio';
import createBreakAfterProperty from './break-after';
import createBreakBeforeProperty from './break-before';
import createColumnsProperty from './columns';
import createContainerProperty from './container';

export default function createAtom(atom: AtomValue): void {
  switch (atom.type) {
    case 'blank':
      break;
    case 'aspect-ratio':
      createAspectRatioProperty(atom);
      break;
    case 'container':
      createContainerProperty(atom);
      break;
    case 'columns':
      createColumnsProperty(atom);
      break;
    case 'break-after':
      createBreakAfterProperty(atom);
      break;
    case 'break-before':
      createBreakBeforeProperty(atom);
      break;
    default:
      throw new Error('Unknown type');
  }
}
