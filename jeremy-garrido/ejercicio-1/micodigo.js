console.log("/// Inventario Dark Souls///");

let inventario = ["espada","escudo","catalizador","armadura","hechizo bola de fuego","gema de vida"]

console.log(inventario);

//  Imprimir el TERCER elemento
console.log("El tercer elemento es: ", inventario[2]); 

//  Cantidad total de artículos
console.log("Total de articulos en el inventario: ", inventario.length);

//  nueva adqisicion
console.log("/// OBJETO ENCONTRADO ///");

let nuevoObj = inventario.push("Alma de Viejo Matadragones");

console.log("Nuevo objeto adquirido: ", inventario[inventario.length - 1]);

console.log(inventario);
console.log("Total de articulos en el inventario: ", inventario.length);

// borrar ultimo objeto
console.log("/// USAR OBJETO ///");
let borrarUltObj = inventario.pop();
console.log("Has consumido:", borrarUltObj);
console.log(inventario);
console.log("Total de articulos en el inventario: ", inventario.length);

// borrar el primer objeto
console.log("/// OBJETO PERDIDO ///");
let borrarPrimObj = inventario.shift();
console.log("Se ha roto:", borrarPrimObj);
console.log(inventario);
console.log("Total de articulos en el inventario: ", inventario.length);

// reemplazar el 2do item del inventario
console.log("/// AL Luchar contra el demonio codicioso, perdiste objetos ///");

console.log("Has perdido: ", inventario[1]);

inventario[1] = "mano piromantica"

console.log("Has obtenido: ", inventario[1]);

console.log(inventario);

// insercion tactica, agergar elemento en la mitad del inventario

// Calculamos la posicion central

console.log("/// Gestion de inventario ///");

let posicionMitad = Math.floor(inventario.length / 2);

// Usamos splice: (posición, elementos_a_eliminar, nuevo_elemento)
inventario.splice(posicionMitad, 0, "Frasco de Estus +1");

console.log("Objeto insertado en la posición: " + posicionMitad);
// Accedemos directamente a la variable posicionMitad para no fallar el índice
console.log("El nuevo objeto en la mitad es: ", inventario[posicionMitad]);

console.log(inventario);

console.log("/// HAS ENCONTRADO UN TESORO ///");

let objExtra = ["Alma de gran heroe", "Fragmento de titanita", "Piedra de Pharros", "Espadon"]

console.log("Has encontrado un cofre con los siguientes objetos: ", objExtra);


let invTotal = [...inventario, ...objExtra];

console.log("El inventario final cuenta con: ", invTotal.length , "objetos");
console.log("El último objeto es:", invTotal[invTotal.length - 1]);
console.log("Intentario total de objetos: ", invTotal);





















