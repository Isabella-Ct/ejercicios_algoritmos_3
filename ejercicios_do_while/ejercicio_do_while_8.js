/**
 * Salida con break: Crea un bucle que cuente del 1 al 50, pero que se detenga y salga completamente del ciclo cuando el contador llegue a 25 usando break
 */

let i = 1;

do{
    console.log(i);
    if (i===25){
        break;
    }
    i++
}while(i<=50);