const buttons = document.querySelectorAll(".btn , .switch");
let btnGlobal;
function changePlayBtn(btn){
    const icon = btn.children[0]
    console.log(icon);
    
    if( btn.className.includes("btn-play") ){
        btn.setAttribute('class', 'btn btn-pause');
        icon.innerText = 'pause'
    }
    else{
        btn.setAttribute('class', 'btn btn-play');
        icon.innerText = 'play_arrow'
    }
}

buttons.forEach(function(elem){
    elem.addEventListener('click', function(){
        
        const btnClass = elem.className; 
        if( btnClass.includes("btn-play") || btnClass.includes("btn-pause")){
            changePlayBtn(elem)
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