import {functionTime} from './time.js'

const clickCircle = document.querySelector('#circle')
const ballsTime = document.querySelector('#balls')
const textMinutes = document.querySelector('.textMinutes');

textMinutes.addEventListener('click', changeToTime)
clickCircle.addEventListener('dblclick', changeToTime)
clickCircle.addEventListener('click', changeColor)

function changeToTime(){
    ballsTime.classList.toggle('ballsActive')
    clickCircle.classList.toggle('dblclick')
    functionTime()
}


function changeColor(){

    circle.classList.toggle('clicked')
    body.classList.toggle('body-change')
        
}

