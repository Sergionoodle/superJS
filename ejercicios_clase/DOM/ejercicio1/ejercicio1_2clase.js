document.addEventListener("DOMContentLoaded", function(event) {

//Obtenemos informacion del documento
let parrafosDocumento;
let numeroParrafo;

parrafosDocumento = document.getElementsByTagName("p");
numeroParrafo = parrafosDocumento.length;

//Obtenemos los enlaces
let enlacesDocumento;
let numeroTotalEnlaces;

enlacesDocumento = document.getElementsByTagName("a");
numeroTotalEnlaces = enlacesDocumento.length;


//Obtenemos la direccion del penultimo enlace
let direccionPenultimoEnlace;
direccionPenultimoEnlace = enlacesDocumento[numeroTotalEnlaces - 2].href;

//Obtenemos el penultimo enlace del documento
let ultimoEnlaceDocumento;
ultimoEnlaceDocumento = enlacesDocumento[numeroTotalEnlaces -1].href;

//Obtenemos el enlace que sea igual a http://prueba
let contadorEnlaces = 0;
for(let enlace of enlacesDocumento){
    if(enlace.href == "http://prueba/"){
        contadorEnlaces++;
    }
}

//Obtenemos el numero de enlaces por parrafo
let mapaEnlacesPorParrafo = new Map();
let contadorParrafo = 0;

for(let parrafo of parrafosDocumento){
    contadorParrafo++;
    mapaEnlacesPorParrafo.set(contadorParrafo, parrafo.getElementsByTagName("a").length);
}
});