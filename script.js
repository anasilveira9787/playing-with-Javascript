import { functionTime } from './time.js';
import Sound from './sounds.js';
import {
    startKeyHandler,
    setKeyHandler,
    setShiftKeyHandler,
} from './keyhandlers.js';

const clickCircle = document.querySelector('#circle');
const ballsTime = document.querySelector('#balls');
const textMinutes = document.querySelector('.textMinutes');
const sound = Sound();

clickCircle.addEventListener('click', function() {
    changeToTime();
    changeColor();
    playSong();
});

textMinutes.addEventListener('click', function() {
    changeToTime();
    pauseSong();
});

function changeToTime() {
    ballsTime.classList.toggle('ballsActive');
    clickCircle.classList.toggle('dblclick');
    functionTime();
}

function changeColor() {
    clickCircle.classList.toggle('clicked');
    body.classList.toggle('body-change');
}

function playSong() {
    sound.pressButtonPlay();
    sound.bgAudioPlay();
}

function pauseSong() {
    sound.pressButtonPause();
    sound.bgAudioPause();
}

setShiftKeyHandler('KeyT', changeToTime);
setKeyHandler('Space', changeColor);

startKeyHandler();
