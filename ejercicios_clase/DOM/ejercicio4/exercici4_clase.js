//Funcion para habilitar el select
function habilitarSelect(selectId){
    let elemento = document.getElementById(selectId);

    //Si el elemento tiene disabled nos lo pasa a false y deja de estarlo
    if(elemento.disabled){
        elemento.disabled = false;

    //Si no lo habilita
    }else{
        elemento.disabled = true;
    }
}

//Constante de objetos
const elementosFunciones = {
    'text':'text',
    'textarea':'text',
    'checkbox':'check',
    'radio':'check',
    'select-one':'select-one',
    'select-multiple':'select-multiple'
};

const funcionRetorno = {
    'text' : function(elementoFormulario) {
        return elementoFormulario.value;
    },

    'check' : function(elementoFormulario){
        let valor = "";
        //Si tiene el check devuelve el valor
        if(elementoFormulario.checked){
            valor = elementoFormulario.value;
        }
        return valor;
    },

    'select-one' : function(elementoFormulario){
        let valor = "";
        let indiceSeleccionado = elementoFormulario.selectedIndex;
        valor = elementoFormulario.options[indiceSeleccionado].value;
        return valor;
    },

    'select-multiple' : function(elementoFormulario){
        let array = new Array();

        for(let opcion of elementoFormulario.options){
            if(opcion.selected){
                array.push(opcion.value);
            }
        }
        return array;
    }
};

function retornarValor(elementoFormulario){
    let tipo = elementoFormulario.type;

    return funcionRetorno[elementosFunciones[tipo]](elementoFormulario)

    funcionRetorno.elementosFunciones.tipo();

     /*
     forma sin la constante con las funciones

     si tipo es ifual a texto o textoarea
    if (tipo == 'text' || tipo == 'textarea') {

        se devolvia el valor
        valor = elementoFormulario.value;

        si era un checkbox o radio
    } else if (tipo == 'checkbox' || tipo == 'radio'){

        miraba si estaba checkes
        if (elementoFormulario.checked){
            devolvia el valor
            valor = elementoFormulario.value;
        }

        si era seleccion uno hacia lo mismo
    } else if (tipo == 'select-one') {
        let indiceSeleccionado = elementoFormulario.selectedIndex;
        valor = elementoFormulario.options[indiceSeleccionado].value

        con multiple igual
    } else ifs (tipo == 'select-multiple') {
        let arraySelecciones = new Array();
        for (let opcion of elementoFormulario.options){
            if (opcion.selected) {
                arraySelecciones.push(opcion.value);
            }
            valor = arraySelecciones;
        }
    }
    return valor;
*/
}

function validarFormulario(formularioId){
    let formulario = document.getElementById(formularioId)
    let muestra = "Resultado de la validacion: ";
    for(let elemento of formulario){
        if(elemento.type != "button"){
            muestra += retornarValor(elemento)
        }
    }

    let salidaPantalla = document.createElement("p");
    let texto = document.createTextNode(muestra);

    salidaPantalla.appendChild(texto);
    formulario.appendChild(salidaPantalla);
}