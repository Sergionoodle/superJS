document.addEventListener("DOMContentLoaded",function(event){
    let textarea = document.getElementById('areatexto');
    let nodoParrafo = document.createElement('p');
    nodoParrafo.id = 'parrafoCaracteres'
    let nodoTextoParrafo = document.createTextNode(`Pots escriure ${textarea.maxLength - textarea.value.length} caràcters`)

    nodoParrafo.appendChild(nodoTextoParrafo);
    document.getElementById('areaFormulario').appendChild(nodoParrafo);
});

function insertarNumeroCaracteres(parrafId, areatextoId){
    let parrafo = document.getElementById(parrafId);
    let areatexto = document.getElementById(areatextoId);

    //Sacamos el mximo total 
    let textoleng = areatexto.maxLength

    //Sacamos el lenght del valor, es decir el lenght de caracteres
    let textvalue = areatexto.value.length

    //Le introducimos el nuevo parrafo dinamico con la resta 
    parrafo.innerHTML = `Pots escriure ${textoleng - textvalue} caràcters`

}