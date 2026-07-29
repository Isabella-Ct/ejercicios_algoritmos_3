/*
Uso de Continue: Crea un programa que cuente del 1 al 5, pero que "salte" la impresión del número 3 y continúe con los demás números de la secuencia
*/

let i = 1;

while (i<=5) {
    if (i==3){
        i++;
        continue;
    }
    console.log(i);
    i++;
}