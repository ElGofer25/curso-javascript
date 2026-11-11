/*
ETAPA 1 · ACUMULADORES Y PATRONES DE RECORRIDO
contar · sumar · máximo/mínimo · banderas · construir resultado · último grupo

IDEA CLAVE
  Casi todo problema de la Etapa 1 es: recorrer una vez los datos mientras se actualiza
  una variable (acumulador) que, al terminar, contiene la respuesta. Lo difícil no es el
  bucle, sino decidir: ¿cuál es el valor INICIAL y cuándo se actualiza?

ÍNDICE
  1. Contar                       6. Dos acumuladores a la vez
  2. Sumar                        7. Agrupar consecutivos (y el último grupo)
  3. Máximo y mínimo              8. Recorrer comparando con el anterior
  4. Banderas (¿existe? ¿todos?)  9. Una pasada vs varias
  5. Construir un resultado      10. Casos límite
*/

//! ── 1. Contar ──
// Acumulador numérico que empieza en 0 y suma 1 cada vez que se cumple la condición.
{
    function contarMayores(arr, limite) {
        let cuenta = 0
        for (const n of arr) {
            if (n > limite) cuenta++
        }
        return cuenta
    }
    console.log(contarMayores([5, 12, 8, 20], 10), contarMayores([], 10))   // Resultado: 2 0
}

//! ── 2. Sumar ──
// Inicial: 0 (neutro de la suma). Para multiplicar, el neutro es 1.
{
    function suma(arr) {
        let total = 0
        for (const n of arr) total += n
        return total
    }
    function producto(arr) {
        let total = 1
        for (const n of arr) total *= n
        return total
    }
    console.log(suma([1, 2, 3]), suma([]), producto([2, 3, 4]), producto([]))   // Resultado: 6 0 24 1
}

//! ── 3. Máximo y mínimo ──
// El valor inicial NO es 0: con todos los números negativos, 0 ganaría sin estar en el array.
// Inicializa con el primer elemento (o con -Infinity) y compara desde ahí.
{
    function maximo(arr) {
        if (arr.length === 0) return undefined     // sin elementos no hay máximo: decide qué devolver
        let mayor = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > mayor) mayor = arr[i]
        }
        return mayor
    }
    console.log(maximo([3, 9, 4]), maximo([-5, -2, -9]), maximo([]))   // Resultado: 9 -2 undefined
}
// El mínimo es idéntico cambiando la comparación: if (arr[i] < menor) menor = arr[i]
// Si necesitas la POSICIÓN del máximo, guarda el índice y compara con arr[indice]:
{
    function posicionMaximo(arr) {
        let pos = 0
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[pos]) pos = i
        }
        return pos
    }
    console.log(posicionMaximo([3, 9, 4, 9]))      // Resultado: 1   (con > se queda la primera; con >= la última)
}
// Segundo mayor: dos acumuladores (mayor y segundo) en una sola pasada.
{
    function segundoMayor(arr) {
        let mayor = -Infinity
        let segundo = -Infinity
        for (const n of arr) {
            if (n > mayor) {
                segundo = mayor        // el mayor anterior baja al segundo lugar
                mayor = n
            } else if (n > segundo && n < mayor) {
                segundo = n            // distinto del mayor (ignora repetidos)
            }
        }
        return segundo === -Infinity ? null : segundo
    }
    console.log(segundoMayor([4, 9, 7, 9]), segundoMayor([5, 5]))   // Resultado: 7 null
}

//! ── 4. Banderas (¿existe? ¿todos?) ──
// Una bandera es un booleano que cambia UNA vez y no vuelve atrás.
// "¿Existe alguno?"  → empieza en false; al encontrar uno: true (y puedes parar).
// "¿Todos cumplen?"  → empieza en true; al encontrar uno que falla: false (y paras).
{
    function hayNegativo(arr) {
        for (const n of arr) {
            if (n < 0) return true         // return temprano reemplaza la bandera
        }
        return false
    }
    function todosPares(arr) {
        for (const n of arr) {
            if (n % 2 !== 0) return false
        }
        return true                        // un array vacío cumple "todos" (verdad vacía)
    }
    console.log(hayNegativo([1, -2]), hayNegativo([]), todosPares([2, 4]), todosPares([]))
    // Resultado: true false true true
}
// Trampa: devolver el «no» dentro del bucle. Solo se puede concluir «no existe» después
// de revisar TODOS los elementos.
{
    function hayNegativoMal(arr) {
        for (const n of arr) {
            if (n < 0) return true
            else return false          // ✘ decide con el PRIMER elemento y sale
        }
        return false
    }
    console.log(hayNegativoMal([1, -2]))   // Resultado: false   (debería ser true)
}

