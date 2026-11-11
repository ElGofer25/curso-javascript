/*
ETAPA 1 · OPERADORES
aritméticos · comparación · lógicos · ?? · ?. · ternario · incremento

IDEA CLAVE
  Los operadores combinan valores en expresiones. Los que más se usan en algoritmos:
  % (residuo), Math.floor (división entera), && / || (cortocircuito) y el ternario.

ÍNDICE
  1. Aritméticos              5. Asignación compuesta e incremento
  2. División entera y %      6. ?? y ?.
  3. Comparación              7. Ternario
  4. Lógicos y cortocircuito  8. Patrones
*/

//! ── 1. Aritméticos ──
{
    console.log(7 + 2, 7 - 2, 7 * 2)   // Resultado: 9 5 14
    console.log(7 / 2)                 // Resultado: 3.5   (la división NO es entera)
    console.log(7 % 2)                 // Resultado: 1     (residuo)
    console.log(2 ** 10)               // Resultado: 1024  (potencia)
    console.log(1 / 0, -1 / 0)         // Resultado: Infinity -Infinity
    console.log(0 / 0)                 // Resultado: NaN
}

//! ── 2. División entera y % ──
{
    console.log(Math.floor(7 / 2))     // Resultado: 3   (hacia abajo)
    console.log(Math.trunc(-7 / 2))    // Resultado: -3  (quita decimales)
    console.log(Math.floor(-7 / 2))    // Resultado: -4  (floor y trunc difieren con negativos)
    console.log(-7 % 3)                // Resultado: -1  (el residuo toma el signo del dividendo)
}
// Usos de %:
//   ¿par?           n % 2 === 0
//   dígito final    n % 10          (1234 % 10 → 4)
//   quitar último   Math.floor(n / 10)   (1234 → 123)
//   circular        i % length      (da la vuelta al llegar al final)
{
    let n = 1234
    let suma = 0
    while (n > 0) {
        suma += n % 10
        n = Math.floor(n / 10)
    }
    console.log(suma)                  // Resultado: 10   (1 + 2 + 3 + 4)
}

//! ── 3. Comparación ──
{
    console.log(3 > 2, 3 >= 3, 3 < 2, 3 !== 4)   // Resultado: true true false true
    console.log('a' < 'b')                       // Resultado: true   (orden de caracteres)
    console.log('10' < '9')                      // Resultado: true   (strings: compara carácter a carácter)
    console.log(10 < 9)                          // Resultado: false
}
// Nota: para comparar igualdad usa === (ver 01-variables-tipos.js).

//! ── 4. Lógicos y cortocircuito ──
//   &&  y      || o      ! no
// Devuelven uno de los OPERANDOS, no necesariamente true/false:
//   a && b  → si a es falsy devuelve a; si no, devuelve b
//   a || b  → si a es truthy devuelve a; si no, devuelve b
// Y se evalúa de izquierda a derecha, deteniéndose en cuanto el resultado está claro.
{
    console.log(0 && 'x')              // Resultado: 0
    console.log(1 && 'x')              // Resultado: x
    console.log('' || 'por defecto')   // Resultado: por defecto
    console.log('hola' || 'otro')      // Resultado: hola
    console.log(!0, !'a')              // Resultado: true false
}
// Uso típico: proteger un acceso. La segunda parte no se evalúa si la primera falla.
{
    const arr = []
    console.log(arr.length > 0 && arr[0] > 5)    // Resultado: false   (arr[0] ni se mira)
}
// Precedencia: ! primero, luego &&, luego ||. Usa paréntesis cuando mezcles:
//   a || b && c   equivale a   a || (b && c)

//! ── 5. Asignación compuesta e incremento ──
{
    let x = 10
    x += 5     // x = x + 5   → 15
    x -= 3     // → 12
    x *= 2     // → 24
    x /= 4     // → 6
    x %= 4     // → 2
    console.log(x)                     // Resultado: 2

    let i = 0
    console.log(i++)                   // Resultado: 0   (post: devuelve y LUEGO suma)
    console.log(i)                     // Resultado: 1
    console.log(++i)                   // Resultado: 2   (pre: suma y LUEGO devuelve)
}
// Nota: en un for o como instrucción suelta, i++ e ++i hacen lo mismo. La diferencia
// solo importa si usas el valor dentro de otra expresión (arr[i++]): evítalo.

//! ── 6. ?? y ?. ──
//   a ?? b   → b solo si a es null o undefined (no si es 0, '' o false)
//   a || b   → b si a es CUALQUIER falsy
//   obj?.x   → undefined en vez de error si obj es null/undefined
{
    const cantidad = 0
    console.log(cantidad || 10)        // Resultado: 10   (0 es falsy → se pierde un valor válido)
    console.log(cantidad ?? 10)        // Resultado: 0
    const usuario = null
    console.log(usuario?.nombre)       // Resultado: undefined
    // console.log(usuario.nombre)     // TypeError: Cannot read properties of null
    const arr = [1, 2]
    console.log(arr[5]?.toFixed(1))    // Resultado: undefined
}

//! ── 7. Ternario ──
//   condición ? valorSiTrue : valorSiFalse     (es una EXPRESIÓN: produce un valor)
{
    const edad = 20
    const tipo = edad >= 18 ? 'adulto' : 'menor'
    console.log(tipo)                  // Resultado: adulto

    const n = 0
    console.log(n > 0 ? 'positivo' : n < 0 ? 'negativo' : 'cero')   // Resultado: cero
}
// Nota: encadenar más de dos ternarios es difícil de leer; usa if/else.

//! ── 8. Patrones ──
//   ¿par/impar?                 n % 2 === 0
//   recorrido circular          indice = (indice + 1) % length
//   último dígito / quitarlo    n % 10  /  Math.floor(n / 10)
//   valor por defecto           x ?? valor   (o x || valor si '' / 0 también deben reemplazarse)
//   acceso seguro               a && a.b   ·   a?.b
//   dos condiciones a la vez    (a && b) || c   — con paréntesis
