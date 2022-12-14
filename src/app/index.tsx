import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  Transition,
} from 'solid-headless';
import { createEffect, createSignal } from 'solid-js';
import compile from '../compiler';
import ParserError from '../parser/ParserError';
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

const EXAMPLE = `[href="a"] = flex flex-col md:flex-row;
.b = flex flex-col md:flex-row;
`;

export default function App() {
  const [input, setInput] = createSignal(EXAMPLE);
  const [pendingInput, setPendingInput] = createSignal(input());
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
  const debouncedSetGroupSelector = debounce(setPendingGroupSelector);
  const debouncedSetPeerSelector = debounce(setPendingPeerSelector);
  const debouncedSetDarkSelector = debounce(setPendingDarkSelector);

  const [error, setError] = createSignal<Error>();
  const [hasError, setHasError] = createSignal(false);

  let ref: HTMLTextAreaElement | undefined;

  createEffect(() => {
    try {
      const result = compile(pendingInput(), {
        darkMode: darkFlag() ? pendingDarkSelector() : undefined,
        groupSelector: pendingGroupSelector(),
        peerSelector: pendingPeerSelector(),
      });
      setHasError(false);
      setProcessedCSS(result.css);
      setProcessedAST(JSON.stringify(
        result.ast,
        undefined,
        2,
      ));
    } catch (err) {
      setError(() => err);
      setHasError(true);

      if (ref && err instanceof ParserError) {
        ref.focus();
        ref.setSelectionRange(err.start, err.end, 'forward');
      }
    }
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
              ref={ref}
              class={classNames(
                'w-full rounded p-2 outline-none font-mono font-semibold',
                ' ring-2 ring-gray-300 dark:ring-gray-700 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 dark:bg-black',
                hasError() && 'selection:bg-red-500',
              )}
              spellcheck={false}
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
      <TabGroup class="preview flex shadow-lg shadow-gray-900 rounded-xl overflow-auto" defaultValue="CSS" horizontal>
        <TabPanel class="flex-1 relative" value="CSS">
          <CSSDisplay onLoad={onCSSLoad} onSuccess={onCSSSuccess} value={processedCSS()} />
          <Overlay loading={cssLoading() || pendingInput() !== input()} />
        </TabPanel>
        <TabPanel class="flex-1 relative" value="AST">
          <ASTDisplay onLoad={onASTLoad} onSuccess={onASTSuccess} value={processedAST()} />
          <Overlay loading={astLoading() || pendingInput() !== input()} />
        </TabPanel>
        <div class="absolute md:fixed right-8 flex flex-none flex-row justify-between items-center">
          <TabList class="flex flex-row space-x-2 bg-white rounded-b-lg p-2">
            <Tab as={Button} size="small" value="CSS">CSS</Tab>
            <Tab as={Button} size="small" value="AST">AST</Tab>
          </TabList>
        </div>
        <Transition
          show={hasError()}
          class="absolute md:fixed bottom-4"
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-50 translate-y-full"
          enterTo="opacity-100 scale-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100 translate-y-0"
          leaveTo="opacity-0 scale-50  translate-y-full"
          afterLeave={() => {
            setError(undefined);
          }}
        >
          <div class="bg-red-500 text-red-50 font-bold rounded-xl shadow-lg p-4">
            {error()?.message}
          </div>
        </Transition>
      </TabGroup>
    </div>
  );
}
