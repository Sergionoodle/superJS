//Cuando pulsamos el boton de invertir hara la funcion
function invertirParrafos(){
    let parrafos = document.getElementsByTagName("p")

    //Metemos todo en una array
    let array = [...parrafos];

    //Invertimos la array
    array.reverse();

    //Hacemos que recorra la array y la vaya printando en el body
    for(let parrafo of array){
        document.body.appendChild(parrafo)
    }


    /*MAS FORMAS
    
    array.reverse()

    hacemos un for invertido
    for(let i = array.lenght-1;  i >= 0; i--){
        document.body.appendChild(parrafo)
    }

    ------
    array.reverse()

    for(let i = 0; i < array.lenght; i++){
        document.body.appendChild(array[i])
    }

    -----
    for(let i = 0; i< array.lenght; i++){
        document.body.appendChild(array[array.length - 1 - i])
    }
    
    
    */
}