// ============================================================ //
// => DESAFIO ENTREGABLE 01
// ============================================================ //
let cantidad = " ";
let cant = 0;
let producto = " ";
let precio = 0;
let bigCar = 1860;
let helmet = 1860;
let smallCar = 790;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = false;


function realizarCompra() {

    alert(`
        Bienvenidos a Todo TC

        Tienda oficial de maquetas Clase Slot
    `);

    do {
        elegirProducto();
    } while (seguirComprando);  

};

function elegirProducto() {

    producto = prompt(`
        ¿Que producto desea compar?

        * Auto ($1860 + i.v.a.)
        * Casco ($1860 + i.v.a.)
        * Autito ($790 + i.v.a.)

        Por favor ingrese el nombre del producto y presione "Aceptar".
        En caso contrario presione "Cancelar" para abandonar la compra.
    `);

    if (producto === null) {
        return;
    }

    switch (producto.toUpperCase()) {
        case "AUTO":
            precio = precioIva(bigCar);
            elegirCantidad();          
            break;
        case "CASCO":
            precio = precioIva(helmet);
            elegirCantidad();          
            break;
        case "AUTITO":
            precio = precioIva(smallCar);
            elegirCantidad();          
            break;
        default:
            alert(`
                * Alguno de los datos ingresados no es correcto.
                
                Por favor, vuelva a intentarlo.
            `);
            producto = "";
            elegirProducto()
            break;
    };

};

function precioIva(valorProducto) {

    let mostrarResultado = valorProducto * 1.21;
    return mostrarResultado;

};


function elegirCantidad() {

    cantidad = prompt(`
        ¿Cuantos unidades desea comprar?

        * maximo 6 unidades por operacion.

        Por favor ingrese la cantidad y presione "Aceptar".
        En caso contrario presione "Cancelar" para abandonar la compra.
    `);

    if (cantidad === null) {
        return;
    }

    switch (Number(cantidad)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            cant = (Number(cantidad));
            precioTotal += precio * cant;
            cantidadTotal += cant;
            seguirComprando = confirm("quiere seguir comprando?")    
            break;
        default:
            alert(`
                * Algun dato es incorrecto o ha ingresado mas unidades de lo permitido.

                Por favor, vuelva a intentarlo.
            `);
            cantidad = " ";
            elegirCantidad();
            break;
    };

};


realizarCompra ();

if (cantidad >= 1) {

    finalizar();

} else {
    anular();    
}

function finalizar() {

    alert("Ha comprado:" + "\n\n" +cantidadTotal+ " unidad(es)" + "\n\n" +"el precio final de la compra es: $" + precioTotal.toFixed(2) + " *" + "\n\n" + "* i.v.a. incluido");
    
    let finalizarCompra = confirm ("¿Quiere finalizar la compra?");
        
    if (finalizarCompra) {
        alert(`
            Su compra ha sido procesado con exito!
    
            Gracias por su visita! Esperamos volver a verlo/a pronto!
    
            * Le invitamos a echarle un vistazo a nuestro futuro sitio web. 
        `);
    } else {
        anular()    
    };

}

function anular() {

    alert (`
    Gracias por su visita! Esperamos volver a verlo/a pronto!

    * Le invitamos a echarle un vistazo a nuestro futuro sitio web. 
    `);

};