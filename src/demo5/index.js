import { cube } from './math.js';
import './css/index.css'

function component() {
  var element = document.createElement('pre');
  element.innerHTML = join([
    'Hello webpack!',
    '5 cubed is equal ' + cube(5)
  ], '********')

  return element;
}

document.body.appendChild(component());