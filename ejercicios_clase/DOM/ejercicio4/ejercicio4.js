//Habilitamos los selectores
function habilitarSelect(id){
    let selector = document.getElementById(id)

    if(selector.disabled){
        selector.disabled = false;
    }else{
        selector.disabled = true;
    }
}

//Mapeo del tipo de elemento con lafuncion que se necesita utilizar para devolver el valor
const mapaFunciones = {
    'text':'text',
    'textarea':'text',
    'checkbox':'check',
    'radio':'check',
    'select-multiple':'select',
    'select-one':'select-one',
    'select-multiple':'select-multiple'
};

//Funcion que devuelve los valores en funcion el tipo de formulario
const funcionesRetorno = {
    'text' : function(textbox){
        return textbox.value
    },

    'check':function(checkbox){
        let valor = "";
        if(checkbox.checked){
            valor = checkbox.value;
        }
        return valor;
    },

    'select-one': function(select){
        let valor = "";

        //Si no esta desactivado
        if(!select.disabled){
            //Saca la posicion seleccionada
            let indiceSeleccionado = select.selectIndex;

            //Saca la opcion
            let seleccion = select.options[indiceSeleccionado];
            valor = seleccion.value
        }
        return valor;
    },

    'select-multiple':function(select){
        let valor = [];
        if(!select.disabled){

            //Recorremos las opciones
            for(let indice of select.options){
                if(indice.selected){
                    valor.push(indice.value);
                }
            }
        }
        return valor;
    }

}

function retornarValor(elementoFormulario){

    //Devolvemos la funcion anterior, con su mapa y vamos sacando el tipo de lo que nos pase la funcion
    return funcionesRetorno[mapaFunciones[elementoFormulario.type]](elementoFormulario); 

}

//Click al boton se valida, se recorre y devuelve un string
function validarFormulario(form){

    let nodo = document.getElementById(form);

    let lista = nodo.nextElementSibling;

    let salida = "";

    for(let element of lista){
        if(element.type != "button"){
            salida = salida + " " + retornarValor(element)
        }
    }

    let nodoSal = document.createElement("p")
    let nodoTexto = document.createTextNode("resultado = "+salida)

    nodoSal.appendChild(nodoTexto)
    document.body.appendChild(nodoSal)
}