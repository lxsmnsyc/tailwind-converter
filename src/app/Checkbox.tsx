import {
  Checkbox as HeadlessCheckbox,
  CheckboxIndicator,
  CheckboxLabel,
} from 'solid-headless';
import { createSignal, Switch, Match } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

function CheckIcon(props: JSX.IntrinsicElements['svg']): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function CloseIcon(props: JSX.IntrinsicElements['svg']): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function UndefinedIcon(props: JSX.IntrinsicElements['svg']): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20 12H4"
      />
    </svg>
  );
}

interface CheckboxProps {
  onChange: (flag: boolean) => void;
}

export default function Checkbox(props: CheckboxProps): JSX.Element {
  const [checked, setChecked] = createSignal<boolean | undefined>(false);

  return (
    <HeadlessCheckbox
      checked={checked()}
      onChange={(value) => {
        setChecked(value);
        props.onChange(!!value);
      }}
      as="div"
      class="flex flex-row justify-between items-center space-x-1"
    >
      <CheckboxIndicator
        class="flex-none w-6 h-6 p-1 text-white bg-gray-900 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <Switch>
          <Match when={checked() === undefined}>
            <span class="sr-only">Mixed</span>
            <UndefinedIcon />
          </Match>
          <Match when={checked() === true}>
            <span class="sr-only">Checked</span>
            <CheckIcon />
          </Match>
          <Match when={checked() === false}>
            <span class="sr-only">Unchecked</span>
            <CloseIcon />
          </Match>
        </Switch>
      </CheckboxIndicator>
      <div class="flex-1 flex flex-col text-gray-900">
        <CheckboxLabel class="font-semibold">
          Use class mode?
        </CheckboxLabel>
      </div>
    </HeadlessCheckbox>
  );
}
