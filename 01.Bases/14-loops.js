/*
Clase 29 - Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=11575

ETAPA 1 · ITERACIONES
Idea clave: un bucle repite un bloque mientras una condición sea verdadera. Casi
todos los errores en bucles son de BORDES: empezar en el índice equivocado o
terminar uno antes o uno después.
*/

// ── 1. Anatomía del for ─────────────────────────────────────────────────────

//        ① inicio    ② condición   ③ paso
for (let i = 0; i < 3; i++) {
    console.log(i)               // ④ cuerpo: 0, 1, 2
}

// Orden de ejecución: ① una sola vez → ② ¿se cumple? → ④ cuerpo → ③ paso → ② ...
// Cuando ② da false, el bucle termina SIN ejecutar el cuerpo.

// Recorrer un array: del índice 0 al último (length - 1)
const nums = [10, 20, 30]
for (let i = 0; i < nums.length; i++) {
    console.log(i, nums[i])      // 0 10 · 1 20 · 2 30
}

// Nota: `i < nums.length` (no <=). Con <= llegas a nums[3], que es undefined.

// ── 2. Variantes del for ────────────────────────────────────────────────────

for (let i = nums.length - 1; i >= 0; i--) {   // al revés
    console.log(nums[i])                       // 30 · 20 · 10
}

for (let i = 0; i < 10; i += 2) {              // de dos en dos
    console.log(i)                             // 0 2 4 6 8
}

// ── 3. while y do...while ───────────────────────────────────────────────────

// while: úsalo cuando NO sabes cuántas vueltas habrá (depende de una condición).
let n = 27
let pasos = 0
while (n > 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1        // el estado CAMBIA dentro del bucle
    pasos++
}
console.log(pasos)                             // 111

// Nota: si la condición nunca llega a ser falsa, el bucle es infinito. Antes de
// ejecutar, comprueba que algo dentro del cuerpo la acerca a false.

// do...while: ejecuta el cuerpo AL MENOS una vez y luego evalúa la condición.
let k = 10
do {
    console.log("se ejecuta una vez aunque k < 5")
} while (k < 5)

// ── 4. for...of y for...in ──────────────────────────────────────────────────

for (const valor of [7, 8, 9]) {
    console.log(valor)           // 7 · 8 · 9   → for...of da los VALORES
}
for (const letra of "hey") {
    console.log(letra)           // h · e · y   → también recorre strings
}
for (const indice in [7, 8, 9]) {
    console.log(indice, typeof indice)   // "0" string... → for...in da CLAVES (como texto)
}

// Regla: en arrays usa for (índice necesario) o for...of (solo valores).
// Evita for...in con arrays: devuelve strings, no números.

// ── 5. break y continue ─────────────────────────────────────────────────────

for (let i = 0; i < 10; i++) {
    if (i === 3) continue        // salta ESTA vuelta y pasa a la siguiente
    if (i === 6) break           // termina el bucle por completo
    console.log(i)               // 0 1 2 4 5
}

// Uso típico de break: ya encontraste la respuesta y seguir sería trabajo inútil.
let indiceEncontrado = -1
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 20) {
        indiceEncontrado = i
        break
    }
}
console.log(indiceEncontrado)    // 1

// Nota: forEach, map, etc. NO admiten break; con ellos no puedes salir antes.

// ── 6. Bucles anidados ──────────────────────────────────────────────────────

// Por cada vuelta del externo, el interno da todas las suyas: n × m vueltas.
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j)        // 0 0 · 0 1 · 0 2 · 1 0 · 1 1 · 1 2
    }
}

// Patrón «todos los pares sin repetir»: el interno empieza en i + 1.
const letras = ["a", "b", "c"]
for (let i = 0; i < letras.length; i++) {
    for (let j = i + 1; j < letras.length; j++) {
        console.log(letras[i] + letras[j])   // ab · ac · bc
    }
}

// ── 7. Cómo depurar un bucle: tabla de seguimiento ──────────────────────────

// Antes de ejecutar, anota en papel el valor de cada variable por vuelta.
//
//   suma = 0 ; recorrer [4, 9, 2]
//   vuelta | i | nums[i] | suma después
//     1    | 0 |   4     |    4
//     2    | 1 |   9     |   13
//     3    | 2 |   2     |   15
//
// Si tu tabla y el resultado no coinciden, el error está en la fila donde difieren.
// Hazlo SIEMPRE con los casos límite: array vacío, un elemento, valores repetidos.

// ── 8. Errores de borde más comunes ─────────────────────────────────────────

// ✗ i <= arr.length  → se pasa un índice
// ✗ empezar en 1 sin querer → te saltas el primer elemento
// ✗ modificar el array (push/splice) mientras lo recorres → recorrido impredecible
// ✗ declarar la variable acumuladora DENTRO del bucle → se reinicia en cada vuelta
