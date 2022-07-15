class ProductosNew {
    constructor(id, nombre, precio, imagen) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }
}

let productos = [];

let samsung = productos.push(new ProductosNew(1, "S22 Ultra", 260000,));
let iphone = productos.push(new ProductosNew(2, "Iphone 13 Pro max", 295000));
let Xiaomi = productos.push(new ProductosNew(3, "Xiaomi Mi 12", 210000));

