/**
 * Detección de Bucle Infinito: Identifica y corrige un código donde la condición x <= 5 sea siempre verdadera porque falta el incremento de la variable, evitando así que el programa se bloquee
 */

let i = 2;

while (i<=5) {
    console.log (i);
}


//correcion del bucle infinito:

let X = 2;
while (X<=5) {
    console.log (X);
    X++;
}
    