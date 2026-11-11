/*
ETAPA 1 · ARRAYS
índices · añadir y quitar · copiar · extraer · buscar · métodos funcionales · arrays 2D

IDEA CLAVE
  Un array es una lista ordenada con índices desde 0. Acceder por índice es O(1);
  buscar un valor o insertar/quitar al principio es O(n). Es un OBJETO: al asignarlo
  o pasarlo a una función se comparte la referencia, no se copia.

ÍNDICE
  1. Crear y acceder                 7. Buscar
  2. Añadir y quitar (mutan)         8. Ordenar (sort) y revertir
  3. Referencia vs copia             9. Métodos funcionales
  4. Extraer: slice (no muta)       10. Arrays 2D
  5. splice (muta)                  11. Costes (Big O)
  6. Unir y expandir (concat, ...)  12. Patrones
*/

//! ── 1. Crear y acceder ──
{
    const nums = [10, 20, 30]
    console.log(nums.length)         // Resultado: 3
    console.log(nums[0], nums[2])    // Resultado: 10 30
    console.log(nums[3])             // Resultado: undefined    (no existe, sin error)
    console.log(nums[nums.length - 1], nums.at(-1))   // Resultado: 30 30
    console.log([].length, [][0])    // Resultado: 0 undefined  (arreglo vacío)
    console.log(new Array(3).fill(0))// Resultado: [ 0, 0, 0 ]   (tamaño fijo con valor inicial)
    console.log(Array.from({ length: 3 }, (_, i) => i * 2))   // Resultado: [ 0, 2, 4 ]
}
// Nota: escribir fuera de rango AGRANDA el array y deja huecos:
{
    const a = [1, 2]
    a[5] = 9
    console.log(a.length, JSON.stringify(a))   // Resultado: 6 [1,2,null,null,null,9]
    // Las posiciones 2, 3 y 4 quedaron «vacías»; JSON.stringify las muestra como null.
    // Por eso intercambiar(arr, i, 5) con un índice inválido ensucia el arreglo.
}

//! ── 2. Añadir y quitar (MUTAN el array) ──
//   push(x)    añade al final       → devuelve la nueva longitud      O(1)
//   pop()      quita del final      → devuelve el elemento quitado    O(1)
//   unshift(x) añade al principio   → devuelve la nueva longitud      O(n)
//   shift()    quita del principio  → devuelve el elemento quitado    O(n)
{
    const a = [1, 2, 3]
    a.push(4)                        // [1, 2, 3, 4]
    console.log(a.pop())             // Resultado: 4
    a.unshift(0)                     // [0, 1, 2, 3]
    console.log(a.shift())           // Resultado: 0
    console.log(a)                   // Resultado: [ 1, 2, 3 ]
    console.log([].pop())            // Resultado: undefined   (pop de un vacío no falla)
}
// Nota: unshift y shift desplazan TODOS los elementos. En un bucle son O(n²).

//! ── 3. Referencia vs copia ──
{
    const a = [1, 2, 3]
    const b = a                      // misma referencia, NO es una copia
    b.push(4)
    console.log(a)                   // Resultado: [ 1, 2, 3, 4 ]
    const c = [...a]                 // copia superficial (también a.slice())
    c.push(5)
    console.log(a, c)                // Resultado: [ 1, 2, 3, 4 ] [ 1, 2, 3, 4, 5 ]
}
// «Superficial»: los elementos anidados se siguen compartiendo.
{
    const m = [[1], [2]]
    const copia = [...m]
    copia[0].push(99)
    console.log(m[0])                // Resultado: [ 1, 99 ]   (el array interno es el mismo)
    const profunda = structuredClone(m)   // copia profunda
    profunda[1].push(7)
    console.log(m[1])                // Resultado: [ 2 ]
}
// Funciones: si una función hace arr.push(...) sobre su argumento, lo modifica también
// fuera de ella. Para no mutar la entrada, trabaja sobre una copia (ver 08-funciones.js).

//! ── 4. Extraer: slice (NO muta) ──
//   arr.slice(inicio, fin) → copia desde inicio hasta ANTES de fin. Admite negativos.
{
    const a = [10, 20, 30, 40, 50]
    console.log(a.slice(1, 3))       // Resultado: [ 20, 30 ]
    console.log(a.slice(2))          // Resultado: [ 30, 40, 50 ]
    console.log(a.slice(-2))         // Resultado: [ 40, 50 ]
    console.log(a.slice())           // Resultado: [ 10, 20, 30, 40, 50 ]   (copia completa)
    console.log(a)                   // Resultado: [ 10, 20, 30, 40, 50 ]   (intacto)
}

//! ── 5. splice (SÍ muta) ──
//   arr.splice(inicio, cuántosQuitar, ...nuevos) → devuelve lo quitado
{
    const a = [1, 2, 3, 4, 5]
    console.log(a.splice(1, 2))      // Resultado: [ 2, 3 ]        (quita 2 desde la posición 1)
    console.log(a)                   // Resultado: [ 1, 4, 5 ]
    a.splice(1, 0, 'x', 'y')         // quita 0 e inserta
    console.log(a)                   // Resultado: [ 1, 'x', 'y', 4, 5 ]
}
// Nota: slice COPIA un trozo y deja el original intacto; splice MODIFICA el original.
// Los nombres se parecen y es la confusión clásica: ante la duda, pruébalo con console.log.

