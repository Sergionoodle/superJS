document.addEventListener("DOMContentLoaded", function(event) { 

let texto;
let parrafo;

texto = prompt("Que texto deseas escribir?");
parrafo = prompt("Donde quieres colocarlo?");

while(texto == null || texto == ""){
    texto = prompt("Que texto deseas escribir?");
}

while(isNaN(parrafo)|| parrafo < 1 || parrafo > 10){
    parrafo = prompt("Donde quieres colocarlo?");
}

//Sacamos el nodo (hijo de la lista)
let nodo1 = document.getElementsByTagName("p");

//Sacamos la lista para asi poder recolocar
let listaDeParrafos = document.getElementsByClassName("li");

//Creamos el nuevo elemento li al que luego le daremos valor
let nuevoElemento = document.createElement("li");

//Le damos un texto al nuevo elemento li
nuevoElemento.textContent = texto;

//Creamos el elemento que insertaremos y le damos el valor del penultimo
let siguienteElementoLista = listaDeParrafos[parrafo - 1];

//Ahora el nodo p lo insertamos despues
nodo1[0].insertBefore(nuevoElemento, siguienteElementoLista);


});