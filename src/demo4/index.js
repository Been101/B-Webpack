import { cube } from './math.js';
import './css/index.css'
// import { join } from 'lodash'
import join from 'lodash/join'

function component() {
  var element = document.createElement('pre');
  element.innerHTML = join([
    'Hello webpack!',
    '5 cubed is equal ' + cube(5)
  ], '***')

  return element;
}

document.body.appendChild(component());