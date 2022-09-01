class Producto {
    constructor(nombre, precio, talle) {
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.talle = talle
    }
}

const productos = [];

function listarInventario () {
productos.push(new Producto ("Buzo de lanilla con capucha", 1000, "1"));
productos.push(new Producto("Remera Le Utthe", 500, "S"));
productos.push(new Producto("Sweater coral", 800, "Único"));
productos.push(new Producto("Camisa de encaje", 1200, "1"));
productos.push(new Producto("Top con volados", 400, "1"));
productos.push(new Producto("Remera de fibrana estampada", 500, "Único"));
productos.push(new Producto("Parka", 8000, "44"));
productos.push(new Producto("Polera", 800, "Único"));
productos.push(new Producto("Sweater corto", 1800, "Único"));
productos.push(new Producto("Conjunto de plush bordo", 5500, "Único"));
productos.push(new Producto("Conjunto de plush gris", 5500, "Único"));
console.table(productos)
}

function procesoCompra () {
debugger
let confirmacion = confirm("¿Desea comprar un producto?")
    if (confirmacion === true) {
        listarInventario()
        let indice = parseInt(prompt("Ingrese el número de índice del producto que usted desea"))
        productos.splice(indice,1)
        console.table(productos)
    } else {
        alert("Gracias por su visita, esperamos vuelva pronto!")
    }
}