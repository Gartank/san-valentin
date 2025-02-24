import * as btnLib from "/components/buttons/btn-lib.js";
import * as theme from "/components/theme/theme.js";
import * as ipodScreen from "/components/screen/ipod-ui.js";

const ipodButtons = document.querySelectorAll(".btn , .switch");
const ipodSwitch = document.querySelector(".ipod-switch");
const ipodScreenElem = document.querySelector(".ipod-screen");
const ipod = document.querySelector('.ipod');
const mainElem = document.querySelector('.main');
const buttonsContainer = document.querySelector('.outer_circle-btns');

ipodButtons.forEach(function(elem){
    elem.addEventListener('click', () => {
        
        const btnClass = elem.className; 
        if( btnClass.includes("btn-play") || btnClass.includes("btn-pause")){
            btnLib.changePlayBtn(elem)
            // las demas funcionalidades que aun no he hecho
        }
        else if (btnClass.includes("btn-menu")) {
            
        }
        else if (btnClass.includes("btn-prev")) {
            
        }
        else if (btnClass.includes("btn-next")) {
            
        }
        else if (btnClass.includes("btn-select")) {
            
        }
    })
});

const themedElements = [
    ipod, mainElem, buttonsContainer
    , ipodSwitch
    , ...ipodButtons
]

console.log(themedElements);

ipodSwitch.addEventListener( 'click', () => {

    let switchClass = ipodSwitch.className
    if( switchClass.includes("ipod-switch--darkmode") ){
        switchClass = "ipod-switch";
        theme.turnLight(themedElements);
    }
    else{
        switchClass += " ipod-switch--darkmode";
        theme.turnDark(themedElements);
    }
    ipodSwitch.setAttribute('class', switchClass);
});
