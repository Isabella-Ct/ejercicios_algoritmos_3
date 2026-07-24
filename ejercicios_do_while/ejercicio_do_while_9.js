/**
 * Formato de lista: Genera una secuencia de números del 1 al 20 que se impriman en una sola línea, concatenados con un guion ("-") entre ellos
 */

{let i = 1;           
let resultado = ""; 

do {
    if (i===1){
        resultado+= i;
    }else {
    resultado += "-" + i;
    }
    i++;
} while (i <= 20);

console.log(resultado);
}