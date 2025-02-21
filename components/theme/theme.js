
export function turnDark( background, ipod, buttonContainer, ...buttons ){
    const darkClass = '--darkmode';
    
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];   
        element.className = `${element.className} ${element.className+darkClass}`;
    }
}

export function turnLight( background, ipod, buttonContainer, ...buttons){
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        const elemClassList = element.className.split(" ");
        elemClassList.pop();

        element.className  = elemClassList.join(" ");
    }
}

