import { AspectRatio } from '../../parser/rules/atom/aspect-ratio';
import { insertProperty } from '../css-context';
import { ASPECT_RATIO } from '../../values/aspect-ratio';

export default function createAspectRatioProperty(atom: AspectRatio) {
  insertProperty(ASPECT_RATIO[atom.value], atom);
}
