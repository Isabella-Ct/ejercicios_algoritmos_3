/**
 * Comparación While vs Do...While: Escribe un ciclo while con una condición que sea falsa desde el inicio (por ejemplo, contador < 0) para observar que no se ejecuta ninguna vez, a diferencia de un do...while
 */

// While

let contador1 = 5;

while (contador1 < 0){
    console.log(contador1);
    contador1++

}


// Do... while

let contador2 = 5;
do {
    console.log(contador2);
    contador2++
}
while (contador2 < 0)