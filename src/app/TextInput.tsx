import { JSX } from 'solid-js/jsx-runtime';
import classNames from '../utils/classnames';

export default function TextInput(props: JSX.IntrinsicElements['input']): JSX.Element {
  return (
    <input
      class={classNames(
        'flex-1 w-full rounded p-1 outline-none ring-2',
        'ring-gray-300 dark:ring-gray-700 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 dark:bg-black',
        'disabled:bg-gray-300',
      )}
      type="text"
      {...props}
    />
  );
}
