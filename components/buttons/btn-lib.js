export function changePlayBtn(btn){
    const icon = btn.children[0]
    
    if( btn.className.includes("btn-play") ){
        btn.setAttribute('class', 'btn btn-pause');
        icon.innerText = 'pause'
    }
    else{
        btn.setAttribute('class', 'btn btn-play');
        icon.innerText = 'play_arrow'
    }
}