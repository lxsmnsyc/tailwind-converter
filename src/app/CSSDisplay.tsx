import { createEffect, JSX } from 'solid-js';
import loadHighlighter from '../utils/load-highlighter';

export interface CSSDisplayProps {
  value: string;
  onLoad(): void;
  onSuccess(): void;
}

export default function CSSDisplay(props: CSSDisplayProps): JSX.Element {
  let ref: HTMLDivElement | undefined;

  createEffect(async () => {
    const currentValue = props.value;
    if (ref) {
      props.onLoad();
      const highlighter = await loadHighlighter();
      await highlighter.loadLanguage('css');
      const result = highlighter.codeToHtml(currentValue, {
        theme: 'material-darker',
        lang: 'css',
      });
      ref.innerHTML = result;
      props.onSuccess();
    }
  });

  return (
    <div class="h-full" ref={ref} />
  );
}
