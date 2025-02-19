
export function turnDark( background, ipod, buttonContainer, ...buttons ){
    const darkClass = '--darkmode';

    arguments.array.forEach(element => {
        element.setAttribute('class', `${element.className} ${element.className+darkClass}`);
    });
}