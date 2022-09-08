class Producto {
    constructor(id,nombre, precio, talle) {
        this.id = id
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.talle = talle
    }
}

const productos = [];

function listarInventario () {
productos.push(new Producto ("1","Buzo de lanilla con capucha", 1000, "1"));
productos.push(new Producto("2","Remera Le Utthe", 500, "S"));
productos.push(new Producto("3","Sweater coral", 800, "Único"));
productos.push(new Producto("4","Camisa de encaje", 1200, "1"));
productos.push(new Producto("5","Top con volados", 400, "1"));
productos.push(new Producto("6","Remera de fibrana estampada", 500, "Único"));
productos.push(new Producto("7","Parka", 8000, "44"));
productos.push(new Producto("8","Polera", 800, "Único"));
productos.push(new Producto("9","Sweater corto", 1800, "Único"));
productos.push(new Producto("10","Conjunto de plush bordo", 5500, "Único"));
productos.push(new Producto("11","Conjunto de plush gris", 5500, "Único"));
console.table(productos)
}

function procesoCompra () {
debugger
let confirmacion = confirm("¿Desea comprar un producto?")
    if (confirmacion === true) {
        listarInventario()
        let id = prompt("Ingrese el número de ID del producto que usted desea")
        let productoSeleccionado = productos.filter (producto => producto.id === id)
        console.table(productoSeleccionado)

        let nuevoProducto = true
        while (nuevoProducto) {
            nuevoProducto = confirm("¿Desea agregar un nuevo producto a su carrito?")
            if (nuevoProducto == true) {
                id = prompt("Ingrese el número de ID del producto que usted desea")
                let nuevoProductoSeleccionado = productos.filter (producto => producto.id === id)
                productoSeleccionado = productoSeleccionado.concat(nuevoProductoSeleccionado)
                console.table(productoSeleccionado)
            } else {
                alert("Gracias por su compra!")
            }
        }
    } else {
        alert("Gracias por su visita, esperamos vuelva pronto!")
    }
}