//! ── 5. Construir un resultado ──
// Texto: empieza en ''. Array: empieza en []. Añade en cada vuelta lo que corresponda.
{
    function soloPares(arr) {
        const resultado = []
        for (const n of arr) {
            if (n % 2 === 0) resultado.push(n)
        }
        return resultado
    }
    function mayusculasAlternas(texto) {
        let r = ''
        for (let i = 0; i < texto.length; i++) {
            r += i % 2 === 0 ? texto[i].toUpperCase() : texto[i]
        }
        return r
    }
    console.log(soloPares([1, 2, 3, 4]), mayusculasAlternas('hola'))   // Resultado: [ 2, 4 ] HoLa
}

//! ── 6. Dos acumuladores a la vez ──
{
    function contarParesEImpares(arr) {
        let pares = 0
        let impares = 0
        for (const n of arr) {
            if (n % 2 === 0) pares++
            else impares++
        }
        return { pares, impares }
    }
    console.log(contarParesEImpares([1, 2, 3, 5])) // Resultado: { pares: 1, impares: 3 }
}

//! ── 7. Agrupar consecutivos (y el último grupo) ──
// Ejemplo: comprimir 'aaabcc' → 'a3b1c2'. Mantén el carácter actual y su cuenta; cuando
// cambia, cierra el grupo anterior. Al terminar el bucle queda UN GRUPO SIN CERRAR:
// hay que añadirlo después. Es el olvido más frecuente de este patrón.
{
    function comprimir(texto) {
        if (texto === '') return ''
        let resultado = ''
        let actual = texto[0]
        let cuenta = 1
        for (let i = 1; i < texto.length; i++) {
            if (texto[i] === actual) {
                cuenta++
            } else {
                resultado += actual + cuenta     // cierra el grupo anterior
                actual = texto[i]
                cuenta = 1
            }
        }
        resultado += actual + cuenta             // ← el último grupo
        return resultado
    }
    console.log(comprimir('aaabcc'), comprimir('x'), JSON.stringify(comprimir('')))
    // Resultado: a3b1c2 x1 ""
}

//! ── 8. Recorrer comparando con el anterior ──
// Empieza en i = 1 para que arr[i - 1] exista. Útil para "creciente", "cambios", "rachas".
{
    function esCreciente(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= arr[i - 1]) return false
        }
        return true
    }
    function rachaMasLarga(arr) {                 // longitud de la racha más larga de iguales
        if (arr.length === 0) return 0
        let mejor = 1
        let actual = 1
        for (let i = 1; i < arr.length; i++) {
            actual = arr[i] === arr[i - 1] ? actual + 1 : 1
            if (actual > mejor) mejor = actual
        }
        return mejor
    }
    console.log(esCreciente([1, 2, 3]), esCreciente([1, 1]), esCreciente([]))   // Resultado: true false true
    console.log(rachaMasLarga([1, 1, 2, 2, 2, 3]), rachaMasLarga([]))          // Resultado: 3 0
}

//! ── 9. Una pasada vs varias ──
// Dos recorridos seguidos siguen siendo O(n) (2n se simplifica a n). Un recorrido dentro
// de otro es O(n²). Intenta resolver con un solo recorrido y acumuladores antes de
// recurrir a bucles anidados; ver 11-big-o.js.

//! ── 10. Casos límite (revísalos siempre) ──
//   arreglo o texto vacío ......... ¿qué devuelve tu función? (0, '', null, [])
//   un solo elemento .............. ¿funciona el recorrido que empieza en i = 1?
//   todos iguales / repetidos ..... ¿se cuenta o se ignora el repetido?
//   negativos ..................... ¿tu máximo/mínimo inicial lo soporta?
//   último elemento / último grupo  ¿lo procesas después del bucle?
//   límites exactos ............... >= vs >, < vs <=
//   no mutar la entrada ........... si la función no debe cambiarla, no la toques

// Patrones resumidos:
//   contar → let n = 0; n++          sumar → let t = 0; t += x       multiplicar → let p = 1
//   máximo → let m = arr[0]; if (x > m) m = x     (nunca inicializar en 0)
//   existe → return true dentro del bucle; return false al final
//   todos  → return false dentro del bucle; return true al final
//   texto/array de salida → '' o [] + concatenar / push
//   grupos consecutivos → cerrar el grupo al cambiar Y después del bucle