//! ── 6. Unir y expandir ──
{
    const a = [1, 2]
    const b = [3, 4]
    console.log(a.concat(b))         // Resultado: [ 1, 2, 3, 4 ]
    console.log([...a, ...b])        // Resultado: [ 1, 2, 3, 4 ]    (spread: «despliega» elementos)
    console.log([0, ...a, 9])        // Resultado: [ 0, 1, 2, 9 ]
    console.log(Math.max(...b))      // Resultado: 4   (spread como argumentos de una función)
}

//! ── 7. Buscar ──
{
    const a = [5, 8, 3, 8]
    console.log(a.includes(8))       // Resultado: true         (¿está?)       O(n)
    console.log(a.indexOf(8))        // Resultado: 1            (posición o -1) O(n)
    console.log(a.lastIndexOf(8))    // Resultado: 3
    console.log(a.indexOf(99))       // Resultado: -1
    console.log(a.find(n => n > 6))      // Resultado: 8            (primer elemento que cumple)
    console.log(a.findIndex(n => n > 6)) // Resultado: 1            (su posición)
    console.log(a.some(n => n < 4))      // Resultado: true         (¿alguno cumple?)
    console.log(a.every(n => n > 2))     // Resultado: true         (¿todos cumplen?)
}
// Regla: valor exacto → includes / indexOf. Condición («mayor que 6») → find / findIndex / some / every.
// En los ejercicios de Repaso01, find/some/every/map/filter/reduce/forEach/sort/reverse
// están PROHIBIDOS: se resuelven con for / for...of (ver 04-bucles.js).
// Nota: [NaN].includes(NaN) es true, pero [NaN].indexOf(NaN) es -1.
// Nota: con objetos se compara por referencia: [[1]].includes([1]) → false.

//! ── 8. Ordenar y revertir ──
// sort() y reverse() MUTAN el array.
{
    console.log([10, 9, 1].sort())               // Resultado: [ 1, 10, 9 ]   ← ¡ordena como TEXTO!
    console.log([10, 9, 1].sort((a, b) => a - b))// Resultado: [ 1, 9, 10 ]   (ascendente)
    console.log([10, 9, 1].sort((a, b) => b - a))// Resultado: [ 10, 9, 1 ]   (descendente)
    console.log([1, 2, 3].reverse())             // Resultado: [ 3, 2, 1 ]
}
// El comparador devuelve negativo (a antes), positivo (b antes) o 0 (igual). Cuesta O(n log n).
// Para no mutar: [...arr].sort(...)  ·  arr.toSorted(...)  ·  arr.toReversed()  (ES2023).

//! ── 9. Métodos funcionales (reciben una función; no mutan; devuelven algo nuevo) ──
{
    const a = [1, 2, 3, 4]
    console.log(a.map(n => n * 2))                  // Resultado: [ 2, 4, 6, 8 ]   (transforma cada elemento)
    console.log(a.filter(n => n % 2 === 0))         // Resultado: [ 2, 4 ]         (se queda con los que cumplen)
    console.log(a.reduce((acc, n) => acc + n, 0))   // Resultado: 10               (acumula en un solo valor)
    a.forEach(n => console.log(n))                  // Resultado: 1 · 2 · 3 · 4   (solo recorre; devuelve undefined)
}
// reduce(función(acumulador, elemento), valorInicial). Pasa SIEMPRE el valor inicial:
// sin él, un array vacío lanza TypeError.
// Nota: forEach/map no se pueden detener con break; si necesitas cortar, usa for...of.
// En entrevista, estos métodos están bien; explica su coste (cada uno recorre todo: O(n)).

//! ── 10. Arrays 2D (matrices) ──
{
    const grid = [
        [1, 2, 3],
        [4, 5, 6],
    ]
    console.log(grid[1][2])                         // Resultado: 6   (fila 1, columna 2)
    console.log(grid.length, grid[0].length)        // Resultado: 2 3 (filas, columnas)
    for (let f = 0; f < grid.length; f++) {
        for (let c = 0; c < grid[f].length; c++) {
            // grid[f][c]
        }
    }
    // Crear una matriz: NO uses new Array(3).fill([]) (las filas serían el MISMO array).
    const vacia = Array.from({ length: 2 }, () => new Array(3).fill(0))
    vacia[0][0] = 1
    console.log(vacia)                              // Resultado: [ [ 1, 0, 0 ], [ 0, 0, 0 ] ]
}

//! ── 11. Costes (Big O) ──
//   arr[i], push, pop ......................... O(1)
//   shift, unshift, splice, includes, indexOf .. O(n)
//   slice, concat, spread, map, filter, reduce . O(n)
//   sort ...................................... O(n log n)

//! ── 12. Patrones ──
//   Recorrer: for (const x of arr) · si necesitas índice: for (let i = 0; ...)  (ver 04-bucles.js)
//   Último elemento: arr[arr.length - 1]
//   Intercambiar: [arr[i], arr[j]] = [arr[j], arr[i]]  (o con variable temporal)
//   Acumular: let suma = 0; for (const x of arr) suma += x   (ver 10-acumuladores-patrones.js)
//   Máximo: inicializa con arr[0] (no con 0: fallaría con todos negativos)
//   No mutar la entrada: trabaja sobre [...arr] o construye un array nuevo
//   ¿Está repetido? Un Set responde en O(1); includes en un bucle sería O(n²) (07-set-map.js)
