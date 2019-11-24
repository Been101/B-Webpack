import { cube } from './math.js';
import './css/index.css'
import Data from '../assets/data.xml'

function component() {
  var element = document.createElement('pre');
  element.innerHTML = ([
    'Hello webpack!',
    '5 cubed is equal ' + cube(5)
  ]).join('***')

  return element;
}
console.log(Data)

document.body.appendChild(component());