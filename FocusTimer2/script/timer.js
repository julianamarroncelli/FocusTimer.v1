// cronometro

import {
  pauseTimer,
  resetTimer
} from "./controls.js";

import{
  minutesDisplay,
  secondsDisplay,
  buttonPause
} from './elements.js'

export let timerTimeOut

export function countdown() {
    
  let seconds = parseInt(secondsDisplay.textContent);
  let minutes = parseInt(minutesDisplay.textContent);


  
  timerTimeOut = setTimeout(function() {
    seconds--;
    if (seconds < 0) {
      minutes--;
      if (minutes < 0) {
      pauseTimer()
      resetTimer()
        return;
      }

      seconds = 59;
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
    }

    secondsDisplay.textContent = String(seconds).padStart(2, "0");

    countdown();
  }, 1000);

  buttonPause
}

export function addFiveMinutes() {
  let currentMinutes = minutesDisplay.textContent;
  let newMinutes = parseInt(currentMinutes) + 5;
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
}

export function reduceFiveMinutes() {
  let currentMinutes = minutesDisplay.textContent;
  let newMinutes = parseInt(currentMinutes) - 5;
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
}



