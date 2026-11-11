/*
ETAPA 1 · BUCLES
for · while · do...while · for...of · for...in · break · continue

IDEA CLAVE
  Un bucle repite un bloque de código. Elegir el bucle correcto depende de lo que
  necesitas en cada vuelta:
     ¿necesito la POSICIÓN (i)?     → for clásico
     ¿solo necesito el VALOR?       → for...of
     ¿no sé cuántas vueltas?        → while
     ¿recorro CLAVES de un objeto?  → for...in

ÍNDICE
   1. for clásico                    7. Los tres for con los mismos datos
   2. while                          8. Cuál elegir
   3. do...while                     9. break y continue
   4. for...of (cómo se usa)        10. Bucles anidados
   5. for...of con índice           11. Recorridos típicos de entrevista
   6. for...in                      12. Patrones
*/

//! ── 1. for clásico ──
// Tres partes:  for (inicio; condición; paso) { cuerpo }
//   inicio:    se ejecuta UNA vez, antes de empezar.
//   condición: se evalúa ANTES de cada vuelta; si es false, el bucle termina.
//   paso:      se ejecuta DESPUÉS de cada vuelta.
{
    const frutas = ['manzana', 'pera', 'uva']
    for (let i = 0; i < frutas.length; i++) {
        console.log(i, frutas[i])
    }
    // Resultado: 0 manzana · 1 pera · 2 uva
    // Un array de n elementos tiene posiciones 0 … n-1, por eso se usa i < length
    // (con <= se leería frutas[3], que no existe y da undefined).
}

// Con el for clásico controlas todo: dónde empieza, dónde acaba y cuánto avanza.
{
    for (let i = 0; i <= 10; i += 5) console.log(i)       // Resultado: 0, 5, 10
    for (let i = 3; i > 0; i--) console.log(i)            // Resultado: 3, 2, 1
}

// Nota: usa `let` en el for. Con `const i` falla en el primer i++ (TypeError).

//! ── 2. while ──
// Repite MIENTRAS la condición sea true. Se usa cuando no sabes cuántas vueltas habrá.
// Si la condición nunca pasa a false, el bucle es infinito: modifica algo dentro del cuerpo.
{
    let n = 100
    let pasos = 0
    while (n > 1) {
        n = Math.floor(n / 2)
        pasos++
    }
    console.log(pasos)     // Resultado: 6   (100 → 50 → 25 → 12 → 6 → 3 → 1)
}

//! ── 3. do...while ──
// Igual que while, pero la condición se evalúa DESPUÉS: el cuerpo corre al menos una vez.
{
    let intentos = 0
    do {
        intentos++
    } while (intentos < 0)
    console.log(intentos)  // Resultado: 1   (un while normal habría dado 0)
}

//! ── 4. for...of (cómo se usa) ──
// Se lee: «por cada elemento DE esta colección, ejecuta el cuerpo».
//
//     for (const fruta of frutas) { ... }
//           │      │       └── la colección que recorres (array, string, Set, Map…)
//           │      └────────── nombre que TÚ eliges para «el elemento de esta vuelta»
//           └───────────────── const normalmente; let solo si la reasignas dentro
//
// JavaScript hace el trabajo del contador: toma el primer elemento, lo guarda en la
// variable, ejecuta el cuerpo, toma el siguiente… y para al acabar. No hay i, ni length,
// ni condición: no puedes equivocarte en los límites.
{
    const frutas = ['manzana', 'pera', 'uva']
    for (const fruta of frutas) {
        console.log(fruta)
    }
    // Resultado: manzana · pera · uva
    //   vuelta 1 → fruta = 'manzana'
    //   vuelta 2 → fruta = 'pera'
    //   vuelta 3 → fruta = 'uva'
    // `const` funciona porque cada vuelta crea una variable NUEVA; no se reasigna la anterior.
}

// El mismo problema con for clásico y con for...of: contar las letras 'a' de un texto.
{
    const texto = 'banana'

    let conFor = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a') conFor++        // hay que escribir texto[i]
    }

    let conForOf = 0
    for (const letra of texto) {
        if (letra === 'a') conForOf++         // la letra ya viene en la variable
    }

    console.log(conFor, conForOf)             // Resultado: 3 3
}

// Qué se puede recorrer con for...of (los «iterables»):
//   ✔ array, string, Set, Map, y lo que devuelven .keys() / .values() / .entries()
//   ✘ objeto común {}, número, null, undefined → TypeError
{
    for (const letra of 'hola') console.log(letra)          // Resultado: h · o · l · a
    for (const x of new Set([1, 1, 2])) console.log(x)      // Resultado: 1 · 2

    // Un Map entrega un PAR [clave, valor] en cada vuelta. Los corchetes lo separan en
    // dos variables (desestructuración; ver 09-objetos.js, sección 5).
    for (const [clave, valor] of new Map([['a', 1], ['b', 2]])) {
        console.log(clave, valor)                           // Resultado: a 1 · b 2
    }
}

