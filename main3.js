const contenedorProductos = document.getElementById('contenedorProductos')

const contenedorCarrito = document.getElementById('carritoContenedor')

const botonVaciar = document.getElementById('vaciarCarrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')

const precioTotal = document.getElementById('precioTotal')

const cantidadTotal = document.getElementById('cantidadTotal')

const carrito = []

// No me funciona el localstorage, voy a tener que revisarlo bien!
// document.addEventListener('DOMContentLoaded', () => {
//     if (localStorage.getItem('carrito')){
//         carrito = JSON.parse(localStorage.getItem(`carrito`))
//         actualizarCarrito()
//     }
// })

document.addEventListener("DOMContentLoaded", () => {
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    if (carrito != null) {
        contenedorCarrito.innerHTML = "";
        carrito.forEach((prod) => {
            const div = document.createElement('div')
            div.className = ('productoEnCarrito')
            div.innerHTML = `
            <p>${prod.nombre}</p>
            <p>Precio:$${prod.precio}</p>
            <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
            <button onclick="eliminarDelCarrito(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></i></button>
            `
            contenedorCarrito.appendChild(div)
    
            // localStorage.setItem('carrito', JSON.stringify(carrito))
        });
    }
});

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


productos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML =`
    <h3>${producto.nombre}</h3>
    <h2 class="precioProducto">$${producto.precio}</h2>
    <button id="agregar${producto.id}" class="botonAgregar">Agregar<i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})


const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId)
    if (existe) {
        const prod = carrito.map (prod => {
            if ( prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else { 

        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito()

}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

// Debo agregar comentarios de lo que realiza cada funcion para que se entienda lo que quiero que realice el codigo
// Solucionar el tema de la inserccion de las imagenes en el array para que se muestren en el html
// Solucionar el problema del local storage que al menos ahora funciona a medias, pero funciona XD

