
export function turnDark( elemArray ){
    const darkClass = '--darkmode';
    
    for ( let elem of elemArray ) {
        const elemClassList = elem.className.split(" ");
        const lastClassName = ( elemClassList.length > 1 ) ? elemClassList[1] : elemClassList[0];

        console.log(elemClassList);

        elem.className += ` ${lastClassName+darkClass}`;
        console.log(elem);
    }
}

export function turnLight( elemArray ){
    for (let elem of elemArray) {
        const elemClassList = elem.className.split(" ");
        elemClassList.pop();
        
        elem.className  = elemClassList.join(" ");
        console.log(elem);
    }
}

