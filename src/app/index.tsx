import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
} from 'solid-headless';
import { createEffect, createSignal } from 'solid-js';
import compile from '../compiler';
import ASTDisplay from './ASTDisplay';
import Button from './Button';
import CSSDisplay from './CSSDisplay';

function debounce<T extends any[]>(cb: (...args: T) => void, ms = 200) {
  let timeout: number | undefined;

  return (...args: T) => {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      cb(...args);
    }, ms);
  };
}

export default function App() {
  const [input, setInput] = createSignal('aspect-square lg:aspect-video');
  const [pendingInput, setPendingInput] = createSignal(input());
  const [base, setBase] = createSignal('.my-class');
  const [pendingBase, setPendingBase] = createSignal(base());
  const [processedCSS, setProcessedCSS] = createSignal('');
  const [processedAST, setProcessedAST] = createSignal('');
  const [cssLoading, setCSSLoading] = createSignal(false);
  const [astLoading, setASTLoading] = createSignal(false);

  const debouncedSetInput = debounce(setPendingInput, 1000);
  const debouncedSetBase = debounce(setPendingBase);

  createEffect(() => {
    const result = compile(pendingBase(), pendingInput(), {
      darkMode: '.dark',
    });
    setProcessedCSS(result.css);
    setProcessedAST(JSON.stringify(
      result.ast,
      undefined,
      2,
    ));
  });

  function onCSSLoad() {
    setCSSLoading(true);
  }

  function onCSSSuccess() {
    setCSSLoading(false);
  }
  function onASTLoad() {
    setASTLoading(true);
  }

  function onASTSuccess() {
    setASTLoading(false);
  }

  return (
    <div class="p-4">
      <div class="gap-4 flex flex-col md:flex-row w-full h-full">
        <div class="flex flex-col space-y-2 w-full">
          <div>
            <span class="text-2xl font-bold">Class</span>
            <textarea
              class="w-full rounded p-2 outline-none ring-2 ring-gray-300 dark:ring-gray-700 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 dark:bg-black"
              onInput={(e) => {
                const { value } = e.target as HTMLInputElement;
                debouncedSetInput(value);
                setInput(value);
              }}
              value={input()}
            />
          </div>
          <div>
            <span class="text-xl font-bold">Options</span>
          </div>
        </div>
        <div class="flex flex-col space-y-2 w-full max-h-[90vh]">
          <TabGroup class="flex w-full h-full flex-col space-y-2 relative" defaultValue="CSS" horizontal>
            <div class="absolute m-6 right-0 flex flex-none flex-row justify-between items-center">
              <TabList class="flex flex-row space-x-2">
                <Tab as={Button} value="CSS">CSS</Tab>
                <Tab as={Button} value="AST">AST</Tab>
              </TabList>
            </div>
            <TabPanel class="flex-1 w-full h-full overflow-hidden rounded-lg" value="CSS">
              <CSSDisplay onLoad={onCSSLoad} onSuccess={onCSSSuccess} value={processedCSS()} />
            </TabPanel>
            <TabPanel class="flex-1 w-full h-full overflow-hidden rounded-lg" value="AST">
              <ASTDisplay onLoad={onASTLoad} onSuccess={onASTSuccess} value={processedAST()} />
            </TabPanel>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}
