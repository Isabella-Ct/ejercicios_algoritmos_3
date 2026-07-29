/*
Suma Acumulada: Escribe un ciclo que sume los números del 1 al 5 (1+2+3+4+5) y muestre el resultado total al final de la ejecución
*/


let numeros = [1, 2, 3, 4, 5];
let suma = 0;
let i = 0;

while(i<numeros.length) {
    suma = (numeros[i] + suma)
    i++;
}
console.log ("El resultado total de la suma es: "+ suma);