/*
ETAPA 1 · CONDICIONALES
if / else if / else · switch · ternario · guard clauses · reglas múltiples

IDEA CLAVE
  Un condicional elige qué código ejecutar. En problemas con varias reglas, el ORDEN de
  las condiciones decide el resultado: se evalúan de arriba abajo y gana la primera
  que se cumple.

ÍNDICE
  1. if / else if / else        4. Guard clauses (salidas tempranas)
  2. Orden de las condiciones   5. Reglas múltiples y bordes
  3. switch                     6. Patrones
*/

//! ── 1. if / else if / else ──
{
    const nota = 75
    let letra
    if (nota >= 90) {
        letra = 'A'
    } else if (nota >= 70) {
        letra = 'B'
    } else {
        letra = 'C'
    }
    console.log(letra)                 // Resultado: B
}
// Solo se ejecuta UNA rama: la primera cuya condición sea truthy. `else` es opcional.

//! ── 2. Orden de las condiciones ──
// Las condiciones más específicas (o más restrictivas) van primero.
{
    function clasificar(n) {
        if (n > 0) return 'positivo'
        if (n > 100) return 'grande'   // NUNCA se alcanza: todo n > 100 ya fue n > 0
        return 'otro'
    }
    console.log(clasificar(500))       // Resultado: positivo   (se esperaba 'grande')
}
// Correcto: preguntar primero n > 100.
{
    function clasificar(n) {
        if (n > 100) return 'grande'
        if (n > 0) return 'positivo'
        return 'otro'
    }
    console.log(clasificar(500))       // Resultado: grande
}

// Combinar condiciones con && y ||; escribe rangos con dos comparaciones:
{
    const x = 15
    console.log(x >= 10 && x <= 20)    // Resultado: true   (en JS NO existe 10 <= x <= 20)
    console.log(x < 10 || x > 20)      // Resultado: false  (fuera de rango)
}

//! ── 3. switch ──
// Compara UN valor contra varios casos con === . Útil cuando son valores exactos
// (no rangos). Sin `break`, la ejecución CAE al siguiente caso (fallthrough).
{
    function nombreDia(n) {
        switch (n) {
            case 1:
                return 'lunes'
            case 6:
            case 7:                    // varios casos comparten código
                return 'fin de semana'
            default:
                return 'otro día'
        }
    }
    console.log(nombreDia(1), nombreDia(7), nombreDia(3))   // Resultado: lunes fin de semana otro día
}
{
    let r = ''
    switch (1) {
        case 1: r += 'a'               // sin break…
        case 2: r += 'b'               // …sigue aquí
        case 3: r += 'c'; break
        default: r += 'd'
    }
    console.log(r)                     // Resultado: abc
}
// Nota: con rangos (nota >= 90) usa if/else if; switch solo sirve para igualdad.

//! ── 4. Guard clauses ──
// Resolver primero los casos inválidos o especiales y devolver (return) enseguida.
// El resto de la función queda sin anidar y se lee mejor.
{
    function promedio(arr) {
        if (arr.length === 0) return 0          // caso especial primero
        let suma = 0
        for (const n of arr) suma += n
        return suma / arr.length
    }
    console.log(promedio([]), promedio([2, 4]))  // Resultado: 0 3
}
// Un if/else con returns en ambas ramas casi siempre se simplifica:
//   if (c) { return true } else { return false }   →   return c

//! ── 5. Reglas múltiples y bordes ──
// Con varias reglas: (1) escribe una tabla de casos, (2) ordena de más específica a
// más general, (3) prueba SIEMPRE los valores exactos de cada límite.
{
    // Año bisiesto: múltiplo de 4, salvo múltiplo de 100, salvo múltiplo de 400.
    function esBisiesto(y) {
        if (y % 400 === 0) return true
        if (y % 100 === 0) return false
        return y % 4 === 0
    }
    console.log(esBisiesto(2000), esBisiesto(1900), esBisiesto(2024), esBisiesto(2023))
    // Resultado: true false true false
}
{
    // Bordes: 18 es adulto (>=), 17 no.
    const clasificarEdad = (e) => (e >= 65 ? 'mayor' : e >= 18 ? 'adulto' : 'menor')
    console.log(clasificarEdad(65), clasificarEdad(18), clasificarEdad(17))   // Resultado: mayor adulto menor
}

//! ── 6. Patrones ──
//   Casos inválidos/vacíos primero (guard clause) y return
//   Condición más específica antes que la general
//   Rango: x >= a && x <= b   (nunca a <= x <= b)
//   Igualdad con muchos valores exactos → switch; rangos → if / else if
//   Probar cada borde: justo debajo, exacto y justo encima del límite
//   Evita `if (x == true)`; escribe `if (x)`
