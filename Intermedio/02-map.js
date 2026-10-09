/*
map(): transforma los elementos de un array y devuelve un nuevo array.

Lógica:
1. Recibe una función que se ejecuta por cada elemento.
2. El valor que devuelve esa función se guarda en el nuevo array.
3. El nuevo array conserva la longitud del original.

map() no modifica por sí mismo el array original.
*/

const numeros = [2, 4, 6];

const dobles = numeros.map((numero) => {
  return numero * 2;
});

console.log(dobles); // [4, 8, 12]
console.log(numeros); // [2, 4, 6]

// numero: elemento actual.
// =>: define una función flecha.
// return: indica qué valor guardar en el nuevo array.
// Forma corta, con devolución implícita: numeros.map(numero => numero * 2).

/*
Hash map (tabla hash): estructura que guarda pares de clave y valor.
Usa una función hash para localizar dónde guardar o buscar cada clave.
Permite búsquedas rápidas: en promedio, O(1) (tiempo constante).

En JavaScript, Map permite guardar pares de clave y valor.
El lenguaje no exige que internamente sea una tabla hash.
Map y el método de arrays map() son cosas diferentes.
*/

const edades = new Map();

edades.set("Ana", 20); // Guarda la clave "Ana" con el valor 20.
edades.set("Luis", 25);
edades.set("Ana", 21); // Una clave es única: actualiza su valor.

console.log(edades.get("Ana")); // 21: obtiene el valor por su clave.
console.log(edades.has("Luis")); // true: comprueba si existe la clave.
console.log(edades.size); // 2: cantidad de pares guardados.

edades.delete("Luis"); // Elimina el par asociado a esa clave.
// get() devuelve undefined si la clave no existe.
