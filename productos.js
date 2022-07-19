class ProductosNew {
    constructor(id, nombre, precio, cantidad) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

let productos = [];

let samsung = productos.push(new ProductosNew(1, "S22 Ultra", 260000, 1));
let iphone = productos.push(new ProductosNew(2, "Iphone 13 Pro max", 295000, 1));
let Xiaomi = productos.push(new ProductosNew(3, "Xiaomi Mi 12", 210000, 1));

console.log(productos);