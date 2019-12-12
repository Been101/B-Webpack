import { cube } from './math.js';
// import './css/index.css'
// import { join } from 'lodash/join'
// import join from 'lodash-es/join'

function component() {
  var element = document.createElement('pre');

  cube(5)
  return element;
}

document.body.appendChild(component());