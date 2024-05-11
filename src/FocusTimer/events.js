import { controls } from "./elements.js";
import * as actions from "./actions.js"
import { card } from "./elements.js";

export function registerControls(){
    controls.addEventListener('click', (e) => {
        const action = e.target.dataset.action;

        if(typeof actions[action] != 'function'){
            return
        } 
    
        actions[action]();
    })
}

export function registerCards(){
    card.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        
        if(typeof actions[action] != 'function'){
            return
        }

        actions[action]();
    })
}
