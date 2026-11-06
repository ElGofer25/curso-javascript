/*
Clase 21 - Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=6565

ETAPA 1 · STRINGS
Idea clave: un string es una SECUENCIA INMUTABLE de caracteres, numerados desde 0.
Se recorre igual que un array, pero nunca se modifica: cada operación devuelve un
string NUEVO.
*/

// ── 1. Crear y unir ─────────────────────────────────────────────────────────

const nombre = "Ana"
const saludo1 = "Hola, " + nombre + "!"   // concatenación con +
const saludo2 = `Hola, ${nombre}!`        // template literal: ${} inserta valores
console.log(saludo1 === saludo2)           // true (=== compara el contenido)

// Nota: las comillas invertidas (`) también permiten escribir varias líneas.

// ── 2. Índices ──────────────────────────────────────────────────────────────

const s = "hola"
//  índice:  0   1   2   3        length = 4
console.log(s.length)         // 4
console.log(s[0])             // "h"  → primer carácter
console.log(s[s.length - 1])  // "a"  → último carácter: SIEMPRE length - 1
console.log(s[4])             // undefined → fuera de rango no lanza error
console.log(s.at(-1))         // "a"  → at() acepta negativos (-1 = último)

// Nota: el último índice válido es length - 1. s[s.length] siempre es undefined.

// ── 3. Inmutabilidad ────────────────────────────────────────────────────────

let t = "hola"
// t[0] = "H"                 // No cambia nada (en modo estricto lanza TypeError)
console.log(t.toUpperCase())  // "HOLA"
console.log(t)                // "hola" → t NO cambió
t = t.toUpperCase()           // para «cambiarlo» hay que reasignar el resultado
console.log(t)                // "HOLA"

// Nota: olvidar la reasignación es el error más común: `t.toUpperCase()` solo
// no hace nada útil si no guardas o usas el resultado.

// ── 4. Recorrer ─────────────────────────────────────────────────────────────

for (let i = 0; i < s.length; i++) {   // con índice: úsalo si necesitas la posición
    console.log(i, s[i])               // 0 h · 1 o · 2 l · 3 a
}

for (const c of s) {                   // sin índice: más limpio si no lo necesitas
    console.log(c)                     // h · o · l · a
}

// ── 5. Métodos esenciales ───────────────────────────────────────────────────

const frase = "programar es pensar"

console.log(frase.slice(0, 4))      // "prog"  → slice(inicio, fin): fin NO se incluye
console.log(frase.slice(10))        // "es pensar" → sin fin: hasta el final
console.log(frase.slice(-6))        // "pensar" → negativo: cuenta desde el final
console.log(frase.indexOf("es"))    // 10  → índice de la primera aparición
console.log(frase.indexOf("xyz"))   // -1  → -1 significa «no está»
console.log(frase.includes("pensar"))     // true
console.log(frase.startsWith("prog"))     // true
console.log(frase.endsWith("ar"))         // true
console.log("  hola  ".trim())            // "hola" → quita espacios de los extremos
console.log("a-b-c".replace("-", "+"))    // "a+b-c" → reemplaza SOLO la primera
console.log("a-b-c".replaceAll("-", "+")) // "a+b+c" → reemplaza todas
console.log("ab".repeat(3))               // "ababab"

// Nota: indexOf devuelve un NÚMERO. `if (frase.indexOf("pro"))` falla porque
// devuelve 0 (falsy). Compara siempre: `indexOf(...) !== -1` o usa includes().

// ── 6. De string a array y de vuelta ────────────────────────────────────────

console.log("hola".split(""))           // ["h","o","l","a"] → un elemento por carácter
console.log("a b c".split(" "))         // ["a","b","c"]     → separa por un delimitador
console.log(["h", "o"].join(""))        // "ho"              → une sin separador
console.log(["a", "b"].join("-"))       // "a-b"
console.log([..."hola"])                // ["h","o","l","a"] → otra forma de separar

// Nota: split(" ") sobre "" devuelve [""] (un elemento vacío), no []. Esto rompe
// código que usa palabra[0] — es un caso límite que debes contemplar.

// ── 7. Comparar caracteres ──────────────────────────────────────────────────

console.log("a" === "A")      // false → distingue mayúsculas: normaliza con toLowerCase()
console.log("a" < "b")        // true  → compara por orden de código (alfabético)
console.log("a" < "B")        // false → las MAYÚSCULAS van antes que las minúsculas
console.log("m" >= "a" && "m" <= "z")   // true → así se comprueba «es letra minúscula»
console.log("5" >= "0" && "5" <= "9")   // true → así se comprueba «es dígito»

// ── 8. Trampas ──────────────────────────────────────────────────────────────

console.log("5" + 1)          // "51" → con un string, + concatena
console.log("5" - 1)          // 4    → - convierte a número
console.log("10" > "9")       // false → los strings se comparan carácter a carácter
console.log(Number("10") > Number("9"))  // true → convierte antes de comparar

// ── 9. Patrones que repetirás en LeetCode ───────────────────────────────────

const texto = "Hola Mundo"

// A) Contar: un contador que sube cuando se cumple una condición
let mayusculas = 0
for (const c of texto) {
    if (c >= "A" && c <= "Z") mayusculas++
}
console.log(mayusculas)       // 2

// B) Construir: un string acumulador al que se le va agregando
let sinEspacios = ""
for (const c of texto) {
    if (c !== " ") sinEspacios += c
}
console.log(sinEspacios)      // "HolaMundo"

// C) Recorrer de derecha a izquierda
let invertido = ""
for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i]
}
console.log(invertido)        // "odnuM aloH"

// D) Dos extremos: un índice por cada lado, acercándose al centro
const palabra = "reconocer"
let izquierda = 0
let derecha = palabra.length - 1
let esPalindromo = true
while (izquierda < derecha) {
    if (palabra[izquierda] !== palabra[derecha]) {
        esPalindromo = false
        break
    }
    izquierda++
    derecha--
}
console.log(esPalindromo)     // true
