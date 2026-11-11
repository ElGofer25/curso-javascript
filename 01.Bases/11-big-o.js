/*
ETAPA 1 · COMPLEJIDAD (BIG O)
tiempo · espacio · cómo contar · costes habituales

IDEA CLAVE
  Big O describe cómo CRECE el trabajo (tiempo) o la memoria extra (espacio) cuando la
  entrada n se hace grande. No mide segundos: mide la forma del crecimiento. En una
  entrevista siempre se pregunta: «¿cuál es la complejidad en tiempo y en espacio?».

ÍNDICE
  1. Cómo se calcula            5. Costes de operaciones comunes
  2. Las complejidades típicas  6. Trade-off tiempo ↔ espacio
  3. Ejemplos de código         7. Cómo responder en una entrevista
  4. Espacio extra              8. Patrones
*/

//! ── 1. Cómo se calcula ──
//   1) Cuenta cuántas veces se ejecuta lo más repetido en función de n.
//   2) Ignora constantes:           2n, 5n, n + 10   →  O(n)
//   3) Conserva solo el término mayor: n² + n         →  O(n²)
//   4) Bucles en SECUENCIA se suman (O(n) + O(n) = O(n));
//      bucles ANIDADOS se multiplican (O(n) × O(n) = O(n²)).
//   Normalmente se da el PEOR caso (p. ej. el elemento buscado está al final).

//! ── 2. Las complejidades típicas (de mejor a peor) ──
//   O(1)        constante      acceder arr[i], push, pop, set.has
//   O(log n)    logarítmica    búsqueda binaria (se descarta la mitad en cada paso)
//   O(n)        lineal         un recorrido: contar, sumar, buscar
//   O(n log n)  linearítmica   ordenar (sort)
//   O(n²)       cuadrática     dos bucles anidados sobre los datos
//   O(2ⁿ)       exponencial    probar todos los subconjuntos / fibonacci recursivo ingenuo
//   O(n!)       factorial      todas las permutaciones
//
//   n = 1 000 000 → O(n): 10⁶ operaciones (instantáneo) · O(n²): 10¹² (inviable)

//! ── 3. Ejemplos de código ──
{
    // O(1): el trabajo no depende del tamaño
    const primero = (arr) => arr[0]

    // O(n): un recorrido
    function suma(arr) {
        let t = 0
        for (const n of arr) t += n               // n vueltas
        return t
    }

    // O(n): dos recorridos seguidos = 2n → O(n)
    function sumaYMax(arr) {
        let t = 0
        for (const n of arr) t += n
        let m = arr[0]
        for (const n of arr) if (n > m) m = n
        return [t, m]
    }

    // O(n²): bucle dentro de bucle (todos los pares)
    function hayDuplicadoLento(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) return true
            }
        }
        return false
    }

    // O(n): lo mismo con un Set (cada has/add es O(1))
    function hayDuplicadoRapido(arr) {
        const vistos = new Set()
        for (const x of arr) {
            if (vistos.has(x)) return true
            vistos.add(x)
        }
        return false
    }

    // O(log n): el rango se reduce a la mitad en cada vuelta
    function pasosHastaUno(n) {
        let pasos = 0
        while (n > 1) {
            n = Math.floor(n / 2)
            pasos++
        }
        return pasos
    }

    console.log(primero([7, 8]), suma([1, 2, 3]), sumaYMax([1, 5, 2]))   // Resultado: 7 6 [ 8, 5 ]
    console.log(hayDuplicadoLento([1, 2, 1]), hayDuplicadoRapido([1, 2, 1]))   // Resultado: true true
    console.log(pasosHastaUno(1024))           // Resultado: 10   (log₂ 1024 = 10)
}

// Contar operaciones de verdad: duplicar n multiplica por 2 un O(n) y por 4 un O(n²).
{
    function vueltasLineal(n) { let v = 0; for (let i = 0; i < n; i++) v++; return v }
    function vueltasPares(n) {                       // j empieza en i + 1: n(n-1)/2 vueltas, sigue siendo O(n²)
        let v = 0
        for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) v++
        return v
    }
    console.log(vueltasLineal(10), vueltasLineal(20))   // Resultado: 10 20      (×2)
    console.log(vueltasPares(10), vueltasPares(20))     // Resultado: 45 190     (≈ ×4)
}

//! ── 4. Espacio extra ──
// Cuenta solo la memoria ADICIONAL que crea tu algoritmo, no la entrada.
//   Solo variables sueltas (contadores, índices) ........ O(1)
//   Un array/Set/Map/string que crece con n ................ O(n)
//   Una matriz n × n ....................................... O(n²)
//   Recursión: cada llamada pendiente ocupa pila ........... O(profundidad)
{
    const sumaO1 = (arr) => { let t = 0; for (const n of arr) t += n; return t }      // O(1) espacio
    const duplicar = (arr) => { const r = []; for (const n of arr) r.push(n * 2); return r }  // O(n) espacio
    console.log(sumaO1([1, 2]), duplicar([1, 2]))     // Resultado: 3 [ 2, 4 ]
}
// «In place» = modifica la entrada y usa O(1) de espacio extra (p. ej. invertir con dos índices).

//! ── 5. Costes de operaciones comunes ──
//   Arrays:   arr[i], push, pop, length ........................ O(1)
//             shift, unshift, splice, includes, indexOf ........ O(n)
//             slice, concat, spread, map, filter, reduce ....... O(n)
//             sort ............................................. O(n log n)
//   Strings:  s[i], length ..................................... O(1)
//             slice, includes, indexOf, split, replace ......... O(n)
//             s += c dentro de un bucle ........................ se analiza como O(n²) (cada += copia el
//                                                                texto); V8 suele optimizarlo, pero no lo des por hecho
//   Set/Map:  add, has, get, set, delete ....................... O(1) promedio
//   Objeto:   obj[k], obj[k] = v ............................... O(1) promedio
// Una llamada a un método O(n) DENTRO de un bucle O(n) da O(n²). Ejemplo típico:
//   for (const x of a) if (b.includes(x)) …     →  O(n·m)
//   con  const sb = new Set(b); … sb.has(x)      →  O(n + m)

//! ── 6. Trade-off tiempo ↔ espacio ──
// Muchas optimizaciones gastan memoria para ganar velocidad:
//   includes en bucle (O(n²) tiempo, O(1) espacio)  →  Set (O(n) tiempo, O(n) espacio)
// Menciónalo explícitamente en la entrevista: demuestra que entiendes el coste de la mejora.

//! ── 7. Cómo responder en una entrevista ──
//   1) Da primero una solución correcta (aunque sea fuerza bruta) y su Big O.
//   2) Identifica el cuello de botella (¿qué repite trabajo? ¿hay un bucle anidado?).
//   3) Propón una mejora (Set/Map, dos índices, ordenar primero…) y recalcula tiempo y espacio.
//   4) Di las dos complejidades: «O(n) en tiempo y O(n) en espacio por el Set».
//   5) Menciona casos límite: vacío, un elemento, repetidos, negativos.

//! ── 8. Patrones ──
//   Un bucle ......................... O(n)           Bucle dentro de bucle ........ O(n²)
//   Mitad en cada paso ............... O(log n)       Ordenar ...................... O(n log n)
//   Eliminar constantes y términos menores: 3n² + 5n + 2 → O(n²)
//   includes / indexOf / shift dentro de un bucle → sospecha de O(n²)
//   Cambiar un recorrido anidado por un Set/Map → de O(n²) a O(n)
