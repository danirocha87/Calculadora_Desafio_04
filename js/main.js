import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { IMC, notANumber } from './utils.js'


const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = event => {
  event.preventDefault();
  
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
  
  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }
  
  AlertError.close()

  const result = IMC(weight, height);
  const message = `O Seu IMC é de ${result}` 

  Modal.message.innerHTML = message
  Modal.open()
}