function ocultarMostra(parrafo, enlace){
    let parrafoOcultMost = document.getElementById(parrafo);
    let enlaceOcultMost = document.getElementById(enlace);

    //Si el parrafo tiene el nombre de la clase ocult
    if(parrafoOcultMost.className == "ocult"){

        //Hacemos que cambie a visible
        parrafoOcultMost.className = "visible";

        //Y que el enlace se cambie a mostrar
        enlaceOcultMost.textContent = "Ocultar";

        //Si es al reves
    }else{
        parrafoOcultMost.className = "ocult";
        enlaceOcultMost.textContent = "Mostrar";

    }

}