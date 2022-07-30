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
import TextInput from './TextInput';

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
  const [input, setInput] = createSignal('aspect-square dark:lg:aspect-video');
  const [pendingInput, setPendingInput] = createSignal(input());
  const [base, setBase] = createSignal('.my-class');
  const [pendingBase, setPendingBase] = createSignal(base());
  const [groupSelector, setGroupSelector] = createSignal('.group');
  const [pendingGroupSelector, setPendingGroupSelector] = createSignal(groupSelector());
  const [peerSelector, setPeerSelector] = createSignal('.peer');
  const [pendingPeerSelector, setPendingPeerSelector] = createSignal(peerSelector());

  const [processedCSS, setProcessedCSS] = createSignal('');
  const [processedAST, setProcessedAST] = createSignal('');
  const [cssLoading, setCSSLoading] = createSignal(false);
  const [astLoading, setASTLoading] = createSignal(false);

  const debouncedSetInput = debounce(setPendingInput, 1000);
  const debouncedSetBase = debounce(setPendingBase);
  const debouncedSetGroupSelector = debounce(setPendingGroupSelector);
  const debouncedSetPeerSelector = debounce(setPendingPeerSelector);

  createEffect(() => {
    const result = compile(pendingBase(), pendingInput(), {
      darkMode: '.dark',
      groupSelector: pendingGroupSelector(),
      peerSelector: pendingPeerSelector(),
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
    <div class="p-4 w-screen md:h-screen">
      <div class="gap-4 flex flex-col md:flex-row w-full h-full">
        <div class="flex flex-col space-y-2 flex-1">
          <div class="flex flex-col space-y-2">
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
          <div class="flex flex-col space-y-2">
            <span class="text-xl font-bold">Options</span>
            <div class="flex flex-col space-y-1">
              <span class="font-semibold flex-none">Base Selector</span>
              <TextInput
                onInput={(e) => {
                  const { value } = e.target as HTMLInputElement;
                  debouncedSetBase(value);
                  setBase(value);
                }}
                value={base()}
              />
            </div>
            <div class="flex flex-col space-y-1">
              <span class="font-semibold flex-none">Group Selector</span>
              <TextInput
                onInput={(e) => {
                  const { value } = e.target as HTMLInputElement;
                  debouncedSetGroupSelector(value);
                  setGroupSelector(value);
                }}
                value={groupSelector()}
              />
            </div>
            <div class="flex flex-col space-y-1">
              <span class="font-semibold flex-none">Peer Selector</span>
              <TextInput
                onInput={(e) => {
                  const { value } = e.target as HTMLInputElement;
                  debouncedSetPeerSelector(value);
                  setPeerSelector(value);
                }}
                value={peerSelector()}
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-2 flex-1">
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
