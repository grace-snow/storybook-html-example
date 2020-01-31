import '../styles/css/master.css';
import { withActions } from '@storybook/addon-actions';

export default {
  title: 'Component',
  decorators: [withActions('mouseover', 'click .button')],
};

export const Heading = () => '<h1>Hello World</h1>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};
