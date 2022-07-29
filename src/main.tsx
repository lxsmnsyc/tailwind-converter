import { render } from 'solid-js/web';
import App from './app';
import './main.css';

const root = document.getElementById('app');

if (root) {
  render(() => <App />, root);
}
