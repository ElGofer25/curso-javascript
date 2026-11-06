/*
ETAPA 1 · BIG O (COMPLEJIDAD)
Idea clave: Big O describe cómo CRECE el trabajo de un algoritmo cuando crece la
entrada (n). No mide segundos: mide cuántos pasos hace. Sirve para elegir entre dos
soluciones correctas y para explicar por qué una es mejor.

Cada solución tiene dos costos:
  - TIEMPO: ¿cuántos pasos da?
  - ESPACIO: ¿cuánta memoria EXTRA necesita (sin contar la entrada)?
*/

// ── 1. Las cuatro complejidades que usarás ──────────────────────────────────

// O(1) constante: los pasos NO dependen de n.
function primero(arr) {
    return arr[0]
}

// O(n) lineal: un recorrido completo; el doble de datos, el doble de pasos.
function contiene(arr, valor) {
    for (const x of arr) {
        if (x === valor) return true
    }
    return false
}

// O(n²) cuadrática: un bucle DENTRO de otro, ambos sobre n.
function hayDuplicado(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true
        }
    }
    return false
}

// O(log n) logarítmica: cada paso DESCARTA la mitad de los datos.
function veces(n) {
    let pasos = 0
    while (n > 1) {
        n = Math.floor(n / 2)
        pasos++
    }
    return pasos
}

// ── 2. Verlo con números ────────────────────────────────────────────────────

// Contamos cuántas comparaciones hace el peor caso de cada función.
function pasosLineal(n) {
    let pasos = 0
    for (let i = 0; i < n; i++) pasos++
    return pasos
}
function pasosCuadratico(n) {
    let pasos = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) pasos++
    }
    return pasos
}

for (const n of [10, 100, 1000]) {
    console.log(n, pasosLineal(n), pasosCuadratico(n), veces(n))
}
//   n     lineal  cuadrático  log
//   10      10        45        3
//   100    100      4950        6
//   1000  1000    499500        9
//
// Al multiplicar n por 10: el lineal ×10, el cuadrático ×100, el log solo +3.
// Por eso O(n²) se vuelve inviable con entradas grandes (LeetCode usa 10⁵ o más).

// ── 3. Cómo calcularlo, paso a paso ─────────────────────────────────────────

// Regla 1: un bucle sobre n → O(n).
// Regla 2: bucles anidados sobre n → se MULTIPLICAN → O(n²).
// Regla 3: bucles seguidos (uno después de otro) → se SUMAN → O(n + n) = O(n).
// Regla 4: se descartan las constantes: O(2n) → O(n).  O(3) → O(1).
// Regla 5: se descartan los términos menores: O(n² + n) → O(n²).
// Regla 6: se analiza el PEOR caso (que el valor buscado sea el último o no esté).

function ejemplo(arr) {
    let suma = 0
    for (const x of arr) suma += x          // O(n)
    for (const x of arr) suma += x * 2      // O(n)   → total O(n + n) = O(n)
    return suma
}

// ── 4. El mismo problema, dos costos ────────────────────────────────────────

// Sumar 1..n con un bucle: O(n) tiempo, O(1) espacio.
function sumaBucle(n) {
    let total = 0
    for (let i = 1; i <= n; i++) total += i
    return total
}
// Con la fórmula de Gauss: O(1) tiempo, O(1) espacio.
function sumaFormula(n) {
    return (n * (n + 1)) / 2
}
console.log(sumaBucle(100), sumaFormula(100))   // 5050 5050

// Espacio: invertir creando un array nuevo → O(n) espacio extra.
// Invertir intercambiando en el mismo array → O(1) espacio extra.

// ── 5. Costo de las operaciones de arrays y strings ─────────────────────────

//  arr[i], arr.length, arr.push(x), arr.pop() ...... O(1)
//  arr.shift(), arr.unshift(x) ..................... O(n) → mueve todos los elementos
//  arr.includes(x), arr.indexOf(x) ................. O(n) → recorre hasta hallarlo
//  arr.slice(), arr.concat(), [...arr] ............. O(n) → copia
//  arr.sort() ...................................... O(n log n)
//  str += c dentro de un bucle de n vueltas ........ puede acercarse a O(n²) en motores
//                                                    sin optimizar; en V8 suele ir bien.
//
// Cuidado: una línea de código NO es un paso. `arr.includes(x)` dentro de un
// bucle sobre n es O(n) × O(n) = O(n²), aunque no veas el segundo bucle.

function hayDuplicado2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) return true   // indexOf recorre: O(n) por vuelta
    }
    return false                                      // total: O(n²)
}

// ── 6. Cómo usarlo en un problema ───────────────────────────────────────────

// 1) Resuelve primero con la solución simple (suele ser O(n²)): funciona y la entiendes.
// 2) Calcula su complejidad con las reglas de arriba.
// 3) Pregunta: ¿qué trabajo repito? Si buscas lo mismo muchas veces, guarda la
//    información (sets, maps: Etapa 2) o recorre una sola vez con acumuladores.
//
// Ejemplo: hayDuplicado es O(n²). Con un Set baja a O(n) usando O(n) de espacio:
// se cambia ESPACIO por TIEMPO. Verás esa compensación una y otra vez.

console.log(primero([9]), contiene([1, 2], 2), hayDuplicado([1, 2, 1]), ejemplo([1, 2]), hayDuplicado2([1, 2]))
// 9 true true 9 false
