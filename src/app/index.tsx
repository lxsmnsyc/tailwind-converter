import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
} from 'solid-headless';
import { createEffect, createSignal } from 'solid-js';
import compile from '../compiler';
import classNames from '../utils/classnames';
import ASTDisplay from './ASTDisplay';
import Button from './Button';
import Checkbox from './Checkbox';
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

interface OverlayProps {
  loading: boolean;
}

function Overlay(props: OverlayProps) {
  return (
    <div
      class={classNames(
        'w-full h-full absolute top-0',
        'transition duration-200 bg-gray-50',
        'pointer-events-none',
        props.loading ? 'opacity-50' : 'opacity-0',
      )}
    />
  );
}

export default function App() {
  const [input, setInput] = createSignal('flex flex-col md:flex-row');
  const [pendingInput, setPendingInput] = createSignal(input());
  const [base, setBase] = createSignal('.my-class');
  const [pendingBase, setPendingBase] = createSignal(base());
  const [groupSelector, setGroupSelector] = createSignal('.group');
  const [pendingGroupSelector, setPendingGroupSelector] = createSignal(groupSelector());
  const [peerSelector, setPeerSelector] = createSignal('.peer');
  const [pendingPeerSelector, setPendingPeerSelector] = createSignal(peerSelector());
  const [darkSelector, setDarkSelector] = createSignal('.dark');
  const [pendingDarkSelector, setPendingDarkSelector] = createSignal(darkSelector());

  const [darkFlag, setDarkFlag] = createSignal(false);

  const [processedCSS, setProcessedCSS] = createSignal('');
  const [processedAST, setProcessedAST] = createSignal('');
  const [cssLoading, setCSSLoading] = createSignal(false);
  const [astLoading, setASTLoading] = createSignal(false);

  const debouncedSetInput = debounce(setPendingInput, 1000);
  const debouncedSetBase = debounce(setPendingBase);
  const debouncedSetGroupSelector = debounce(setPendingGroupSelector);
  const debouncedSetPeerSelector = debounce(setPendingPeerSelector);
  const debouncedSetDarkSelector = debounce(setPendingDarkSelector);

  createEffect(() => {
    const result = compile(pendingBase(), pendingInput(), {
      darkMode: darkFlag() ? pendingDarkSelector() : undefined,
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
    <div class="p-8 flex flex-col gap-4 md:gap-0 md:flex-row">
      <div class="w-full md:w-1/2">
        <div class="flex flex-col space-y-2">
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
            <div class="flex flex-col space-y-2">
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
            <div class="flex flex-col space-y-2">
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
            <div class="flex flex-col space-y-2">
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
            <div class="flex flex-col space-y-2">
              <span class="font-semibold flex-none">Dark Mode</span>
              <div class="flex flex-row space-x-2">
                <Checkbox
                  onChange={setDarkFlag}
                />
                <TextInput
                  onInput={(e) => {
                    const { value } = e.target as HTMLInputElement;
                    debouncedSetDarkSelector(value);
                    setDarkSelector(value);
                  }}
                  value={darkSelector()}
                  disabled={!darkFlag()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="preview">
        <TabGroup class="flex w-full h-full flex-col relative" defaultValue="CSS" horizontal>
          <TabPanel class="flex-1 w-full shadow-lg shadow-gray-900 h-full overflow-hidden rounded-xl relative" value="CSS">
            <CSSDisplay onLoad={onCSSLoad} onSuccess={onCSSSuccess} value={processedCSS()} />
            <Overlay loading={cssLoading() || pendingInput() !== input()} />
          </TabPanel>
          <TabPanel class="flex-1 w-full shadow-lg shadow-gray-900 h-full overflow-hidden rounded-xl relative" value="AST">
            <ASTDisplay onLoad={onASTLoad} onSuccess={onASTSuccess} value={processedAST()} />
            <Overlay loading={astLoading() || pendingInput() !== input()} />
          </TabPanel>
          <div class="absolute right-8 flex flex-none flex-row justify-between items-center">
            <TabList class="flex flex-row space-x-2 bg-white rounded-b-lg p-2">
              <Tab as={Button} size="small" value="CSS">CSS</Tab>
              <Tab as={Button} size="small" value="AST">AST</Tab>
            </TabList>
          </div>
        </TabGroup>
      </div>
    </div>
  );
}
