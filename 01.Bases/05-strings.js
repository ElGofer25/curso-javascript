/*
ETAPA 1 · STRINGS
índices · inmutabilidad · métodos · recorrer · construir texto · códigos de carácter

IDEA CLAVE
  Un string es una secuencia INMUTABLE de caracteres con índices desde 0. Ningún método
  lo modifica: todos devuelven un string nuevo. Se recorre igual que un array.

ÍNDICE
  1. Acceso por índice            6. Dividir y unir (split / join)
  2. Inmutabilidad                7. Recorrer
  3. Métodos de consulta          8. Construir texto
  4. Métodos de transformación    9. Comparar y códigos de carácter
  5. Extraer (slice)             10. Patrones
*/

//! ── 1. Acceso por índice ──
{
    const s = 'hola'
    console.log(s.length)         // Resultado: 4
    console.log(s[0], s[3])       // Resultado: h a
    console.log(s[4])             // Resultado: undefined   (fuera de rango, sin error)
    console.log(s[s.length - 1])  // Resultado: a           (último carácter)
    console.log(s.at(-1))         // Resultado: a           (.at admite negativos)
    console.log(''.length)        // Resultado: 0
}

//! ── 2. Inmutabilidad ──
{
    let s = 'hola'
    s[0] = 'H'                    // se ignora en silencio (error en modo estricto)
    console.log(s)                // Resultado: hola
    s = 'H' + s.slice(1)          // para "cambiar" hay que crear otro string
    console.log(s)                // Resultado: Hola
}

//! ── 3. Métodos de consulta (no modifican, devuelven un valor) ──
{
    const s = 'banana'
    console.log(s.includes('nan'))        // Resultado: true
    console.log(s.indexOf('an'))          // Resultado: 1    (primera aparición; -1 si no existe)
    console.log(s.lastIndexOf('an'))      // Resultado: 3
    console.log(s.startsWith('ba'))       // Resultado: true
    console.log(s.endsWith('na'))         // Resultado: true
    console.log(s.indexOf('z'))           // Resultado: -1
}

//! ── 4. Métodos de transformación (devuelven un string nuevo) ──
{
    console.log('Hola'.toUpperCase(), 'Hola'.toLowerCase())   // Resultado: HOLA hola
    console.log('  hola  '.trim() + '|')                      // Resultado: hola|
    console.log('ab'.repeat(3))                               // Resultado: ababab
    console.log('7'.padStart(3, '0'))                         // Resultado: 007
    console.log('a-b-c'.replace('-', '+'))                    // Resultado: a+b-c   (solo la primera)
    console.log('a-b-c'.replaceAll('-', '+'))                 // Resultado: a+b+c
}

//! ── 5. Extraer: slice ──
//   s.slice(inicio, fin)   → desde inicio hasta ANTES de fin. Admite negativos.
{
    const s = 'abcdef'
    console.log(s.slice(1, 4))    // Resultado: bcd
    console.log(s.slice(2))       // Resultado: cdef   (hasta el final)
    console.log(s.slice(-2))      // Resultado: ef     (los dos últimos)
    console.log(s.slice(0, -1))   // Resultado: abcde  (sin el último)
    console.log(s.slice(4, 2))    // Resultado: (vacío) si inicio >= fin
}
// Nota: substring es parecido pero trata los negativos como 0. Usa slice.

//! ── 6. Dividir y unir ──
{
    console.log('a b c'.split(' '))       // Resultado: [ 'a', 'b', 'c' ]
    console.log('hola'.split(''))         // Resultado: [ 'h', 'o', 'l', 'a' ]   (un carácter por elemento)
    console.log('a,b'.split(','))         // Resultado: [ 'a', 'b' ]
    console.log(['a', 'b', 'c'].join('-'))// Resultado: a-b-c
    console.log(['h', 'i'].join(''))      // Resultado: hi
}
// Nota: 'a  b'.split(' ') da ['a', '', 'b']: dos espacios producen un elemento vacío.
// Inversión rápida (cuando se permite usar métodos): s.split('').reverse().join('')

//! ── 7. Recorrer ──
{
    const s = 'hola'
    for (let i = 0; i < s.length; i++) console.log(s[i])    // con índice
    for (const letra of s) console.log(letra)               // solo los caracteres
    // Resultado de cada uno: h · o · l · a
}

//! ── 8. Construir texto ──
// Como los strings no se modifican, el patrón es: empezar con '' y concatenar.
{
    const s = 'abc'
    let invertido = ''
    for (const c of s) invertido = c + invertido     // c al FRENTE: invierte
    console.log(invertido)                           // Resultado: cba

    let alRevesConIndice = ''
    for (let i = s.length - 1; i >= 0; i--) alRevesConIndice += s[i]
    console.log(alRevesConIndice)                    // Resultado: cba
}
// Plantillas con backticks: interpolan expresiones y respetan saltos de línea.
{
    const nombre = 'Ana'
    console.log(`Hola ${nombre}, 2 + 2 = ${2 + 2}`)  // Resultado: Hola Ana, 2 + 2 = 4
}
// Nota: en teoría cada concatenación copia el string, así que construirlo en un bucle
// se analiza como O(n²). V8 lo optimiza en la práctica, pero en entrevista la forma
// segura de razonarlo es juntar las piezas en un array y hacer .join('') al final (O(n)).

//! ── 9. Comparar y códigos de carácter ──
{
    console.log('a' === 'a')                  // Resultado: true   (los strings SÍ se comparan por valor)
    console.log('a' < 'b', 'B' < 'a')         // Resultado: true true   (mayúsculas van antes que minúsculas)
    console.log('a'.charCodeAt(0))            // Resultado: 97
    console.log(String.fromCharCode(98))      // Resultado: b
    console.log('c'.charCodeAt(0) - 'a'.charCodeAt(0))   // Resultado: 2   (posición en el alfabeto)
    console.log('a'.localeCompare('b'))       // Resultado: -1  (negativo: «a» va antes; 0 igual; positivo después)
    // localeCompare ordena según el idioma («humano»); el signo importa, no el número exacto.
}
// Comprobar si un carácter es dígito / vocal sin regex:
{
    const esDigito = (c) => c >= '0' && c <= '9'
    const esVocal = (c) => 'aeiou'.includes(c)        // c debe ser UN carácter en minúscula
    console.log(esDigito('7'), esDigito('x'), esVocal('e'), esVocal('z'))   // Resultado: true false true false
}
// Nota: 'aeiou'.includes('') es true. Valida que c tenga un carácter si puede venir vacío.

//! ── 10. Patrones ──
//   Último carácter ........... s[s.length - 1]   ·   s.at(-1)
//   Sin el último ............. s.slice(0, -1)
//   Contar / filtrar .......... for (const c of s) con un acumulador
//   Comparar extremos ......... izq = 0, der = s.length - 1  (palíndromo; ver 04-bucles.js)
//   Normalizar antes de comparar: toLowerCase() una sola vez, fuera del bucle
//   Posición en el alfabeto ... c.charCodeAt(0) - 'a'.charCodeAt(0)   → arreglo de 26 contadores
//   Construir resultado ....... '' + concatenar, o array + join('')
//   Anagramas / frecuencias ... conteo por carácter (ver 07-set-map.js)
