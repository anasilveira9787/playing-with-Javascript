import { functionTime } from './time.js';
import startKeyHandler, {
    setKeyHandler,
    setShiftKeyHandler,
} from './keyhandlers.js';

const clickCircle = document.querySelector('#circle');
const ballsTime = document.querySelector('#balls');
const textMinutes = document.querySelector('.textMinutes');

textMinutes.addEventListener('click', changeToTime);
clickCircle.addEventListener('dblclick', changeToTime);
clickCircle.addEventListener('click', changeColor);

function changeToTime() {
    ballsTime.classList.toggle('ballsActive');
    clickCircle.classList.toggle('dblclick');
    functionTime();
}

function changeColor() {
    clickCircle.classList.toggle('clicked');
    body.classList.toggle('body-change');
}

setKeyHandler('Space', changeColor);
setShiftKeyHandler('KeyT', changeToTime);
setKeyHandler('Enter', changeToTime);

startKeyHandler();
