import { cube } from './math.js';

function component() {
  var element = document.createElement('pre');
  element.innerHTML = ([
    'Hello webpack!',
    '5 cubed is equal ' + cube(5)
  ]).join('***')

  return element;
}

document.body.appendChild(component());