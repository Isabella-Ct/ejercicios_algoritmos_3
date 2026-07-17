//Acumulación de valores: Crea un programa que sume todos los números enteros del 1 al 5 y muestre el resultado total al finalizar el ciclo.

let numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0;i < numeros.length; i++) {
    suma = numeros[i]+suma;
}
console.log ("Resultado de la suma: " + suma);