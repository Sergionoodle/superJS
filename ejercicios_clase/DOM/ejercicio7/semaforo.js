function cambiarColor(){

    //Sacamos todos lo que este apagado
    let coloresApagados = document.querySelectorAll(".apagat");

    //Pillamos el primero que este encendido 
    let coloresEncendidos = document.querySelectorAll(".ences")[0]

    //Le cambiamos el nombre de la clase a apagat
    coloresEncendidos.className = "apagat"

    //Si los encendidos tienen el id de verde y rojo
    if(coloresEncendidos.id == "verd" || coloresEncendidos.id == "vermell"){
        //El que no este encendido le cambiamos a ences
        coloresApagados[0].className = "ences"
    }else{
        coloresApagados[1].className = "ences"
    }
}