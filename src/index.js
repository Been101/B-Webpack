import { cube } from './math.js';
import { join } from 'lodash';
import { push } from 'underscore';

// function component() {
//   var element = document.createElement('pre');
//   const a = push('asfsa')
//   element.innerHTML = join([
//     'Hello webpack!',
//     '5 cubed is equal to ' + cube(5)
//   ])

//   return element;
// }

// document.body.appendChild(component());
document.write('hello world h')
if (module.hot) {
  module.hot.accept();
}