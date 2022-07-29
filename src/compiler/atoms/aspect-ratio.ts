import { AspectRatio } from '../../parser/rules/atom/aspect-ratio';
import { insertProperty } from '../css-context';

const PROPERTIES = {
  'aspect-auto': 'aspect-ratio: auto;',
  'aspect-square': 'aspect-ratio: 1 / 1;',
  'aspect-video': 'aspect-ratio: 16 / 9;',
};

export default function createAspectRatioProperty(atom: AspectRatio) {
  insertProperty(PROPERTIES[atom.value], atom);
}
