document.addEventListener("DOMContentLoaded", function(event) {

    let textoParrafo;
    let posicionParrafoNuevo;

    //Creamos unos patrones que nos serviran de filtro
    let patronParrafo = /^.+$/;
    let patronPosicion = /^([1-9]|10)$/;

    //Hacemos que se comprueben
    do{
        textoParrafo = prompt("Escribe el parrafo que quieres");
    }while(!patronParrafo.test(textoParrafo))

    do{
        posicionParrafoNuevo = prompt("En que posicion lo quieres?");
    }while(!patronPosicion.test(posicionParrafoNuevo))


    //Sacamos la lista, que contiene parrafos
    let listaParrafos = document.getElementsByTagName("li");

    //Creamos el nodo del parrafo 
    let nodoNuevoParrafo = document.createElement("li");

    //Le agregamos unos atributos a dicho nodo
    nodoNuevoParrafo.setAttribute("style", "font-weight:bold;");

    //Creamos una etiqueta que nos hará el texto en negrita
    let nodoNegrita = document.createElement("b");
  /* 1a opción negrita 
    nodoNegrita.appendChild(nodoTexto);
    nodoNuevoParrafo.appendChild(nodoNegrita);
    */
   
    //Creamos un texto, que sera lo que introducimos via prompt
    let nodoTexto = document.createTextNode(textoParrafo);

    //Le añadimos el texto al nuevo parrafo que hemos creado
    nodoNuevoParrafo.appendChild(nodoTexto);

    //Hacemos que entre en el ol 
    let nodo1 = document.getElementsByTagName("ol")[0];

    //Sacamos donde desplazaremos el nodo 
    let nodoAdesplazar = listaParrafos[posicionParrafoNuevo - 1];

    nodo1.insertBefore(nodoNuevoParrafo, nodoAdesplazar)
});