import { 
  minutesDisplay,
  buttonPlay,
  buttonPause,
  buttonReset,
  buttonPlus,
  buttonMinus,
  buttonRain,
  buttonForest,
  buttonCoffeeShop,
  buttonFireplace
} from "./elements.js"

import {
  startTimer,
  pauseTimer,
  resetTimer
} from "./controls.js"

import{
  addFiveMinutes,
  reduceFiveMinutes
} from './timer.js'

import sound from "./sound.js";

// event listener para funcionalidades

//botões 

export default function events() {

  buttonPlay.addEventListener('click', function(){
    startTimer()
    
  })

  buttonPause.addEventListener('click', function(){
    pauseTimer()  

  })

  buttonReset.addEventListener('click', function () {    
    resetTimer()  
  })

  buttonPlus.addEventListener('click', function(){
    addFiveMinutes(minutesDisplay)
  })

  buttonMinus.addEventListener('click', function(){
    reduceFiveMinutes(minutesDisplay)


  })


  // audios 


    // forest
  function toggleAudioForest() {
    if (sound.forest.paused){
      sound.forest.play();
      buttonForest.classList.add('playing')
       
    } else {
      sound.forest.pause();
      buttonForest.classList.remove('playing')
    }
  }
  buttonForest.addEventListener('click', toggleAudioForest)
  
  //rain 

  function toggleAudioRain() {
    if (sound.rain.paused) {
      sound.rain.play();
      buttonRain.classList.add('playing')
    } else {
      sound.rain.pause();
      buttonRain.classList.remove('playing')
    }
    }

    buttonRain.addEventListener('click', toggleAudioRain)

    //coffeshop

    function toggleAudioCoffeeshop() {
    if (sound.coffeeshop.paused) {
      sound.coffeeshop.play();
      buttonCoffeeShop.classList.add('playing')
    } else {
      sound.coffeeshop.pause();
      buttonCoffeeShop.classList.remove('playing')
    }
    }

    buttonCoffeeShop.addEventListener('click', toggleAudioCoffeeshop)

    //fireplace 

    function toggleAudioFireplace() {
    if (sound.fireplace.paused) {
      sound.fireplace.play();
      buttonFireplace.classList.add('playing')
    } else {
      sound.fireplace.pause();
      buttonFireplace.classList.remove('playing')
    }
    }

    buttonFireplace.addEventListener('click', toggleAudioFireplace)
    

}

