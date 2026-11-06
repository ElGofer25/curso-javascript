/*
ETAPA 1 · ACUMULADORES
Idea clave: un acumulador es una variable declarada FUERA del bucle que va
guardando un resultado parcial. Al terminar el recorrido contiene la respuesta.
Es el patrón más repetido en problemas de arrays y strings.

Receta:  1) declara el acumulador con su valor inicial
         2) recorre los datos
         3) en cada vuelta, actualiza el acumulador
         4) devuelve el acumulador al terminar
*/

// ── 1. Suma y producto ──────────────────────────────────────────────────────

function sumar(nums) {
    let total = 0                      // valor inicial de la suma: 0 (neutro de +)
    for (const n of nums) {
        total += n
    }
    return total
}
console.log(sumar([4, 9, 2]))          // 15
console.log(sumar([]))                 // 0 → el vacío funciona sin caso especial

function multiplicar(nums) {
    let producto = 1                   // valor inicial del producto: 1 (neutro de ×)
    for (const n of nums) {
        producto *= n
    }
    return producto
}
console.log(multiplicar([2, 3, 4]))    // 24

// Nota: el valor inicial debe ser el NEUTRO de la operación. Si el producto
// empezara en 0, siempre daría 0.

// ── 2. Contador ─────────────────────────────────────────────────────────────

function contarPares(nums) {
    let cuenta = 0
    for (const n of nums) {
        if (n % 2 === 0) cuenta++      // solo sube cuando se cumple la condición
    }
    return cuenta
}
console.log(contarPares([1, 2, 3, 4, 6]))   // 3

// ── 3. Máximo y mínimo ──────────────────────────────────────────────────────

function maximo(nums) {
    if (nums.length === 0) return undefined   // no hay «mayor» de nada
    let mayor = nums[0]                       // ← el PRIMER elemento, no 0
    for (let i = 1; i < nums.length; i++) {   // empieza en 1: el 0 ya está en «mayor»
        if (nums[i] > mayor) mayor = nums[i]
    }
    return mayor
}
console.log(maximo([3, 9, 2]))         // 9
console.log(maximo([-5, -2, -9]))      // -2

// Nota: si inicias en 0, [-5, -2, -9] daría 0, que ni siquiera está en el array.
// Alternativa: iniciar en -Infinity (menor que cualquier número).

// ── 4. Bandera (flag) ───────────────────────────────────────────────────────

function estaOrdenado(nums) {
    let ordenado = true                       // asumimos que sí...
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            ordenado = false                  // ...y lo desmentimos si hallamos un fallo
            break
        }
    }
    return ordenado
}
console.log(estaOrdenado([1, 2, 2, 5]))   // true
console.log(estaOrdenado([1, 3, 2]))      // false

// Nota: para «¿todos cumplen?» parte de true y busca un contraejemplo.
// Para «¿alguno cumple?» parte de false y busca un ejemplo.

// ── 5. Construir texto o array ──────────────────────────────────────────────

function soloDigitos(texto) {
    let resultado = ""                 // acumulador de texto
    for (const c of texto) {
        if (c >= "0" && c <= "9") resultado += c
    }
    return resultado
}
console.log(soloDigitos("a1b2c3"))     // "123"

// ── 6. Varios acumuladores a la vez ─────────────────────────────────────────

// «Mejor ganancia comprando antes de vender»: dos acumuladores en UNA pasada.
function mejorGanancia(precios) {
    let minimo = Infinity              // el precio más bajo visto HASTA ahora
    let ganancia = 0                   // la mejor ganancia vista HASTA ahora
    for (const p of precios) {
        if (p < minimo) minimo = p
        else if (p - minimo > ganancia) ganancia = p - minimo
    }
    return ganancia
}
console.log(mejorGanancia([7, 1, 5, 3, 6, 4]))   // 5

// Tabla de seguimiento:
//   p | minimo | ganancia
//   7 |   7    |   0
//   1 |   1    |   0
//   5 |   1    |   4
//   3 |   1    |   4
//   6 |   1    |   5
//   4 |   1    |   5
//
// La clave: cada acumulador responde a UNA pregunta («¿cuál es el mínimo hasta
// aquí?», «¿cuál es la mejor ganancia hasta aquí?»). Defínelas antes de programar.

// ── 7. Errores típicos ──────────────────────────────────────────────────────

// ✗ Declarar el acumulador dentro del bucle: se reinicia en cada vuelta.
// ✗ Valor inicial incorrecto (0 en el máximo, 0 en el producto).
// ✗ Olvidar el return, o devolverlo dentro del bucle sin querer.
// ✗ No probar el caso vacío: ¿qué debe devolver tu función con []?
