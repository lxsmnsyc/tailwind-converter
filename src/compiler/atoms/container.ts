import { Container } from '../../parser/rules/atom/container';
import {
  getMedia, insertProperty, popMedia, pushMedia,
} from '../css-context';
import { CSSMediaQuery } from '../css-media-query';
import { BREAKPOINTS } from '../variants/breakpoint';

const CONTAINERS = {
  [BREAKPOINTS.sm]: 'max-width: 640px;',
  [BREAKPOINTS.md]: 'max-width: 768px;',
  [BREAKPOINTS.lg]: 'max-width: 1024px;',
  [BREAKPOINTS.xl]: 'max-width: 1280px;',
  [BREAKPOINTS['2xl']]: 'max-width: 1536px;',
};

export default function createContainerProperty(atom: Container) {
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
