import { createEffect, JSX } from 'solid-js';
import loadHighlighter from '../utils/load-highlighter';

export interface ASTDisplayProps {
  value: string;
  onLoad(): void;
  onSuccess(): void;
}

export default function ASTDisplay(props: ASTDisplayProps): JSX.Element {
  let ref: HTMLDivElement | undefined;

  createEffect(async () => {
    const currentValue = props.value;
    if (ref) {
      props.onLoad();
      const highlighter = await loadHighlighter();
      await highlighter.loadLanguage('json');
      const result = highlighter.codeToHtml(currentValue, {
        theme: 'material-darker',
        lang: 'json',
      });
      ref.innerHTML = result;
      props.onSuccess();
    }
  });

  return (
    <div class="h-full" ref={ref} />
  );
}
