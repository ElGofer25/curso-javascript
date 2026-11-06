/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741

ETAPA 1 · ARRAYS
Idea clave: un array es una lista ORDENADA de valores accesibles por índice
(0 .. length - 1). Casi todo problema de LeetCode empieza con un array: dominarlo
significa saber recorrerlo, saber qué métodos lo MODIFICAN y cuáles no.
*/

// ── 1. Crear y acceder ──────────────────────────────────────────────────────

const frutas = ["manzana", "pera", "uva"]
//  índice:       0         1       2        length = 3
console.log(frutas.length)            // 3
console.log(frutas[0])                // "manzana"
console.log(frutas[frutas.length - 1])// "uva" → último: length - 1
console.log(frutas.at(-1))            // "uva" → at() acepta negativos
console.log(frutas[10])               // undefined → fuera de rango, sin error
console.log([].length)                // 0 → el array vacío existe: ¡contempla ese caso!

frutas[1] = "kiwi"                    // se puede reasignar una posición
console.log(frutas)                   // ["manzana", "kiwi", "uva"]

// Nota: const protege la VARIABLE, no el contenido. frutas = [] daría error,
// pero frutas.push("fresa") y frutas[0] = "x" sí funcionan.

// ── 2. Añadir y quitar ──────────────────────────────────────────────────────

const pila = [1, 2, 3]
pila.push(4)                  // añade AL FINAL → [1,2,3,4]   (devuelve la nueva length)
console.log(pila.pop())       // 4  → quita el ÚLTIMO y lo devuelve; pila = [1,2,3]
pila.unshift(0)               // añade AL INICIO → [0,1,2,3]
console.log(pila.shift())     // 0  → quita el PRIMERO y lo devuelve; pila = [1,2,3]

// Nota: push/pop trabajan en el final (rápido). unshift/shift mueven TODOS los
// elementos (lento en arrays grandes). Más en 33-big-o.js.

// ── 3. Mutar o no mutar ─────────────────────────────────────────────────────

// MODIFICAN el array original:  push, pop, shift, unshift, splice, sort, reverse
// NO lo modifican (devuelven algo nuevo):  slice, concat, map, filter, join, includes, indexOf, at

const nums = [3, 1, 2]
const copiaOrdenada = [...nums].sort()   // [...nums] copia antes de ordenar
console.log(nums)                        // [3,1,2] → intacto
console.log(copiaOrdenada)               // [1,2,3]

// Nota: en LeetCode a veces se pide modificar «en el sitio» (in-place) y a
// veces devolver un array nuevo. Lee el enunciado: confundirlos es un error típico.

// ── 4. Copias y referencias ─────────────────────────────────────────────────

const original = [1, 2, 3]
const alias = original          // NO es una copia: ambas variables apuntan al MISMO array
alias.push(4)
console.log(original)           // [1,2,3,4]

const copia = [...original]     // copia superficial (también: original.slice())
copia.push(5)
console.log(original)           // [1,2,3,4] → no cambió
console.log([1, 2] === [1, 2])  // false → === compara REFERENCIAS, no contenido

// ── 5. slice y splice ───────────────────────────────────────────────────────

const letras = ["a", "b", "c", "d", "e"]

console.log(letras.slice(1, 3))   // ["b","c"] → slice(inicio, fin): fin NO se incluye
console.log(letras.slice(-2))     // ["d","e"] → últimos 2
console.log(letras)               // intacto

const l2 = ["a", "b", "c", "d", "e"]
console.log(l2.splice(1, 2))      // ["b","c"] → splice(inicio, cuántos): QUITA y devuelve lo quitado
console.log(l2)                   // ["a","d","e"] → ¡sí modificó!
l2.splice(1, 0, "X", "Y")         // cuántos = 0: no quita, INSERTA en la posición 1
console.log(l2)                   // ["a","X","Y","d","e"]

// ── 6. Buscar y unir ────────────────────────────────────────────────────────

const datos = [5, 8, 12]
console.log(datos.includes(8))    // true
console.log(datos.indexOf(12))    // 2  (-1 si no existe)
console.log(datos.join("-"))      // "5-8-12"
console.log(datos.concat([1, 2])) // [5,8,12,1,2] → nuevo array
console.log([...datos, 1, 2])     // lo mismo con spread

// ── 7. Ordenar: la trampa del sort ──────────────────────────────────────────

console.log([10, 2, 1].sort())               // [1,10,2] ✗ ordena como TEXTO
console.log([10, 2, 1].sort((a, b) => a - b))// [1,2,10] ✓ criterio numérico ascendente
console.log([10, 2, 1].sort((a, b) => b - a))// [10,2,1] descendente

// ── 8. Crear arrays con valores ─────────────────────────────────────────────

console.log(new Array(3))                    // [ <3 empty items> ] ✗ huecos, evítalo
console.log(new Array(3).fill(0))            // [0,0,0]
console.log(Array.from({ length: 4 }, (_, i) => i))  // [0,1,2,3]
console.log(Array.isArray([]))               // true (typeof [] es "object": no sirve)

// Arrays dentro de arrays (matrices): se accede con dos índices
const matriz = [[1, 2], [3, 4]]
console.log(matriz[1][0])                    // 3 → fila 1, columna 0

// ── 9. Patrones que repetirás en LeetCode ───────────────────────────────────

const numeros = [4, 9, 2, 7]

// A) Recorrer con índice y acumular
let suma = 0
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
}
console.log(suma)                            // 22

// B) Construir un array nuevo con los que cumplen una condición
const pares = []
for (const n of numeros) {
    if (n % 2 === 0) pares.push(n)
}
console.log(pares)                           // [4,2]

// C) Intercambiar dos posiciones (base de invertir, ordenar, mover ceros)
function intercambiar(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
const arr = [1, 2, 3]
intercambiar(arr, 0, 2)
console.log(arr)                             // [3,2,1]
// Equivalente moderno: [arr[0], arr[2]] = [arr[2], arr[0]]

// D) Dos índices que se acercan (invertir en el sitio)
const v = [1, 2, 3, 4, 5]
let izq = 0
let der = v.length - 1
while (izq < der) {
    intercambiar(v, izq, der)
    izq++
    der--
}
console.log(v)                               // [5,4,3,2,1]