// Array de objetos: la variable de cada vuelta ES el objeto.
{
    const personas = [{ nombre: 'Ana', edad: 30 }, { nombre: 'Luis', edad: 25 }]
    for (const persona of personas) console.log(persona.nombre)   // Resultado: Ana · Luis

    // Si solo necesitas algunas propiedades, desestructúralas ahí mismo:
    for (const { nombre, edad } of personas) console.log(nombre, edad)   // Resultado: Ana 30 · Luis 25
}

// break, continue y return funcionan igual que en el for clásico.
{
    function hayCero(nums) {
        for (const n of nums) {
            if (n === 0) return true        // sale de la función en cuanto lo encuentra
        }
        return false
    }
    console.log(hayCero([4, 0, 7]), hayCero([1, 2]))   // Resultado: true false
}

// Trampa 1: la variable es una COPIA del elemento. Reasignarla NO cambia el array.
{
    const nums = [1, 2, 3]
    for (let n of nums) n = n * 2
    console.log(nums)                       // Resultado: [ 1, 2, 3 ]   (sin cambios)

    // Para modificar las posiciones necesitas el índice: for clásico.
    for (let i = 0; i < nums.length; i++) nums[i] = nums[i] * 2
    console.log(nums)                       // Resultado: [ 2, 4, 6 ]
}
// Si los elementos son objetos, SÍ puedes cambiar su contenido (la copia apunta al mismo objeto):
{
    const personas = [{ edad: 30 }]
    for (const p of personas) p.edad++
    console.log(personas)                   // Resultado: [ { edad: 31 } ]
}

// Trampa 2: un objeto común no es iterable.
{
    const persona = { nombre: 'Ana', edad: 30 }
    // for (const x of persona) {}          // TypeError: persona is not iterable
    // Solución: convertirlo en array de pares con Object.entries
    for (const [clave, valor] of Object.entries(persona)) console.log(clave, valor)
    // Resultado: nombre Ana · edad 30
}

// Trampa 3: no añadas ni quites elementos del array MIENTRAS lo recorres (push, splice…):
// el recorrido se salta elementos o no termina. Recorre una copia o construye un array nuevo.

//! ── 5. for...of con índice ──
// for...of no da el índice. Si lo necesitas, usa .entries(): entrega un par [i, valor].
{
    const frutas = ['manzana', 'pera', 'uva']
    for (const [i, fruta] of frutas.entries()) {
        console.log(i, fruta)
    }
    // Resultado: 0 manzana · 1 pera · 2 uva
}
// Si además necesitas empezar en otra posición, ir al revés, saltar de 2 en 2 o mirar
// el vecino (arr[i + 1]), usa el for clásico.

//! ── 6. for...in ──
// Recorre las CLAVES (nombres de propiedad) de un objeto, siempre como strings.
//     for (const clave in objeto) { ... objeto[clave] ... }
{
    const persona = { nombre: 'Ana', edad: 30 }
    for (const clave in persona) {
        console.log(clave, persona[clave])    // corchetes: la clave está en una variable
    }
    // Resultado: nombre Ana · edad 30
    // persona.clave buscaría una propiedad llamada literalmente «clave» → undefined.
}

// Trampa: en un array, for...in da los índices COMO STRINGS (y también cualquier
// propiedad extra enumerable). Para arrays usa for...of o for clásico.
{
    for (const i in ['a', 'b']) console.log(typeof i, i)    // Resultado: string 0 · string 1
    // Por eso  i + 1  da '01' en vez de 1.
}

//! ── 7. Los tres for con los mismos datos ──
{
    const letras = ['a', 'b', 'c']

    // for clásico → TÚ manejas la posición i
    for (let i = 0; i < letras.length; i++) console.log(i, letras[i])
    // Resultado: 0 a · 1 b · 2 c

    // for...of → recibes el VALOR
    for (const letra of letras) console.log(letra)
    // Resultado: a · b · c

    // for...in → recibes la CLAVE (en un array, el índice como string)
    for (const clave in letras) console.log(clave, typeof clave)
    // Resultado: 0 string · 1 string · 2 string
}
{
    const edades = { ana: 30, luis: 25 }

    // for...in → claves; el valor se obtiene con edades[clave]
    for (const nombre in edades) console.log(nombre, edades[nombre])
    // Resultado: ana 30 · luis 25

    // for...of no funciona directo sobre el objeto; con Object.entries sí
    for (const [nombre, edad] of Object.entries(edades)) console.log(nombre, edad)
    // Resultado: ana 30 · luis 25
}
//                    for clásico        for...of                 for...in
//   Recibes en       el índice i        el valor                 la clave (string)
//   cada vuelta      (tú lees arr[i])
//   Ideal para       control total      arrays, strings,         objetos
//                    de la posición     Set, Map
//   Array            ✔                  ✔ (el más cómodo)        ✘ evítalo
//   Objeto común     —                  ✘ TypeError              ✔
//   break / return   ✔                  ✔                        ✔
//
// arr.forEach(fn) también recorre, pero NO admite break y su `return` solo termina
// esa vuelta, no la función que lo contiene. Para poder cortar usa for / for...of.

