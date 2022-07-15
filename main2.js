let producto = "";
let precio = 0;
let cantidad =0;
let total = 0;
let volver = false;
     

class ProductosNew {
    constructor(id, nombre, precio, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
}

const productos = [];
const carrito = [];

let samsung = productos.push(new ProductosNew(1, "S22 Ultra", 260000,));
let iphone = productos.push(new ProductosNew(2, "Iphone 13 Pro max", 295000));
let Xiaomi = productos.push(new ProductosNew(3, "Xiaomi Mi 12", 210000));

console.log(productos);

const contenedorProductos = document.getElementById('contenedorProductos')

productos.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML =`
    <h3>${producto.nombre}</h3>
    <h2>${producto.precio}</h2>
    <button id="agregar${producto.id}" class="buttonAdd">Agregar</button>
    `
    contenedorProductos.appendChild(div)
})

// let precioSam = 0;
// let precioIph = 0;
// let precioXia = 0;

// for (const producto of productos) {
//     precioSam = producto.precio
//     console.log(precioSam);
// };

// for (const producto of productos) {
//     precioIph = producto.precio
//     console.log(precioIph);
// };

// for (const producto of productos) {
//     precioXia = producto.precio
//     console.log(precioXia);
// };

// // for (let i = 0; i < productos.length; i++) {
// //     precioSam = (${productos[0].precio})
// // }

alert("Bienvenidos a Dungeon Celulares");
     
do {

    const compra = (a, b) => { return a * b};
    
     
    let producto = Number(prompt(`
Elija y escriba el numero segun sea su eleccion de algunas de las siguientes opciones:

1 - S22 ultra $260000
2 - Iphone 13 Pro Max $295000
3 - Xiaomi Mi 12 $210000

Luego presione "Aceptar" para continuar`));

    let cantidad = Number(prompt(`Ingresa la cantidad de celulares a comprar`));
     
    switch(producto){
        case 1:
            precio = precioSam;
            break;
        case 2:
            precio = precioIph;
            break;
        case 3:
            precio = precioXia;
            break;
        default:
            alert("No ha elegido una opción correcta");
            precio = 0;
            cantidad = 0;
            break;
    };
     
    total = compra(precio, cantidad);

    alert("El total es: " + "$" + total + "-");

    volver = confirm("Queres realizar otra compra?");

} while (volver);

alert("Gracias por su compra");