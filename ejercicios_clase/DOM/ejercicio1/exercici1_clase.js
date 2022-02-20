document.addEventListener("DOMContentLoaded", function(event) {


//Numero de enlaces de la pagina
let numeroEnlaces = document.getElementsByTagName("a")
console.log(numeroEnlaces.length)

//Obtenemos el numero de parrafos de la pagina
let parrafosPagina = document.getElementsByTagName("p")
console.log(parrafosPagina.length)

//Obtenemos direccion del ultimo enlace de la pagina
let enlaceUltimoPag = numeroEnlaces[numeroEnlaces.length -2 ].href
//Le pasamos el total de enlaces (es una array) y [aqui le restamos al total que tenga 2 para situarnos en el penultimo]
//Y con el punto href sacamos el href
console.log(enlaceUltimoPag)

let ultimoEnlacePag = numeroEnlaces[numeroEnlaces.length -1].href
console.log(ultimoEnlacePag)

//Obtenemos el numero de enlaces con http://prueba
let enlacesPrueba = 0;

for(let enlace of numeroEnlaces){
    if(enlace.href == "http://prueba/"){
        enlacesPrueba++;
    }
}

console.log(enlacesPrueba)
 /*
    for (let cont in listaEnlacesPagina) {
        if (listaEnlacesPagina[cont] == 'http://prueba/'){
            numeroEnlacesPruebaEnPagina++;
        }
    }
    */

    // Obtenemos el número de enlaces de cada párrafo
    /*
    let numeroEnlacesParrafo = new Array();
    for (let parrafo of listaParrafosPagina) {
        numeroEnlacesParrafo.push(parrafo.getElementsByTagName('a').length);
    }
    console.log(numeroEnlacesParrafo);
    */


let numeroEnlaceParrafo = new Map();
contador = 1;
for(let parrafo of numeroEnlaces){
    numeroEnlaceParrafo.set(contador,parrafo.getElementsByTagName("a").length);
    contador++;
}
console.log(numeroEnlaceParrafo)

//Sacamos el divinfo
let divInfo = document.getElementById('info');
console.log(divInfo)

//Creamos un texto 
let texto = "HOLA";


//Se lo introducimos al div
divInfo.innerHTML = texto;

});
