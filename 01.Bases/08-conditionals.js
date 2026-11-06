/*
Clase 23 - Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=7277

ETAPA 1 · CONDICIONALES
Idea clave: un condicional decide qué código se ejecuta según si una expresión es
verdadera. Los problemas difíciles no usan sintaxis nueva: combinan MUCHAS
condiciones, y el orden en que las escribes cambia el resultado.
*/

// ── 1. Estructura ───────────────────────────────────────────────────────────

const nota = 85

if (nota >= 90) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B")            // ← entra aquí
} else {
    console.log("C o menos")
}

// Nota: se evalúa de arriba abajo y GANA LA PRIMERA condición verdadera; las
// demás ya no se miran. Por eso el orden importa (siguiente apartado).

// ── 2. El orden importa ─────────────────────────────────────────────────────

function etiqueta(n) {
    if (n % 3 === 0) return "Fizz"
    if (n % 5 === 0) return "Buzz"
    if (n % 15 === 0) return "FizzBuzz"   // ✗ nunca se alcanza para 15: ya entró arriba
    return String(n)
}
console.log(etiqueta(15))       // "Fizz" → error de lógica, no de sintaxis

// Regla: escribe primero el caso MÁS ESPECÍFICO (15) y al final el más general.

// ── 3. Operadores lógicos ───────────────────────────────────────────────────

//  &&  «y»: ambas verdaderas      ||  «o»: al menos una      !  «no»: invierte
const edad = 20
const tieneCarnet = true

console.log(edad >= 18 && tieneCarnet)   // true
console.log(edad < 18 || tieneCarnet)    // true
console.log(!(edad >= 18))               // false

// Precedencia: && se evalúa ANTES que ||. Usa paréntesis para dejarlo claro.
console.log(true || false && false)      // true  (= true || (false && false))
console.log((true || false) && false)    // false

// Cortocircuito: si el resultado ya se conoce, la segunda parte NO se evalúa.
const lista = []
if (lista.length > 0 && lista[0] > 5) {  // si la lista está vacía, no toca lista[0]
    console.log("el primero es mayor que 5")
}

// ── 4. Rangos ───────────────────────────────────────────────────────────────

const x = 50
console.log(0 <= x && x <= 10)           // false → así se escribe «x entre 0 y 10»
console.log(0 <= x <= 10)                // true  ✗ TRAMPA: (0 <= 50) es true, y true <= 10 es true

// Nota: «entre a y b» siempre necesita DOS comparaciones unidas con &&.
// Pregúntate en cada borde: ¿incluye el límite (<=) o lo excluye (<)?

// ── 5. Evitar anidación: retornos tempranos ─────────────────────────────────

// Difícil de leer:
function descuentoAnidado(edad, esSocio) {
    if (edad >= 0) {
        if (esSocio) {
            if (edad >= 65) {
                return 30
            } else {
                return 10
            }
        } else {
            return 0
        }
    } else {
        return -1
    }
}

// Mismo resultado: descarta primero los casos simples y sal con return.
function descuento(edad, esSocio) {
    if (edad < 0) return -1
    if (!esSocio) return 0
    if (edad >= 65) return 30
    return 10
}
console.log(descuentoAnidado(70, true), descuento(70, true))   // 30 30

// ── 6. Devolver el booleano directamente ────────────────────────────────────

function esMayorMalo(edad) {
    if (edad >= 18) return true
    else return false
}
function esMayor(edad) {
    return edad >= 18          // la comparación YA es un booleano
}
console.log(esMayorMalo(20), esMayor(20))   // true true

// ── 7. Truthy / falsy: cuándo NO usarlo ─────────────────────────────────────

const valores = [0, 3]
if (valores[0]) {
    console.log("hay valor")                // no se ejecuta: 0 es falsy
}
if (valores[0] !== undefined) {
    console.log("hay valor (correcto)")     // sí se ejecuta
}

// Nota: if (x) pregunta «¿es truthy?», no «¿existe?». Con números y strings,
// 0 y "" son falsy aunque sean datos válidos. Compara explícitamente.

// ── 8. Ternario y switch ────────────────────────────────────────────────────

const mensaje = edad >= 18 ? "mayor" : "menor"   // condición ? si_true : si_false
console.log(mensaje)

// switch compara con === un valor contra varios casos. Útil cuando hay muchos
// valores EXACTOS (no rangos).
function diasDelMes(mes) {
    switch (mes) {
        case 4:
        case 6:
        case 9:
        case 11:             // casos agrupados: sin break entre ellos → comparten código
            return 30
        case 2:
            return 28
        default:
            return 31
    }
}
console.log(diasDelMes(11), diasDelMes(2), diasDelMes(1))   // 30 28 31

// Nota: sin break (o return) el switch «cae» al siguiente caso. Olvidarlo es un bug clásico.

// ── 9. Cómo resolver un problema con muchas condiciones ─────────────────────

// 1) Lista las reglas en orden de prioridad (¿cuál manda si dos se cumplen?).
// 2) Identifica los valores BORDE de cada regla (17, 18, 19 si el límite es 18).
// 3) Escribe primero los casos inválidos o especiales (retorno temprano).
// 4) Prueba a mano cada borde antes de ejecutar.
//
// De Morgan, para negar una condición compuesta:
//   !(a && b)  es igual a  !a || !b
//   !(a || b)  es igual a  !a && !b
const a = true
const b = false
console.log(!(a && b) === (!a || !b))   // true
console.log(!(a || b) === (!a && !b))   // true
