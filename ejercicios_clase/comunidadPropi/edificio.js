//Creamos una funcion constructor de objetos 
function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal){
    this.tipoVia = tipoVia;
    this.nombreVia = nombreVia;
    this.numeroEdificio = numeroEdificio;
    this.codigoPostal = codigoPostal;

    //Creamos un mapa
    this.mapaPropietariosEdificio = new Map();

    //Funcion flecha para modificar el tipo de via
    this.modificarTipoVia = (nuevoTipoVia) => this.tipoVia = nuevoTipoVia;

    //Funcion para modificar el numero de edificio
    this.modificarNumeroEdificio = (nuevoNumeroEdificio) => this.numeroEdificio = nuevoNumeroEdificio;

    //Funcion para modificar el codifo postal
    this.modificarCodigoPostal = (nuevoCodigoPostal) => this.codigoPostal = nuevoCodigoPostal;

    this.modificarNombreVia = (nuevoNombreVia) => this.nombreVia = nuevoNombreVia;
    //Funcion para imprimir el tipo de via
    this.imprimirTipoVia = () => "Tipo Via:" + this.tipoVia;

    //Funcion para imprimier el nombre de la via
    this.imprimirNombreVia = () => "Nombre de la via :" + this.nombreVia;

    //Funcion para imprimir el numero del edificio
    this.imprimirNumeroEdificio = () => "Num edificio: "+this.numeroEdificio;

    //Funcion para imprimir el codigo postal
    this.imprimirCodigoPostal = () => "CP: " + this.codigoPostal;

    //Funcion para agregar una planta donde le pasamos el numero
    this.agregarPlanta = (numeroPlanta) => {

        //Si el mapa de propietarios NO (has) tiene un numeroPlanta
        if(!this.mapaPropietariosEdificio.has(numeroPlanta)){

            //Mete en el mapa el numero de la planta y nos crea un mapa clave -> valor
            this.mapaPropietariosEdificio.set(numeroPlanta, new Map())
        }
    }

    //Creamos una funcion para agregar la puerta a la planta
    this.agregarPuerta = (numeroPlanta, numeroPuerta) => {
        //Si el mapa tiene un numero planta
        if(this.mapaPropietariosEdificio.has(numeroPlanta)){
            //Si el mapa NO tiene un numero puerta
            if(!this.mapaPropietariosEdificio.get(numeroPlanta).has(numeroPuerta)){
                //Nos añade un nuevo numero puerta
                this.mapaPropietariosEdificio.set(numeroPlanta, this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta,[]));   
            }
        }
    }

    //Creamos una funcion que nos cree un propietario
    this.agregarPropietario = function(nombrePropietario, numeroPlanta, numeroPuerta){
        //Si el mapa tiene numero planta
        if(this.mapaPropietariosEdificio.has(numeroPlanta)){
            //Si teine un numero planta y un numero puerta
            if(this.mapaPropietariosEdificio.get(numeroPlanta).has(numeroPuerta)){
                //Pero si no tiene un nombre propietario
                if(!this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).includes(nombrePropietario)){
                    //Le metemos dentro de la array de la puerta (valor) el nombre del propietario (push para arrays)
                    this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
                }
            }
        }
    }

    //Hacemos una funcion que nos muestre todo 
    this.imprimirTodosPropietarios = function() {
        let salida = "LISTADO DE PROPIETARIOS: \n";
        
        //Recorremos el mapa (clave , valor)
        for(let [identificadorPlanta, elementosPlanta] of this.mapaPropietariosEdificio){

            salida = salida.concat("Planta:"+identificadorPlanta+"\n")

            //Recorremos los elementos de planta (ya que dentro tiene una array)
            for(let [identificadorPuertas, elementoPuerta] of elementosPlanta){
                salida = salida.concat("\tPuerta: "+identificadorPuertas+"\n")
                for(let propietario in elementoPuerta){
                    salida = salida.concat("\t\t"+elementoPuerta[propietario]+"\n")
                }
            }
            return salida;
        }
    }
}

//Pruebas
const edificio1 = new Edificio('calle', 'marques rubio', 70, '07005');
console.log(edificio1)
edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');
console.log(edificio1);
edificio1.agregarPuerta('1A','3');
edificio1.agregarPuerta('1A','2');
edificio1.agregarPuerta('1B','1')
console.log(edificio1);
edificio1.agregarPropietario('Belén Laserna Belenguer','1A','3');
edificio1.agregarPropietario('Pedro Jimenez Vázquez','1A','3');
edificio1.agregarPropietario('Ana María Rodriguez Figuerola', '1A','2');
edificio1.agregarPropietario('Miguel López López','1B','1');
console.log(edificio1);
console.log(edificio1.imprimirTodosPropietarios());
edificio1.modificarTipoVia('avenida');
edificio1.modificarNombreVia('Marques de la Fontsanta');
edificio1.modificarNumeroEdificio('60A');
edificio1.modificarCodigoPostal('007005');
console.log(edificio1.imprimirTipoVia());
console.log(edificio1.imprimirNombreVia());
console.log(edificio1.imprimirNumeroEdificio());
console.log(edificio1.imprimirCodigoPostal());