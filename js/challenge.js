class Avion{
    constructor(modelo, asientos){
        this.modelo = modelo;
        this.asientos = asientos;
    }

    saludo(){
        console.log(`Bienvenidos al modelo ${this.modelo} que cuenta con capacidad para ${this.asientos} pasajeros`);
    }
}

let Boing737 = new Avion("Boeing 737", "156");
let airbusa320 = new Avion("Airbus A320", "321");

console.log(Boing737);
Boing737.saludo();
console.log(airbusa320);
airbusa320.saludo();

class Avion{
    constructor(peso, longitud, alto){
        this.peso = peso;
        this.longitud = longitud;
        this.alto = alto;
    }

    obtenerAltura(){
        return "La altura del Avión es: " + this.alto;
    }
}

const miAvion = new Avion(10000, 50, 7);

miAvion.obtenerAltura();


