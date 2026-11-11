/*
ETAPA 1 · VARIABLES Y TIPOS DE DATOS
let · const · var · tipos primitivos · typeof · == vs === · truthy/falsy · conversión

IDEA CLAVE
  Una variable es un nombre que apunta a un valor. JavaScript tiene tipado dinámico:
  el TIPO lo tiene el valor, no la variable, y puede cambiar al reasignar.

ÍNDICE
  1. let, const y var            5. Truthy y falsy
  2. Tipos primitivos            6. Conversión de tipos
  3. typeof                      7. Primitivos vs objetos (valor vs referencia)
  4. == vs ===                   8. Patrones
*/

//! ── 1. let, const y var ──
//   const → no se puede REASIGNAR. Es la opción por defecto.
//   let   → se puede reasignar. Úsala cuando el valor cambia (contadores, acumuladores).
//   var   → forma antigua: ámbito de función y se "eleva" (hoisting). Evítala.
{
    const maximo = 10
    let contador = 0
    contador = contador + 1
    console.log(contador)     // Resultado: 1
    // maximo = 20            // TypeError: Assignment to constant variable.
}

// Nota: const protege la ASIGNACIÓN, no el contenido de un objeto o array.
{
    const lista = [1, 2]
    lista.push(3)             // permitido: se modifica el contenido
    console.log(lista)        // Resultado: [ 1, 2, 3 ]
    // lista = [9]            // TypeError: no se puede apuntar a otro array
}

// Nota: let y const viven solo dentro del bloque { } donde se declaran; var no.
{
    if (true) {
        let a = 1
        var b = 2
    }
    console.log(typeof a)     // Resultado: undefined  (a no existe fuera del bloque)
    console.log(b)            // Resultado: 2          (var se escapa del bloque)
}

// Nota: asignar sin declarar (x = 5) crea una variable GLOBAL implícita. Es un error
// común; declara siempre con const o let.

//! ── 2. Tipos primitivos ──
//   number     42 · 3.14 · -7 · NaN · Infinity      (un solo tipo para enteros y decimales)
//   string     'hola' · "hola" · `hola ${1 + 1}`    (plantillas con backticks)
//   boolean    true · false
//   undefined  variable declarada sin valor
//   null       "vacío" puesto a propósito
//   bigint     123n                                  (enteros enormes)
//   symbol     Symbol('id')                          (identificador único; poco usado)
// Todo lo demás (arrays, objetos, funciones…) es un OBJETO.
{
    let sinValor
    console.log(sinValor)                 // Resultado: undefined
    console.log(`2 + 2 = ${2 + 2}`)       // Resultado: 2 + 2 = 4
    console.log(0.1 + 0.2)                // Resultado: 0.30000000000000004
    console.log(Number.MAX_SAFE_INTEGER)  // Resultado: 9007199254740991
}
// Nota: los decimales se guardan en binario y no son exactos. Para dinero o
// comparaciones trabaja con enteros (centavos) o compara con un margen.

//! ── 3. typeof ──
{
    console.log(typeof 42)            // Resultado: number
    console.log(typeof 'hola')        // Resultado: string
    console.log(typeof true)          // Resultado: boolean
    console.log(typeof undefined)     // Resultado: undefined
    console.log(typeof null)          // Resultado: object   ← error histórico del lenguaje
    console.log(typeof [])            // Resultado: object
    console.log(typeof function () {})// Resultado: function
    console.log(Array.isArray([]))    // Resultado: true     ← la forma correcta de detectar arrays
    console.log(Number.isInteger(5))  // Resultado: true
    console.log(Number.isNaN(NaN))    // Resultado: true     (NaN === NaN es false)
}

//! ── 4. == vs === ──
//   ===  compara valor Y tipo.               (úsalo siempre)
//   ==   convierte tipos antes de comparar.  (reglas confusas)
{
    console.log(5 === '5')            // Resultado: false
    console.log(5 == '5')             // Resultado: true   (convierte '5' a número)
    console.log(null == undefined)    // Resultado: true
    console.log(null === undefined)   // Resultado: false
    console.log(NaN === NaN)          // Resultado: false
}
// Los objetos se comparan por REFERENCIA, no por contenido:
{
    console.log([1] === [1])          // Resultado: false  (son dos arrays distintos)
    const a = [1]
    const b = a
    console.log(a === b)              // Resultado: true   (misma referencia)
}

//! ── 5. Truthy y falsy ──
// En un if, un while o con !, cualquier valor se interpreta como true o false.
// FALSY (solo estos 8):   false · 0 · -0 · 0n · '' · null · undefined · NaN
// TODO LO DEMÁS es truthy, incluidos '0', 'false', [] y {}.
{
    console.log(Boolean(''))          // Resultado: false
    console.log(Boolean('0'))         // Resultado: true
    console.log(Boolean([]))          // Resultado: true   (un array vacío es truthy)
    console.log(!!'hola')             // Resultado: true   (!! convierte a booleano)
}
// Nota: `if (n)` es false cuando n vale 0. Si 0 es un valor válido, compara explícito:
// n !== undefined  /  n != null.

//! ── 6. Conversión de tipos ──
{
    console.log(Number('42'))         // Resultado: 42
    console.log(Number('abc'))        // Resultado: NaN
    console.log(Number(''))           // Resultado: 0
    console.log(parseInt('42px'))     // Resultado: 42   (lee hasta donde puede)
    console.log(parseFloat('3.5kg'))  // Resultado: 3.5
    console.log(String(123))          // Resultado: 123  (string)
    console.log((255).toString(2))    // Resultado: 11111111  (a base 2)
}
// Conversión automática (coerción) del operador +:
{
    console.log('5' + 1)              // Resultado: 51   (con un string, + concatena)
    console.log('5' - 1)              // Resultado: 4    (los demás operadores pasan a número)
    console.log(1 + 2 + '3')          // Resultado: 33   (de izquierda a derecha: 3 y luego '3')
}

//! ── 7. Primitivos vs objetos ──
// Primitivos: la variable GUARDA el valor; al copiar, se copia el valor.
// Objetos/arrays: la variable guarda una REFERENCIA; al copiar, ambas apuntan al mismo objeto.
{
    let x = 1
    let y = x
    y = 2
    console.log(x)                    // Resultado: 1   (x no cambió)

    const a = [1, 2]
    const b = a                       // no copia: apunta al mismo array
    b.push(3)
    console.log(a)                    // Resultado: [ 1, 2, 3 ]   (a también cambió)
    const c = [...a]                  // copia superficial
    c.push(4)
    console.log(a)                    // Resultado: [ 1, 2, 3 ]   (a no cambió)
}
// Esto explica por qué una función que recibe un array y lo modifica, lo modifica
// también fuera (ver 08-funciones.js).

//! ── 8. Patrones ──
//   Declara con const; cambia a let solo si vas a reasignar.
//   Compara siempre con ===.
//   ¿Es array?  Array.isArray(x)   ·   ¿Es entero?  Number.isInteger(x)
//   ¿Existe? → x !== undefined / x != null   (no `if (x)` si 0 o '' son válidos)
//   Copiar un array/objeto → [...a] / {...o} (superficial; los anidados se comparten)
