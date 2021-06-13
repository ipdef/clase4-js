class Perro{
    constructor(nombre, estadoAdopcion, edad, color){
        this.nombre = nombre;
        this.estadoAdopcion = estadoAdopcion;
        this.edad = edad;
        this.color = color;
    }

    modificarEstadoDeAdopcion (nuevoEstado){
        this.estadoAdopcion = nuevoEstado;
    }

    informarEstadoDeAdopcion(){
        return this.estadoAdopcion;
    }
}

let informarEstado = prompt("Ingrese el estado de adopcion del perro");
let informarEdad = prompt("Ingrese la edad del perro");
let informarColor = prompt("Ingrese el color del perro");

//let perro1 = new Perro("pepe", "adoptado", 5, "negro");
//perro1;

//perro1.informarEstadoDeAdopcion();
//perro1.modificarEstadoDeAdopcion("para adoptar");
//perro1.informarEstadoDeAdopcion();
