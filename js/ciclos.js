debugger

let num = parseFloat(prompt("Ingrese el número para conocer su tabla de multiplicación:"))

for (let i=1; i<=10; i++) {
    let resultado = num * i;
    console.log (num, "x", i, "=", resultado);
}