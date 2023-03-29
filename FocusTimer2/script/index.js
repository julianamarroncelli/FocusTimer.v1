
//import default 
import sound from'./sound.js'
import Events from './events.js'



//named export:

import {
  countdown,
  addFiveMinutes,
  reduceFiveMinutes
} from './timer.js'

import {
  startTimer,
  pauseTimer,
  resetTimer
} from './controls.js'

import {
  buttonPlay,
  buttonPause,
  buttonReset,
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
} from './elements.js'




const elements =({
  buttonPlay,
  buttonPause,
  buttonReset,
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
})


let timerTimeOut 

Events({
  controls: { startTimer, pauseTimer, resetTimer },
  sound,
  timer: { countdown, addFiveMinutes, reduceFiveMinutes },
  elements
});



