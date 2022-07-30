import { Atom } from '../../parser/rules/atom';
import { BaseScreenValue, BASE_SCREEN } from '../../values/base/screen';
import { BREAKPOINTS } from '../../parser/rules/variants/breakpoints';
import {
  getMedia, insertProperty, popMedia, pushMedia,
} from '../css-context';
import { CSSMediaQuery } from '../css-media-query';

function createContainer() {
  const properties: Record<string, string> = {};

  for (const property of Object.keys(BASE_SCREEN)) {
    properties[BREAKPOINTS[property as BaseScreenValue]] = `max-width: ${BASE_SCREEN[property as BaseScreenValue]};`;
  }

  return properties;
}
const CONTAINERS = createContainer();

export default function createContainerProperty(atom: Atom) {
  const medias: CSSMediaQuery[] = [];

  function reset() {
    for (let i = medias.length - 1; i >= 0; i -= 1) {
      pushMedia(medias[i]);
    }
  }

  let currentMedia = getMedia();

  while (currentMedia) {
    if (currentMedia.query in CONTAINERS) {
      insertProperty(CONTAINERS[currentMedia.query], atom);
      reset();
      return;
    }
    medias.push(currentMedia);
    popMedia();
    currentMedia = getMedia();
  }

  reset();
  insertProperty('width: 100%;', atom);
}
