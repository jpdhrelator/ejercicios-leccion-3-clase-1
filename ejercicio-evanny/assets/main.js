
/* Fase 1: Inventario inicial - Gestion de un inventario de objetos mágicos */

console.log('\n--- Inventario Mágico Inicial ---');
// Se inicializa un array llamado 'bolsilloMagico' que contiene varios objetos de fantasía.
let bolsilloMagico = ['Espada excalibur', 'Escudo de Aegis', 'Poción de curación', 'Anillo de invisibilidad'];

// Se imprime el contenido del inventario en la consola.
console.log(bolsilloMagico);

// Se realiza una consulta rapida para verificar el tercer elemento del inventario.
console.log('El tercer objeto en el inventario es:', bolsilloMagico[2]);

//Reporte inicial, se muestra la cantidad de objetos en el inventario.
console.log('\n--- Reporte Inicial del Inventario ---');
cantidadObjetos = bolsilloMagico.length;
console.log('Cantidad de objetos en el inventario:', cantidadObjetos);

/* Fase 2: Gestión de movimientos en el inventario */
console.log('\n--- Gestión de Movimientos en el Inventario ---');

// Se agrega un nuevo objeto al inventario muy importante.
bolsilloMagico.push('Botas de levitación');
console.log('El nuevo objeto agregado es: ', bolsilloMagico[bolsilloMagico.length - 1]);

// Se elimina un objeto (perdida inesperada) del inventario.
let objetoPerdido = bolsilloMagico.pop();
console.log('El objeto perdido fue: ', objetoPerdido);

// Se consume el primer objeto del inventario (uso de un objeto).
let objetoConsumido = bolsilloMagico.shift();
console.log('El objeto consumido fue: ', objetoConsumido);

// Se revisa el inventario después de los movimientos.
console.log('\nInventario actualizado después de los movimientos:', bolsilloMagico);


/* Fase 3: Operaciones de presicion */
console.log('\n--- Operaciones de Precisión en el Inventario ---');

// El segundo objeto (Escudo de Aegis) se ha roto y se reemplaza por otro escudo.
let objetoReemplazado = bolsilloMagico[1] = 'Escudo de Dragón';
console.log('El objeto reemplazado fue: ', objetoReemplazado);

// Se agrega un objeto comodin a la mitad del inventario. (Tengo 3 asi que el indice 2 lo dejare en la mitad)
let objetoComodin = bolsilloMagico.splice(2, 0, 'Espada Maestra');
console.log('El objeto comodín agregado fue: ', bolsilloMagico[2]);

console.log('\nInventario actualizado después de las operaciones de precisión:', bolsilloMagico);

/* Fase 4: Fusion de colecciones */

console.log('\n--- Fusión de Colecciones de Inventario ---');


// Se encuentra un segundo inventario de objetos mágicos extra con 3 elementos.
console.log('\n--- Inventario Extra Encontrado ---');
let extra = ['Capa de invisibilidad', 'Varita mágica', 'Mapa del merodeador'];
console.log('Inventario extra encontrado: ', extra);

console.log('\n--- Con poderes especiales se fusiona el Inventario Mágico Final ---');

// Se fusionan los dos inventarios.  Se utiliza un Set para evitar duplicados en caso de que existan en vez de concat para practicar otro metodo.
let inventarioTotal = [...new Set([...bolsilloMagico, ...extra])];
console.log('Inventario final fusionado:', inventarioTotal);

/* Fase 5: Reporte Final del Inventario */

console.log('\n--- Reporte Final del Inventario ---');
console.log('Despues de la travesia el Inventario final magico:', inventarioTotal);
console.log('Con la cantidad total de objetos:', inventarioTotal.length);