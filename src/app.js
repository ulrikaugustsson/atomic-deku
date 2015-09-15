/* eslint-disable no-unused-vars*/
import element from 'virtual-element';
/* eslint-enable no-unused-vars*/

import {render, tree} from 'deku';

import Button from './atoms/button';

const app = tree(<Button>btn</Button>);

render(app, document.querySelector('main'));