//! ── 8. Cuál elegir ──
//   Necesito…                                         Usa
//   ------------------------------------------------  ---------------------------
//   cada valor de un array/string/Set                 for...of
//   valor Y posición                                  for...of + .entries()
//   ir al revés, saltar, empezar en medio             for clásico
//   dos índices a la vez (extremos hacia el centro)   for clásico / while
//   repetir hasta que algo cambie                     while
//   claves de un objeto                               for...in (o Object.entries)
//   modificar cada posición del array                 for clásico (nums[i] = …)

//! ── 9. break y continue ──
//   break    → sale del bucle por completo.
//   continue → salta lo que queda de ESTA vuelta y pasa a la siguiente.
{
    for (let i = 1; i <= 6; i++) {
        if (i === 2) continue       // se salta el 2
        if (i === 5) break          // termina al llegar al 5
        console.log(i)
    }
    // Resultado: 1 · 3 · 4
}

// Uso típico: parar en cuanto encuentras la respuesta (no sigas recorriendo).
{
    const nums = [9, 7, 12, 4]
    let primerPar = null
    for (const n of nums) {
        if (n % 2 === 0) {
            primerPar = n
            break
        }
    }
    console.log(primerPar)   // Resultado: 12
}

// Nota: break y continue solo afectan al bucle MÁS INTERNO que los contiene.
// Para salir de dos bucles a la vez, lo más claro es meter el código en una función
// y usar return.

//! ── 10. Bucles anidados ──
// Por cada vuelta del externo, el interno se ejecuta COMPLETO.
// Si ambos recorren n elementos: n × n = n² operaciones (ver 11-big-o.js).
{
    for (let i = 1; i <= 2; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log(i, j)
        }
    }
    // Resultado: 1 1 · 1 2 · 1 3 · 2 1 · 2 2 · 2 3
}

// Variante típica: comparar cada elemento con los que le siguen (todos los pares).
// El interno empieza en i + 1 para no repetir pares ni comparar un elemento consigo mismo.
{
    const nums = [1, 2, 3]
    const pares = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            pares.push([nums[i], nums[j]])
        }
    }
    console.log(JSON.stringify(pares))   // Resultado: [[1,2],[1,3],[2,3]]
}

//! ── 11. Recorridos típicos de entrevista ──
{
    const nums = [10, 20, 30, 40]

    // Al revés
    for (let i = nums.length - 1; i >= 0; i--) console.log(nums[i])   // Resultado: 40 · 30 · 20 · 10

    // Dos índices (extremos hacia el centro): palíndromos, invertir, two sum ordenado
    let izq = 0
    let der = nums.length - 1
    while (izq < der) {
        console.log(nums[izq], nums[der])    // Resultado: 10 40 · 20 30
        izq++
        der--
    }

    // De dos en dos
    for (let i = 0; i < nums.length; i += 2) console.log(nums[i])     // Resultado: 10 · 30

    // Elemento y su vecino (cuidado con el último: no tiene siguiente)
    for (let i = 0; i < nums.length - 1; i++) console.log(nums[i], nums[i + 1])
    // Resultado: 10 20 · 20 30 · 30 40
}

//! ── 12. Patrones ──
//   Recorrer todo sin necesitar el índice ........ for (const x of arr)
//   Necesito índice, borde o paso distinto ........ for (let i = 0; i < arr.length; i++)
//   Buscar y parar al encontrar ................... recorrer + break (o return en una función)
//   Todos los pares ............................... for i / for j = i + 1   → O(n²)
//   Extremos hacia el centro ...................... izq = 0, der = length - 1, while (izq < der)
//   Última posición ............................... length - 1  (no length)
//   Errores clásicos: <= length en vez de < length · olvidar actualizar la condición del while ·
//                     usar for...in en un array · reasignar la variable de for...of esperando
//                     cambiar el array · modificar el array mientras lo recorres
