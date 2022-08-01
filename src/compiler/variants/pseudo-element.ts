import { Variant } from '../../values/variants';
import { PseudoElementVariantValue } from '../../values/variants/pseudo-element';
import { CSSBlock, createCSSBlock } from '../css-block';

export default function createPseudoElementBlock(
  base: string[],
  variant: Variant,
  value: PseudoElementVariantValue,
): CSSBlock {
  switch (value) {
    case 'after':
      return createCSSBlock(base.map((item) => `${item}::after`), variant);
    case 'backdrop': {
      const classes = [];
      for (const name of base) {
        classes.push(`${name}::-webkit-backdrop`);
        classes.push(`${name}::backdrop`);
      }
      return createCSSBlock(classes, variant);
    }
    case 'before':
      return createCSSBlock(base.map((item) => `${item}::before`), variant);
    case 'file': {
      const classes = [];
      for (const name of base) {
        classes.push(`${name}::-webkit-file-upload-button`);
        classes.push(`${name}::file-selector-button`);
      }
      return createCSSBlock(classes, variant);
    }
    case 'first-letter':
      return createCSSBlock(base.map((item) => `${item}::first-letter`), variant);
    case 'first-line':
      return createCSSBlock(base.map((item) => `${item}::first-line`), variant);
    case 'marker': {
      const classes = [];
      for (const name of base) {
        classes.push(`${name} *::marker`);
        classes.push(`${name}::marker`);
      }
      return createCSSBlock(classes, variant);
    }
    case 'placeholder':
      return createCSSBlock(base.map((item) => `${item}::placeholder`), variant);
    case 'selection': {
      const classes = [];
      for (const name of base) {
        classes.push(`${name} *::selection`);
        classes.push(`${name}::selection`);
      }
      return createCSSBlock(classes, variant);
    }
    default: throw new Error('Invalid pseudo-selector');
  }
}
