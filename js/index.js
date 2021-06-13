//Crear un objeto
let current_year = 2021;

let car = {
    type: "Fiat",
    model: "Freemont",
    year: 2021,
    color: "gray",
    drivingyears: function(){
        return currentyear - this.year;
    }
};
console.log(car);
console.log("Resultado del método driving_years: " + car.drivingyears);


/********************************* */
//Agregar una nueva propiedad
car.fuel = 'Diesel';
console.log(car);
//Llamar una propiedad
console.log("Propiedad fuel: " + car.fuel);


/************************************ */
//Agregar un nuevo método
car.sale_title = function(){
    return `${this.type} ${this.model} - ${this.year}`;
};
//string interpolation
let color= "red";
console.log("El color es: " + color);
console.log(`El color es: ${color}`);

console.log(car);


/******************************************** */
//Llamar a un método
console.log("Resultado del método sale_titlee: " + car.sale_title());



/********************************************* */
//Para crear múltiples objetos similares
//función constructora
//               1        2       3       4        5
function User(username, name, lastname, email, password){
    //uso de this
    this.username = username;
    this.name = name;
    this.email = email;
    this.lastname = lastname;
    this.password = password;
    this.is_admin = false;
}

//operador new
let usuario1 = new User ("averdu", "yadhira", "yadi@hotmail.com","perez","12345");
console.log(usuario1);



/******************************** */
//clases
class Clothes{
    //funcion constructora
    constructor(productName, type, size, color, price, quantity){
        this.productName = productName;
        this.type = type;
        this.size = size;
        this.color = color;
        this.price = price;
        this.quantity = quantity;
    }
    getSaleInfo(){
        return `${this.productName.toUpperCase()} - ${this.type} ${this.color} 
        ${this.size} \nPrecio: $${this.price}`;
    }
}
let clothes1 = new Clothes('remera ivy park', 'Remera', 'L', 'Blanca', 1299, 23);
console.log(clothes1);
console.log(clothes1.getSaleInfo());


//get
clothes1.getPrice = function(){
    return this.price;
}
clothes1.getPrice();


//Set
clothes1.setPrice = function(price){
    this.price = price;
}
clothes1.setPrice(7000);
clothes1.getPrice(); //se obtiene el valor cambiado 

/************************** */

class Persona {
    constructor (nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    //metodo
    fullname(){
        return `${this.nombre} ${this.apellido}`;
    }
    //metodo
    esMayor(){
        return this.edad > 17;
    }
}
 //objeto
let angel = new Persona("Angel", "Verdu", 36);

//angel.esMayor()
//angel.fullname()

let persona2 = new Persona("Franco", "Zampieri", 17);

//persona2.esMayor();



