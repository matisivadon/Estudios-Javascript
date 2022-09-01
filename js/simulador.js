debugger


let precioProducto = 1500
let cantidad = parseInt(prompt("¿Qué cantidad del producto seleccionado desea comprar?"))
const multiplicacion = (precioProducto, cantidad) => precioProducto * cantidad
alert("El monto a pagar es de $" + multiplicacion (precioProducto, cantidad))
let masUnidades = true

while (masUnidades) {
        masUnidades = confirm("¿Desea comprar más unidades?")
        if (masUnidades === true) {
        let cantidadExtra = parseInt(prompt("¿Cuantas unidades más desea comprar?"))    
        cantidad = cantidad + cantidadExtra   
        alert("El monto a pagar es de $" + multiplicacion (precioProducto, cantidad))        
    } else { 
        alert("Gracias por su compra, el total a pagar es de $" + multiplicacion (precioProducto, cantidad))
    }
}    
