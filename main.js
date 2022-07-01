// let producto = "";
// let precio = 0;
// let cantidad =0;
// let total = 0;
// let volver = false;
     
     
// alert("Bienvenidos a Dungeon Celulares");
     
// do {

//     const compra = (a, b) => { return a * b};

     
//     let producto = Number(prompt(`
// Elija y escriba el numero segun sea su eleccion de algunas de las siguientes opciones:

// 1 - S22 ultra $260000
// 2 - Iphone 13 Pro Max $295000
// 3 - Xiaomi Mi 12 $210000

// Luego presione "Aceptar" para continuar`));

//     let cantidad = Number(prompt(`Ingresa la cantidad de celulares a comprar`));
     
//     switch(producto){
//         case 1:
//             precio = 260000;
//             break;
//         case 2:
//             precio = 295000;
//             break;
//         case 3:
//             precio = 210000;
//             break;
//         default:
//             alert("No ha elegido una opción correcta");
//             precio = 0;
//             cantidad = 0;
//             break;
//     };
     
//     total = compra(precio, cantidad);

//     alert("El total es: " + "$" + total + "-");

//     volver = confirm("Queres realizar otra compra?");

// } while (volver);

// alert("Gracias por su compra");

let cantidad = "";
let cant = 0;
let producto= "";
let precio = 0;
let precioTotal = 1;
let cantidadTotal = 0;
let seguirComprando = false;

const objetos = [
    { id: 1, nombre: "S22 ultra", precio: 214876},
    { id: 2, nombre: "Iphone 13 Pro Max", precio: 243801},
    { id: 3, nombre: "Xiaomi Mi 12", precio: 173553}
];

function compra() {

    alert (`
    Bienvenidos a Dungeon Celulares
    `);

    do {
        elegirProducto();
    } while (seguirComprando);
};

function elegirProducto() {
    producto = Number(prompt(`
    Elija y escriba el numero segun sea su eleccion de algunas de las siguientes opciones:

    1 - S22 ultra $260000
    2 - Iphone 13 Pro Max $295000
    3 - Xiaomi Mi 12 $210000

    Luego presione "Aceptar" para continuar`));

    if (producto === null) {
        return;
    }

    switch(producto){
        case 1:
            precio = 260000;
            break;
        case 2:
            precio = 295000;
            break;
        case 3:
            precio = 210000;
            break;
        default:
            alert("No ha elegido una opción correcta");
            producto = "";
            elegirProducto()
            break;
    };
};

// function cantidad () {
//     cant = prompt(`
//      Cuantas unidades desea comprar?

//      Nota: Maximo 2 unidades por compra.
//     `) 
// };


// for (const objeto of objetos) {
//     let producto = prompt(`producto ${objeto.precio}`) 
//     // console.log(objeto.nombre)
// };

class ProductosNew {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }

    sumaIva() {
        this.precio = this.precio * 1.21
    }   
}
// const  = []
// let nombre = prompt(`Para finalizar la compra ingrese su nombre`)
// compra1.push(new Usuario(nombre, precioTotal))
// console.log(compra1);
const nuevo = []
let samsung = nuevo.push(new ProductosNew(1, "S22 ultra", 214876))

// let id = Number(prompt("Ingrese ID del producto"));
// let nombreProducto = prompt("Ingrese nombre del producto");
// let precioNew = prompt("Ingrese precio del producto");
// objetos.push(new ProductosNew(id, nombreProducto, precioNew));
console.log(nuevo);

for (const producto of nuevo) {
    producto.sumaIva()
    console.log(producto.sumaIva());
};

