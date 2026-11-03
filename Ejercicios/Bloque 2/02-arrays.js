{/*
Repaso R4 — Operaciones con arrays
Ahora vamos a trabajar cuatro métodos que encontrarás con frecuencia en problemas de programación.

.push() — Agregar al final
let nums = [1, 2, 3];
nums.push(4);
// nums = [1, 2, 3, 4]


Modifica el array original.


.pop() — Eliminar el último elemento
let nums = [1, 2, 3];
let ultimo = nums.pop();
// nums = [1, 2]
// ultimo = 3


Modifica el array original y devuelve el elemento eliminado.


.slice(inicio, fin) — Extraer una copia
let nums = [10, 20, 30, 40];
let parte = nums.slice(1, 3);
// parte = [20, 30]
// nums no cambia


El índice fin no se incluye.


.splice(inicio, cantidad) — Eliminar desde una posición
let nums = [10, 20, 30, 40];
nums.splice(1, 2);
// nums = [10, 40]


Modifica el array original. También permite insertar elementos.    
    
*/}

// ==== Ejercicio ===

{/*
Repaso R4.2 — Ejercicio práctico de manipulación de arrays
Ahora vas a utilizar los cuatro métodos dentro de un pequeño programa.
Enunciado
Tienes el siguiente array:
const nums = [10, 20, 30, 40, 50];    
Instrucciones
Escribe código JavaScript que realice lo siguiente, en este orden:
    1. push(): agrega 60 al final de nums.
    2. pop(): elimina el último elemento y guarda el elemento eliminado en una variable llamada eliminado.
    3. splice(): elimina los elementos 30 y 40 del array original usando una sola llamada.
    4. slice(): extrae una copia de los primeros dos elementos del array resultante y guárdala en copia.
Al final, imprime nums, eliminado y copia.
*/}
const nums = [10, 20, 30, 40, 50];

nums.push(60)
console.log(nums);

nums.splice(2, 3)
console.log(nums)

let eliminado = nums.pop()
console.log(eliminado)

let copia = nums.slice(0,1)
console.log(nums)
console.log(copia)