//Funcion para el boton invertir parrafos
function invertirParrafos(){
    let listadoParrafo = [...document.getElementsByTagName("p").reverse()]

    for(let parrafo of listadoParrafo){
        document.body.appendChild(parrafo);
    }
}