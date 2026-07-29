/**
 * Lista con Espacios: Genera una secuencia de números del 1 al 10 que aparezcan en una sola línea, concatenando cada número con un espacio en blanco
 */

let i = 1;
let resultado = " ";

while (i<=10) {
    resultado += i + " ";
    i++;
}
console.log (resultado);