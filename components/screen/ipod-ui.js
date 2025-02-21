const menuDir = ["/menu-albums.html", "/menu-artists.html", "/menu-main.html", "/menu-playlists.html", "/menu-songs.html"];
export const menuMap = new Map();

for(let index in menuDir){
    let dir = window.location.origin + "/components/screen" + menuDir[index];
    
    try{
        const response = fetch(dir); // TODO? why this request doesn't work when the direction URL is practically correct?
        if(!response.ok){
            throw new Error("Error en la solicitud") 
        }
        const menuHTML = response.text().querySelector(".menu");
        const menuName = menuHTML.classList[1];
        menuMap.set(menuName, menuHTML);
    }
    catch( error){
        console.error("Error: ", error);
    }
}

export function showMenu( menuName ) {
    
}