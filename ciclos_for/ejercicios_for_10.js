//Búsqueda de índice: Dado un arreglo de elementos, utiliza un ciclo para encontrar en qué posición (índice) se encuentra un valor específico y detén la búsqueda una vez hallado.

let elementos = ["sandia", "melon", "pera", "manzana", "banano", "piña"];

for(let i = 0; i<elementos.length; i++){
    console.log("Posicion " +i+ " es: "+elementos[i]);
    if(elementos[i]==="banano"){
        console.log("banano encontrado");
        break;
    }

}