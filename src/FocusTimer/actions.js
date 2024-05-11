import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"
import * as el from "./elements.js"

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();

    sounds.buttonStart.play();

}

export function reset(){
   state.isRunning = false;
   document.documentElement.classList.remove('running');

   timer.updateDisplay();
   sounds.buttonStart.play(); 

}

export function plus(){
    let minutes = Number(el.minutes.textContent);
    minutes += 5;
    timer.updateDisplay(minutes);
}

export function minus(){
    let minutes = Number(el.minutes.textContent);
    minutes -= 5;
    timer.updateDisplay(minutes);
}

export function coffe(){
    sounds.cafeteria.play();
}

export function tree(){
    sounds.forest.play();
}

export function fire(){
    sounds.fireplace.play();
}

export function cloud(){
    sounds.rain.play();
}


export function kichenTimer(){
    sounds.kichenTimer.play();
}