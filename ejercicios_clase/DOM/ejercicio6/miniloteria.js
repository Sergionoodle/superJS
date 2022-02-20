//Generamos los decimos en los divs
function generarDecimo(divId){
    let listadoDiv = document.getElementById(divId).children;
    let nodoP;

    for(let i = 0; i < 3; i++){

        //Generamos el texto y lo metemos dentro de la etiqueta
        nodoP = document.createElement("p");

        //El texto es un numero random
        nodoText = document.createTextNode(Math.floor(Math.random()*2+1))
        nodoP.appendChild(nodoText)

        //Si el hijo de los divs (o sea el p ) no tiene nada 
        if(listadoDiv[i].children.length == 0){

            //Se añade
            listadoDiv[i].appendChild(nodoP)
        }else{
            //Si no es asi lo cambia
            listadoDiv[i].replaceChild(nodoP, listadoDiv[i].children[0])
        }
    }

    //Activamos el boton
    document.getElementById("realizarSorteo").disabled = false;

}

//Funcion que crea el ganador del sorteo y los coteja
function realizarSorteo(){

    let nodoDiv = document.getElementById("numeroSorteo");
    let nodoP = document.createElement("p");
    let numSorteo = Math.floor(Math.random()*2 + 1);

    let nodoTexto = document.createTextNode(numSorteo);
    nodoP.appendChild(nodoTexto)

    if(nodoDiv.children.length == 0){
        nodoDiv.appendChild(nodoP)
    }else{
        nodoDiv.replaceChild(nodoP, nodoDiv.children[0])
    }

    let listadoDiv = document.getElementById("divContenedor").children

    //Recorremos tres veces
    for(let i = 0; i < 3;  i++){

        //Le metemos el color rojo a los divs
        listadoDiv[i].style.color = "red";

        //En el caso de que sea alguno como el del sorteo se pintaria de verde
        if(listadoDiv[i].children[0].innerHTML == numSorteo){
            listadoDiv[i].style.color = "green"
        }
    }
}