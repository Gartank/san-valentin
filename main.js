import * as btnLib from "/components/buttons/btn-lib.js";
import * as theme from "/components/theme/theme.js";
import * as ipodScreen from "/components/screen/ipod-ui.js";

const ipodButtons = document.querySelectorAll(".btn , .switch");
const ipodSwitch = document.querySelector(".ipod-switch");
const ipodScreenElem = document.querySelector(".ipodScreen");
const ipod = document.querySelector('.ipod');
const buttonsContainer = document.querySelector('.outer_circle-btns');

console.log(ipodScreen.menuMap)

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

ipodSwitch.addEventListener( 'click', () => {

    let switchClass = ipodSwitch.className
    if( switchClass.includes("ipod-switch--darkmode") ){
        switchClass = "ipod-switch";
        theme.turnLight(mainElem, ipod, buttonsContainer, ipodButtons);
    }
    else{
        switchClass += " ipod-switch--darkmode";
        theme.turnDark(mainElem, ipod, buttonsContainer, ipodButtons);
    }
    ipodSwitch.setAttribute('class', switchClass);

});