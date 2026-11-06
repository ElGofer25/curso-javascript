/*
REPASO 01 — ETAPA 1: ARRAYS, STRINGS, ÍNDICES, BUCLES Y CONDICIONALES
Teoría de apoyo (01.Bases): 06-strings · 08-conditionals · 10-array · 14-loops ·
32-accumulators · 33-big-o

ORGANIZACIÓN
  Ejercicios 01–06 .... arrays e índices
  Ejercicios 07–12 .... strings y recorridos
  Ejercicios 13–16 .... condicionales y reglas múltiples
  Ejercicios 17–20 .... integración estilo LeetCode (acumuladores, borde, dos índices)

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee el ejercicio completo, incluidos los CASOS LÍMITE, antes de escribir código.
  2. Escribe tu función en el espacio «TU SOLUCIÓN» de ese ejercicio.
  3. Antes de ejecutar, predice a mano el resultado de los ejemplos (tabla de seguimiento).
  4. Ejecuta:   node Repaso01.js
     Al final verás una línea por ejercicio:
        ✔  la función pasa todas las pruebas
        ✘  falla: muestra lo que obtuviste y lo que se esperaba
        …  pendiente: aún no declaras la función
  5. Si falla, NO cambies código al azar: haz la tabla de seguimiento con el caso que falló.
  6. Responde EXPLICA (y COMPLEJIDAD, cuando aparezca) en un comentario bajo tu solución.

REGLAS GENERALES
  - Las funciones DEVUELVEN el resultado; no lo imprimen.
  - No modifiques los argumentos recibidos, salvo que el ejercicio lo pida (las pruebas lo verifican).
  - Prohibido en todo el archivo, salvo que el ejercicio lo permita: map, filter, reduce,
    forEach, find, some, every, sort, reverse, Math.max, Math.min, expresiones regulares,
    Set y Map. El objetivo es dominar bucles, índices y condiciones.
  - Siempre permitido: variables, if/else, switch, for, while, for...of, .length, .push(),
    .includes() y los métodos de string que se indiquen.
  - No hay soluciones incluidas. Las pruebas automáticas están al final: no las edites.
*/

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE A — ARRAYS E ÍNDICES
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 01 — Extremos de un arreglo
/*
SITUACIÓN
  Quieres conocer el primer y el último dato de una lista de lecturas.

QUÉ DEBES HACER
  1. Declara la función extremos(arr).
  2. Si el arreglo está vacío, devuelve un arreglo vacío [].
  3. Devuelve un arreglo NUEVO con dos elementos: el primero y el último de arr.
     (¿Cuál es el índice del último? Piensa en length.)
  4. Con un solo elemento, el primero y el último son el mismo: [7] → [7, 7].
  5. No modifiques arr. Prohibido: .at(), .pop(), .shift().

EJEMPLOS
  extremos([4, 8, 15])  → [4, 15]
  extremos([7])         → [7, 7]
  extremos([])          → []

EXPLICA
  ¿Qué devuelve arr[arr.length] y por qué?
*/
// TU SOLUCIÓN
{
  function extremos(arr) {
    const newArray = [];

    if (arr.length === 0) {
      return [];
    }

    newArray.push(arr[0]);
    newArray.push(arr[arr.length - 1]);

    return newArray;
  }

}

// EJERCICIO 02 — Contar los que superan un límite
/*
SITUACIÓN
  Tienes las temperaturas de la semana y quieres saber cuántos días superaron un umbral.

QUÉ DEBES HACER
  1. Declara la función contarMayores(arr, limite).
  2. Crea un contador que empiece en 0.
  3. Recorre el arreglo. Por cada elemento ESTRICTAMENTE mayor que limite, suma 1.
  4. Devuelve el contador.

CASOS LÍMITE
  - Arreglo vacío → 0.
  - Un elemento igual al límite NO cuenta.
  - Hay números negativos.

EJEMPLOS
  contarMayores([1, 5, 10, 15], 5)  → 2
  contarMayores([2, 2, 2], 2)       → 0
  contarMayores([-1, -5], -3)       → 1

EXPLICA
  ¿Por qué el contador se declara fuera del bucle?
  Por que el contador cambia en función del resultado de cada iteración, no en cada iteración.
*/
// TU SOLUCIÓN
{
  function contarMayores(arr, limite) {
    let contador = 0

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > limite) {
        contador += 1
      }
    }

    return contador
  }

}

// EJERCICIO 03 — El mayor sin Math.max
/*
SITUACIÓN
  Debes encontrar el valor más alto de una lista sin usar las utilidades del lenguaje.

QUÉ DEBES HACER
  1. Declara la función maximo(arr).
  2. Si el arreglo está vacío, devuelve undefined.
  3. Guarda en una variable «mayor» el PRIMER elemento (arr[0]).
  4. Recorre el resto (desde el índice 1). Si un elemento supera a «mayor», actualízalo.
  5. Devuelve «mayor».
  Prohibido: Math.max, sort.

CASOS LÍMITE
  - Todos los números son negativos.
  - Un solo elemento.
  - El máximo está repetido.

EJEMPLOS
  maximo([3, 9, 2])        → 9
  maximo([-5, -2, -9])     → -2
  maximo([4])              → 4
  maximo([])               → undefined

EXPLICA
  ¿Qué resultado daría tu función con [-5, -2, -9] si «mayor» empezara en 0?
  Daría el mismo cero, porque, al ser valores negativos no alcancirían el 'umbral' de la condición
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
  On para ambos casos, es lineal porque no ejecuta un doble bucle ni requiere escalar el espacio en memoria
*/
// TU SOLUCIÓN
{
  function maximo(arr){
    let resultado = arr[0];

    if(arr.length === 0){
      return undefined
    }

    for(let i=0; i<arr.length; i++){
    if(resultado < arr[i]){
      resultado = arr[i]
    }
   }
   return resultado
  }
}


// EJERCICIO 04 — Invertir sin reverse
/*
SITUACIÓN
  Necesitas una copia de una lista, pero en orden contrario, sin alterar la original.

QUÉ DEBES HACER
  1. Declara la función invertirArreglo(arr).
  2. Crea un arreglo vacío «resultado».
  3. Recorre arr DE DERECHA A IZQUIERDA (del último índice al 0) y agrega cada elemento
     a «resultado» con push.
  4. Devuelve «resultado». arr debe quedar intacto.
  Prohibido: reverse, slice, concat, spread.

EJEMPLOS
  invertirArreglo([1, 2, 3])  → [3, 2, 1]
  invertirArreglo(['a'])      → ['a']
  invertirArreglo([])         → []

EXPLICA
  ¿Cuál debe ser la condición del for para que el índice 0 SÍ se procese?
  Es la siguiente: (let i = arr.length - 1; i >= 0; i--) 
  Basicamente empezamos al revés, antes especificabamos que el bucle debia de cumplirse mientras i < arr.length; ahora es al revés, debemos de especificar que el bucle se cumpla mientras i sea mayor que sero y que se detenga en 0, por eso i <= 0; ese menor o igual a cero es el que abarca el indice 0
*/
// TU SOLUCIÓN

{
  function invertirArreglo(arr) {
    let resultado = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      resultado.push(arr[i])
    }

    return resultado
  }
}


// EJERCICIO 05 — Intercambiar dos posiciones
/*
SITUACIÓN
  Intercambiar dos elementos de sitio es la base de ordenar, invertir y mover ceros.

QUÉ DEBES HACER
  1. Declara la función intercambiar(arr, i, j).
  2. Si i o j no son índices válidos del arreglo (enteros entre 0 y length - 1),
     NO hagas nada.
  3. Si son válidos, intercambia los elementos de las posiciones i y j. Usa una variable
     temporal o la asignación por desestructuración.
  4. Esta vez SÍ debes modificar arr, y devolver ese MISMO arreglo (no una copia).

CASOS LÍMITE
  - i y j iguales.
  - Un índice negativo o igual a length.

EJEMPLOS
  const a = [1, 2, 3, 4]
  intercambiar(a, 0, 3)   → devuelve a, que ahora es [4, 2, 3, 1]
  intercambiar([1, 2], 0, 5)   → [1, 2]
  intercambiar([1, 2], -1, 0)  → [1, 2]

EXPLICA
  ¿Qué pasa si intentas intercambiar sin variable temporal usando solo dos asignaciones
  (arr[i] = arr[j]; arr[j] = arr[i])? Chocan los valores, la variable temporal nos permite 'retener' el valor por un instante en cada iteración y así poder verificar si cumple o no, si no la tuvieramos no podriamos guardar el valor para compararlo
*/
// TU SOLUCIÓN
{
  function intercambiar(arr, i, j){

    for(let a = 0; a < arr.length; a++){
      let b;
      if(a === i){
        b = a
      }
      for(let c = a +1; c < arr.length; c++ ){
        if(c === j){
          arr[a] = c; arr[c] = b
        }
      }
    }

    return arr
  }

}


// EJERCICIO 06 — Rotar a la izquierda
/*
SITUACIÓN
  Una cola de turnos avanza k lugares: los primeros k elementos pasan al final.

QUÉ DEBES HACER
  1. Declara la función rotarIzquierda(arr, k).
  2. Si arr está vacío, devuelve [].
  3. Crea un arreglo NUEVO «resultado». Para cada posición i de 0 a length - 1, el elemento
     que va en esa posición es el que estaba en la posición (i + k) % arr.length.
     Agrégalo a «resultado».
  4. Devuelve «resultado». No modifiques arr.
  Prohibido: slice, splice, concat, spread, shift, unshift.

CASOS LÍMITE
  - k = 0 → misma lista (en un arreglo nuevo).
  - k mayor o igual que length: dar una vuelta completa no cambia nada.

EJEMPLOS
  rotarIzquierda([1, 2, 3, 4, 5], 2)  → [3, 4, 5, 1, 2]
  rotarIzquierda([1, 2, 3, 4, 5], 7)  → [3, 4, 5, 1, 2]
  rotarIzquierda([1, 2, 3], 0)        → [1, 2, 3]
  rotarIzquierda([], 3)               → []

EXPLICA
  ¿Qué papel cumple el operador % en el paso 3? Prueba (i + k) sin % con k = 7.
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN
{



}

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE B — STRINGS Y RECORRIDOS
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 07 — Contar vocales
/*
SITUACIÓN
  Un corrector cuenta cuántas vocales tiene una palabra o frase.

QUÉ DEBES HACER
  1. Declara la función contarVocales(texto).
  2. Cuenta las letras a, e, i, o, u, tanto mayúsculas como minúsculas.
     (Sin acentos: á, é, etc. NO se cuentan.)
  3. Pasa el texto a minúsculas una sola vez, recorre cada carácter y suma 1 al contador
     cuando sea una vocal. Puedes apoyarte en "aeiou".includes(c).
  4. Devuelve el contador.

EJEMPLOS
  contarVocales('Hola Mundo')    → 4
  contarVocales('rhythm')        → 0
  contarVocales('AEIOUaeiou')    → 10
  contarVocales('')              → 0

EXPLICA
  ¿Por qué conviene normalizar con toLowerCase() en lugar de comparar con diez letras?
*/
// TU SOLUCIÓN


// EJERCICIO 08 — Capitalizar cada palabra
/*
SITUACIÓN
  Quieres mostrar nombres propios con la primera letra de cada palabra en mayúscula.

QUÉ DEBES HACER
  1. Declara la función capitalizar(frase).
  2. Las palabras están separadas por UN solo espacio. Sepáralas con split(' ').
  3. Para cada palabra: primera letra en mayúscula + el resto en minúscula.
     (Pista: palabra[0] y palabra.slice(1).)
  4. Une las palabras con join(' ') y devuelve el resultado.
  Prohibido: expresiones regulares, replace.

CASOS LÍMITE
  - Texto vacío: ''.split(' ') devuelve [''] (una palabra vacía). Tu función no debe
    fallar y debe devolver ''.
  - Letras mezcladas: 'jAVAsCRIPT' → 'Javascript'.

EJEMPLOS
  capitalizar('hola mundo')   → 'Hola Mundo'
  capitalizar('jAVAsCRIPT')   → 'Javascript'
  capitalizar('a')            → 'A'
  capitalizar('')             → ''

EXPLICA
  ¿Qué error ocurre si aplicas toUpperCase() sobre ''[0]? ¿Cómo lo evitaste?
*/
// TU SOLUCIÓN


// EJERCICIO 09 — Palíndromo con dos extremos
/*
SITUACIÓN
  Un texto es palíndromo si se lee igual al derecho y al revés, ignorando mayúsculas y
  todo lo que no sea letra o dígito (espacios, comas, signos).

QUÉ DEBES HACER
  1. Declara una función auxiliar esAlfanumerico(c) que devuelva true si el carácter c es
     una letra minúscula (a–z), mayúscula (A–Z) o dígito (0–9). Usa comparaciones de rango,
     como c >= 'a' && c <= 'z'.
  2. Declara la función esPalindromo(texto).
  3. Crea dos índices: izquierda = 0 y derecha = texto.length - 1.
  4. Mientras izquierda < derecha:
     a) si texto[izquierda] no es alfanumérico, avanza izquierda y vuelve a empezar;
     b) si texto[derecha] no es alfanumérico, retrocede derecha y vuelve a empezar;
     c) compara ambos en minúscula: si son distintos, devuelve false;
     d) si son iguales, mueve ambos índices hacia el centro.
  5. Si el bucle termina sin diferencias, devuelve true.
  Prohibido: reverse, expresiones regulares, crear un texto limpio nuevo.

CASOS LÍMITE
  - Texto vacío o solo signos: cuenta como palíndromo (true).
  - '0P': el '0' y la 'P' son alfanuméricos y distintos → false.

EJEMPLOS
  esPalindromo('A man, a plan, a canal: Panama')  → true
  esPalindromo('race a car')                      → false
  esPalindromo('')                                → true
  esPalindromo('.,')                              → true
  esPalindromo('0P')                              → false

EXPLICA
  ¿Por qué el paso 4 usa «avanza y vuelve a empezar» en vez de comparar directamente?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN


// EJERCICIO 10 — Comprimir repeticiones
/*
SITUACIÓN
  Un texto con letras repetidas se guarda de forma compacta: cada letra va seguida de
  cuántas veces se repite seguida.

QUÉ DEBES HACER
  1. Declara la función comprimir(texto).
  2. Si el texto está vacío, devuelve ''.
  3. Usa tres variables: «resultado» (texto acumulador), «actual» (la letra del grupo en
     curso, empieza en texto[0]) y «cuenta» (cuántas van, empieza en 1).
  4. Recorre desde el índice 1. Si el carácter es igual a «actual», suma 1 a «cuenta».
     Si es distinto: agrega actual + cuenta a «resultado», y reinicia «actual» y «cuenta».
  5. Al terminar el bucle queda UN GRUPO SIN AGREGAR: añádelo antes de devolver.

EJEMPLOS
  comprimir('aaabccdd')  → 'a3b1c2d2'
  comprimir('abc')       → 'a1b1c1'
  comprimir('zzzz')      → 'z4'
  comprimir('aabaa')     → 'a2b1a2'
  comprimir('')          → ''

EXPLICA
  ¿Por qué hay que agregar el último grupo fuera del bucle? ¿Qué pasaría si no se hiciera?
*/
// TU SOLUCIÓN


// EJERCICIO 11 — Longitud de la última palabra
/*
SITUACIÓN
  Dado un texto que puede tener espacios al final, quieres saber cuántas letras tiene la
  ÚLTIMA palabra.

QUÉ DEBES HACER
  1. Declara la función longitudUltimaPalabra(texto).
  2. Empieza en el último índice del texto y avanza hacia la izquierda.
  3. Primero salta todos los espacios del final.
  4. Luego cuenta cuántos caracteres seguidos NO son espacio; detente al llegar a un espacio
     o al inicio del texto.
  5. Devuelve esa cuenta. Si el texto está vacío o solo tiene espacios, devuelve 0.
  Prohibido: trim, split, lastIndexOf.

EJEMPLOS
  longitudUltimaPalabra('Hello World')                → 5
  longitudUltimaPalabra('   fly me   to   the moon  ') → 4
  longitudUltimaPalabra('a ')                         → 1
  longitudUltimaPalabra('   ')                        → 0
  longitudUltimaPalabra('')                           → 0

EXPLICA
  ¿Por qué recorrer de derecha a izquierda es más directo que de izquierda a derecha?
*/
// TU SOLUCIÓN


// EJERCICIO 12 — Subsecuencia
/*
SITUACIÓN
  Un texto «corta» es subsecuencia de otro «larga» si sus letras aparecen en larga en el
  mismo orden, aunque no estén juntas. 'ace' lo es de 'abcde'; 'aec' no.

QUÉ DEBES HACER
  1. Declara la función esSubsecuencia(corta, larga).
  2. Usa un índice «p» sobre corta, que empieza en 0: indica cuál letra de corta buscas.
  3. Recorre larga UNA sola vez. Si el carácter actual de larga es igual a corta[p], avanza p.
  4. Al terminar, corta es subsecuencia si p llegó a corta.length (encontraste todas).

CASOS LÍMITE
  - corta vacía → true (no hay nada que buscar).
  - larga vacía y corta no vacía → false.

EJEMPLOS
  esSubsecuencia('ace', 'abcde')  → true
  esSubsecuencia('aec', 'abcde')  → false
  esSubsecuencia('', 'abc')       → true
  esSubsecuencia('a', '')         → false
  esSubsecuencia('abc', 'abc')    → true

EXPLICA
  ¿Por qué este problema se resuelve con UN recorrido y no con dos bucles anidados?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN


// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE C — CONDICIONALES Y REGLAS MÚLTIPLES
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 13 — Clasificar un triángulo
/*
SITUACIÓN
  Dados tres lados, decide qué tipo de triángulo forman, o si no forman uno.

QUÉ DEBES HACER
  1. Declara la función clasificarTriangulo(a, b, c).
  2. Devuelve 'invalido' si se cumple CUALQUIERA de estas:
     - algún lado es menor o igual que 0;
     - la suma de dos lados es menor o igual que el tercero (para cualquiera de las tres
       combinaciones: a + b <= c, a + c <= b, b + c <= a).
  3. Si es válido: 'equilatero' si los tres son iguales; 'isosceles' si exactamente dos
     son iguales; 'escaleno' si los tres son distintos.
  4. El ORDEN importa: comprueba primero lo inválido; después los iguales.
  Prohibido: sort.

EJEMPLOS
  clasificarTriangulo(3, 3, 3)   → 'equilatero'
  clasificarTriangulo(3, 3, 2)   → 'isosceles'
  clasificarTriangulo(3, 4, 5)   → 'escaleno'
  clasificarTriangulo(1, 2, 3)   → 'invalido'   (1 + 2 no supera a 3)
  clasificarTriangulo(2, 2, 4)   → 'invalido'
  clasificarTriangulo(0, 1, 1)   → 'invalido'
  clasificarTriangulo(5, 5, 8)   → 'isosceles'

EXPLICA
  ¿Qué resultado errado obtendrías con (2, 2, 4) si comprobaras «isosceles» antes que lo
  inválido?
*/
// TU SOLUCIÓN


// EJERCICIO 14 — Días de un mes
/*
SITUACIÓN
  Un calendario necesita saber cuántos días tiene un mes de un año dado.

QUÉ DEBES HACER
  1. Declara la función diasDelMes(mes, anio). Mes va de 1 (enero) a 12 (diciembre).
  2. Si mes no es un entero entre 1 y 12, devuelve -1. (Number.isInteger(mes) te ayuda.)
  3. Declara una función auxiliar esBisiesto(anio): un año es bisiesto si es divisible entre 4
     Y (no es divisible entre 100 O es divisible entre 400).
  4. Usa un switch sobre mes:
     - 4, 6, 9, 11 → 30 días (agrúpalos);
     - 2 → 29 si el año es bisiesto, 28 si no;
     - cualquier otro → 31.

EJEMPLOS
  diasDelMes(1, 2023)    → 31
  diasDelMes(4, 2023)    → 30
  diasDelMes(2, 2023)    → 28
  diasDelMes(2, 2024)    → 29
  diasDelMes(2, 1900)    → 28    (divisible entre 100 pero no entre 400)
  diasDelMes(2, 2000)    → 29    (divisible entre 400)
  diasDelMes(13, 2024)   → -1
  diasDelMes(1.5, 2024)  → -1

EXPLICA
  ¿Por qué 1900 no es bisiesto aunque sea divisible entre 4?
*/
// TU SOLUCIÓN


// EJERCICIO 15 — Precio de un boleto
/*
SITUACIÓN
  Un cine calcula el precio de un boleto según edad, si la persona es estudiante y el día.

QUÉ DEBES HACER
  1. Declara la función precioBoleto(edad, esEstudiante, dia). «dia» es un texto en
     minúsculas, por ejemplo 'lunes' o 'miercoles'.
  2. Aplica las reglas EN ESTE ORDEN:
     a) edad menor que 0 → devuelve -1 (dato inválido);
     b) edad menor que 5 → devuelve 0 (gratis);
     c) precio base: edad de 12 o menos → 50; de 13 a 64 → 100; de 65 o más → 60;
     d) descuentos, expresados como porcentaje entero:
        · si dia es 'miercoles' → 50% para todos;
        · si esEstudiante es true Y la edad está entre 13 y 64 → 20%;
        · si se cumplen ambos, se aplica SOLO el mayor (no se suman).
     e) devuelve base - base * descuento / 100.

EJEMPLOS
  precioBoleto(-1, false, 'lunes')      → -1
  precioBoleto(4, false, 'miercoles')   → 0
  precioBoleto(12, false, 'lunes')      → 50
  precioBoleto(10, true, 'lunes')       → 50    (estudiante, pero menor de 13: sin descuento)
  precioBoleto(10, false, 'miercoles')  → 25
  precioBoleto(13, false, 'lunes')      → 100
  precioBoleto(20, true, 'lunes')       → 80
  precioBoleto(20, true, 'miercoles')   → 50    (50% gana al 20%; no se suman)
  precioBoleto(64, false, 'lunes')      → 100
  precioBoleto(65, false, 'lunes')      → 60
  precioBoleto(70, false, 'miercoles')  → 30

EXPLICA
  Haz una lista de los valores borde de este ejercicio (4, 5, 12, 13, 64, 65...) y di qué
  condición cambia en cada uno.
*/
// TU SOLUCIÓN


// EJERCICIO 16 — Fortaleza de una clave
/*
SITUACIÓN
  Un formulario clasifica contraseñas según cuántos criterios cumplen.

QUÉ DEBES HACER
  1. Declara la función clasificarClave(clave).
  2. Los criterios son cuatro:
     - tiene 8 caracteres o más;
     - tiene al menos una mayúscula (A–Z);
     - tiene al menos una minúscula (a–z);
     - tiene al menos un dígito (0–9).
  3. Crea cuatro banderas booleanas, todas en false al inicio. Recorre la clave una vez y
     activa la bandera que corresponda a cada carácter (comparaciones de rango).
     El criterio de longitud se comprueba con clave.length.
  4. Cuenta cuántas banderas son true. Devuelve:
     - 'fuerte' si se cumplen los 4;
     - 'media' si se cumplen exactamente 3;
     - 'debil' en cualquier otro caso.

EJEMPLOS
  clasificarClave('Abcdef12')  → 'fuerte'
  clasificarClave('abcdef12')  → 'media'     (sin mayúscula)
  clasificarClave('Abc12')     → 'media'     (corta, pero cumple los otros tres)
  clasificarClave('ABCDEFGH')  → 'debil'     (longitud y mayúscula: solo 2)
  clasificarClave('12345678')  → 'debil'
  clasificarClave('')          → 'debil'

EXPLICA
  ¿Por qué una bandera booleana es mejor aquí que un contador para cada criterio?
*/
// TU SOLUCIÓN


// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE D — INTEGRACIÓN ESTILO LEETCODE
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 17 — Cambio con el menor número de monedas
/*
SITUACIÓN
  Una caja devuelve cambio usando las monedas 200, 100, 50, 20, 10, 5, 2 y 1.

QUÉ DEBES HACER
  1. Declara la función cambioMinimo(monto).
  2. Si monto no es un entero positivo, devuelve [].
  3. Guarda las monedas en un arreglo, de mayor a menor.
  4. Por cada moneda, mientras quepa en lo que falta por devolver, agrégala al resultado y
     réstala de lo que falta.
  5. Devuelve el arreglo con las monedas usadas, de mayor a menor, repitiendo las que se
     usen varias veces.

CASOS LÍMITE
  - 0, negativos y decimales → [].

EJEMPLOS
  cambioMinimo(289)  → [200, 50, 20, 10, 5, 2, 2]
  cambioMinimo(8)    → [5, 2, 1]
  cambioMinimo(400)  → [200, 200]
  cambioMinimo(1)    → [1]
  cambioMinimo(0)    → []
  cambioMinimo(3.5)  → []

EXPLICA
  ¿Por qué ir de la moneda más grande a la más chica produce menos monedas con este
  conjunto?
*/
// TU SOLUCIÓN


// EJERCICIO 18 — El segundo mayor
/*
SITUACIÓN
  Quieres el segundo valor distinto más grande de una lista, recorriéndola una sola vez.

QUÉ DEBES HACER
  1. Declara la función segundoMayor(arr).
  2. Usa dos acumuladores: «mayor» y «segundo». Ambos empiezan en undefined.
  3. Recorre arr una vez. Para cada número n:
     a) si «mayor» es undefined o n es mayor que «mayor»: el viejo «mayor» pasa a ser
        «segundo», y n pasa a ser «mayor»;
     b) si no, y n es distinto de «mayor» y («segundo» es undefined o n es mayor que
        «segundo»): n pasa a ser «segundo».
  4. Devuelve «segundo». Si no hay dos valores distintos, será undefined.
  Prohibido: sort, Math.max, Set.

CASOS LÍMITE
  - Valores repetidos: [5, 5] no tiene segundo mayor.
  - Negativos.

EJEMPLOS
  segundoMayor([3, 1, 4, 4, 2])  → 3
  segundoMayor([5, 5])           → undefined
  segundoMayor([2])              → undefined
  segundoMayor([])               → undefined
  segundoMayor([-1, -2, -3])     → -2
  segundoMayor([9, 9, 8])        → 8

EXPLICA
  ¿Qué le pregunta cada acumulador a los datos? ¿Por qué no basta con un solo acumulador?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra? ¿Y si lo resolvieras ordenando?
*/
// TU SOLUCIÓN


// EJERCICIO 19 — Sumar uno a un número en dígitos
/*
SITUACIÓN
  Un número grande se guarda como arreglo de dígitos, del más significativo al menos:
  [1, 2, 9] representa 129. Debes sumarle 1.

QUÉ DEBES HACER
  1. Declara la función sumarUno(digitos).
  2. Crea una COPIA del arreglo (no modifiques el original).
  3. Recorre la copia de DERECHA A IZQUIERDA:
     a) si el dígito es menor que 9, súmale 1 y devuelve la copia;
     b) si es 9, conviértelo en 0 y continúa con el dígito anterior (acarreo).
  4. Si saliste del bucle, todos eran 9: el resultado es un 1 seguido de ceros. Devuelve un
     arreglo con 1 al inicio y los dígitos de la copia (todos ceros).
  Prohibido: convertir a número (Number, parseInt, BigInt) o a texto.

EJEMPLOS
  sumarUno([1, 2, 3])     → [1, 2, 4]
  sumarUno([1, 2, 9])     → [1, 3, 0]
  sumarUno([9, 9])        → [1, 0, 0]
  sumarUno([0])           → [1]
  sumarUno([9])           → [1, 0]
  sumarUno([4, 9, 9, 9])  → [5, 0, 0, 0]

EXPLICA
  ¿Por qué no sirve convertir el arreglo a un número normal cuando tiene 30 dígitos?
*/
// TU SOLUCIÓN


// EJERCICIO 20 — Arreglo en forma de montaña
/*
SITUACIÓN
  Un arreglo es una «montaña» si sube de forma estricta hasta una cima y luego baja de
  forma estricta. Debe haber al menos una subida y una bajada.

QUÉ DEBES HACER
  1. Declara la función esMontana(arr).
  2. Si arr tiene menos de 3 elementos, devuelve false.
  3. Crea un índice «i» en 0. Sube con un while mientras haya siguiente y arr[i] < arr[i + 1].
  4. Si «i» quedó en 0 (nunca subió) o en el último índice (nunca bajó), devuelve false:
     la cima no puede estar en los extremos.
  5. Baja con otro while mientras haya siguiente y arr[i] > arr[i + 1].
  6. Devuelve true solo si «i» terminó en el último índice (recorriste todo el arreglo).

CASOS LÍMITE
  - Valores iguales seguidos rompen la montaña: [3, 5, 5] → false.
  - Solo sube o solo baja → false.

EJEMPLOS
  esMontana([0, 3, 2, 1])              → true
  esMontana([0, 2, 3, 4, 5, 2, 1, 0])  → true
  esMontana([1, 3, 2])                 → true
  esMontana([2, 1])                    → false
  esMontana([3, 5, 5])                 → false
  esMontana([0, 1, 2, 3])              → false
  esMontana([3, 2, 1])                 → false
  esMontana([2, 1, 2])                 → false
  esMontana([1, 2, 3, 2, 1, 2])        → false
  esMontana([])                        → false

EXPLICA
  ¿Por qué comprobar que «i» llegó al final es más seguro que comprobar que bajó al menos una
  vez?
COMPLEJIDAD
  ¿Cuántas veces visita cada índice tu solución? ¿Cuál es el tiempo?
*/
// TU SOLUCIÓN


// ═══════════════════════════════════════════════════════════════════════════
// PRUEBAS AUTOMÁTICAS — NO EDITAR DE AQUÍ HACIA ABAJO
// Ejecuta:  node Repaso01.js
// ═══════════════════════════════════════════════════════════════════════════

function igual(obtenido, esperado) {
    const a = JSON.stringify(obtenido)
    const b = JSON.stringify(esperado)
    if (a !== b) throw new Error(`obtuviste ${a} pero se esperaba ${b}`)
}

function noMuta(fn, entrada, ...args) {
    const copia = JSON.parse(JSON.stringify(entrada))
    fn(entrada, ...args)
    igual(entrada, copia)
}

function probar(numero, titulo, fn) {
    const id = String(numero).padStart(2, '0')
    try {
        fn()
        console.log(`✔ ${id} ${titulo}`)
    } catch (e) {
        if (e instanceof ReferenceError && /is not defined/.test(e.message)) {
            console.log(`… ${id} ${titulo} (pendiente)`)
        } else {
            console.log(`✘ ${id} ${titulo}: ${e.message}`)
        }
    }
}

probar(1, 'extremos', () => {
    igual(extremos([4, 8, 15]), [4, 15])
    igual(extremos([7]), [7, 7])
    igual(extremos([]), [])
    noMuta(extremos, [1, 2, 3])
})

probar(2, 'contarMayores', () => {
    igual(contarMayores([1, 5, 10, 15], 5), 2)
    igual(contarMayores([2, 2, 2], 2), 0)
    igual(contarMayores([-1, -5], -3), 1)
    igual(contarMayores([], 3), 0)
})

probar(3, 'maximo', () => {
    igual(maximo([3, 9, 2]), 9)
    igual(maximo([-5, -2, -9]), -2)
    igual(maximo([4]), 4)
    igual(maximo([7, 7, 1]), 7)
    igual(maximo([]), undefined)
})

probar(4, 'invertirArreglo', () => {
    igual(invertirArreglo([1, 2, 3]), [3, 2, 1])
    igual(invertirArreglo(['a']), ['a'])
    igual(invertirArreglo([]), [])
    const original = [1, 2, 3]
    const resultado = invertirArreglo(original)
    igual(original, [1, 2, 3])
    if (resultado === original) throw new Error('debes devolver un arreglo nuevo, no el mismo')
})

probar(5, 'intercambiar', () => {
    const a = [1, 2, 3, 4]
    const r = intercambiar(a, 0, 3)
    igual(a, [4, 2, 3, 1])
    if (r !== a) throw new Error('debes devolver el MISMO arreglo recibido')
    igual(intercambiar([1, 2], 0, 5), [1, 2])
    igual(intercambiar([1, 2], -1, 0), [1, 2])
    igual(intercambiar([1, 2], 2, 0), [1, 2])
    igual(intercambiar([1, 2, 3], 1, 1), [1, 2, 3])
})

probar(6, 'rotarIzquierda', () => {
    igual(rotarIzquierda([1, 2, 3, 4, 5], 2), [3, 4, 5, 1, 2])
    igual(rotarIzquierda([1, 2, 3, 4, 5], 7), [3, 4, 5, 1, 2])
    igual(rotarIzquierda([1, 2, 3], 0), [1, 2, 3])
    igual(rotarIzquierda([], 3), [])
    noMuta(rotarIzquierda, [1, 2, 3], 1)
})

probar(7, 'contarVocales', () => {
    igual(contarVocales('Hola Mundo'), 4)
    igual(contarVocales('rhythm'), 0)
    igual(contarVocales('AEIOUaeiou'), 10)
    igual(contarVocales(''), 0)
})

probar(8, 'capitalizar', () => {
    igual(capitalizar('hola mundo'), 'Hola Mundo')
    igual(capitalizar('jAVAsCRIPT'), 'Javascript')
    igual(capitalizar('a'), 'A')
    igual(capitalizar(''), '')
})

probar(9, 'esPalindromo', () => {
    igual(esPalindromo('A man, a plan, a canal: Panama'), true)
    igual(esPalindromo('race a car'), false)
    igual(esPalindromo(''), true)
    igual(esPalindromo('.,'), true)
    igual(esPalindromo('0P'), false)
    igual(esPalindromo('abba'), true)
    igual(esPalindromo('abca'), false)
})

probar(10, 'comprimir', () => {
    igual(comprimir('aaabccdd'), 'a3b1c2d2')
    igual(comprimir('abc'), 'a1b1c1')
    igual(comprimir('zzzz'), 'z4')
    igual(comprimir('aabaa'), 'a2b1a2')
    igual(comprimir(''), '')
})

probar(11, 'longitudUltimaPalabra', () => {
    igual(longitudUltimaPalabra('Hello World'), 5)
    igual(longitudUltimaPalabra('   fly me   to   the moon  '), 4)
    igual(longitudUltimaPalabra('a '), 1)
    igual(longitudUltimaPalabra('   '), 0)
    igual(longitudUltimaPalabra(''), 0)
})

probar(12, 'esSubsecuencia', () => {
    igual(esSubsecuencia('ace', 'abcde'), true)
    igual(esSubsecuencia('aec', 'abcde'), false)
    igual(esSubsecuencia('', 'abc'), true)
    igual(esSubsecuencia('a', ''), false)
    igual(esSubsecuencia('abc', 'abc'), true)
    igual(esSubsecuencia('abcd', 'abc'), false)
})

probar(13, 'clasificarTriangulo', () => {
    igual(clasificarTriangulo(3, 3, 3), 'equilatero')
    igual(clasificarTriangulo(3, 3, 2), 'isosceles')
    igual(clasificarTriangulo(3, 4, 5), 'escaleno')
    igual(clasificarTriangulo(1, 2, 3), 'invalido')
    igual(clasificarTriangulo(2, 2, 4), 'invalido')
    igual(clasificarTriangulo(0, 1, 1), 'invalido')
    igual(clasificarTriangulo(5, 5, 8), 'isosceles')
    igual(clasificarTriangulo(-1, 2, 2), 'invalido')
    igual(clasificarTriangulo(8, 5, 5), 'isosceles')
})

probar(14, 'diasDelMes', () => {
    igual(diasDelMes(1, 2023), 31)
    igual(diasDelMes(4, 2023), 30)
    igual(diasDelMes(2, 2023), 28)
    igual(diasDelMes(2, 2024), 29)
    igual(diasDelMes(2, 1900), 28)
    igual(diasDelMes(2, 2000), 29)
    igual(diasDelMes(12, 2024), 31)
    igual(diasDelMes(13, 2024), -1)
    igual(diasDelMes(0, 2024), -1)
    igual(diasDelMes(1.5, 2024), -1)
})

probar(15, 'precioBoleto', () => {
    igual(precioBoleto(-1, false, 'lunes'), -1)
    igual(precioBoleto(4, false, 'miercoles'), 0)
    igual(precioBoleto(12, false, 'lunes'), 50)
    igual(precioBoleto(10, true, 'lunes'), 50)
    igual(precioBoleto(10, false, 'miercoles'), 25)
    igual(precioBoleto(13, false, 'lunes'), 100)
    igual(precioBoleto(20, true, 'lunes'), 80)
    igual(precioBoleto(20, true, 'miercoles'), 50)
    igual(precioBoleto(20, false, 'miercoles'), 50)
    igual(precioBoleto(64, false, 'lunes'), 100)
    igual(precioBoleto(65, false, 'lunes'), 60)
    igual(precioBoleto(70, true, 'lunes'), 60)
    igual(precioBoleto(70, false, 'miercoles'), 30)
})

probar(16, 'clasificarClave', () => {
    igual(clasificarClave('Abcdef12'), 'fuerte')
    igual(clasificarClave('abcdef12'), 'media')
    igual(clasificarClave('Abc12'), 'media')
    igual(clasificarClave('Abcdefgh'), 'media')
    igual(clasificarClave('ABCDEFGH'), 'debil')
    igual(clasificarClave('12345678'), 'debil')
    igual(clasificarClave('abc'), 'debil')
    igual(clasificarClave(''), 'debil')
})

probar(17, 'cambioMinimo', () => {
    igual(cambioMinimo(289), [200, 50, 20, 10, 5, 2, 2])
    igual(cambioMinimo(8), [5, 2, 1])
    igual(cambioMinimo(400), [200, 200])
    igual(cambioMinimo(1), [1])
    igual(cambioMinimo(0), [])
    igual(cambioMinimo(-5), [])
    igual(cambioMinimo(3.5), [])
})

probar(18, 'segundoMayor', () => {
    igual(segundoMayor([3, 1, 4, 4, 2]), 3)
    igual(segundoMayor([5, 5]), undefined)
    igual(segundoMayor([2]), undefined)
    igual(segundoMayor([]), undefined)
    igual(segundoMayor([-1, -2, -3]), -2)
    igual(segundoMayor([9, 9, 8]), 8)
    igual(segundoMayor([1, 2]), 1)
    noMuta(segundoMayor, [3, 1, 2])
})

probar(19, 'sumarUno', () => {
    igual(sumarUno([1, 2, 3]), [1, 2, 4])
    igual(sumarUno([1, 2, 9]), [1, 3, 0])
    igual(sumarUno([9, 9]), [1, 0, 0])
    igual(sumarUno([0]), [1])
    igual(sumarUno([9]), [1, 0])
    igual(sumarUno([4, 9, 9, 9]), [5, 0, 0, 0])
    igual(sumarUno(new Array(30).fill(9)), [1, ...new Array(30).fill(0)])
    noMuta(sumarUno, [1, 2, 9])
})

probar(20, 'esMontana', () => {
    igual(esMontana([0, 3, 2, 1]), true)
    igual(esMontana([0, 2, 3, 4, 5, 2, 1, 0]), true)
    igual(esMontana([1, 3, 2]), true)
    igual(esMontana([2, 1]), false)
    igual(esMontana([3, 5, 5]), false)
    igual(esMontana([0, 1, 2, 3]), false)
    igual(esMontana([3, 2, 1]), false)
    igual(esMontana([2, 1, 2]), false)
    igual(esMontana([1, 2, 3, 2, 1, 2]), false)
    igual(esMontana([0, 2, 3, 3, 5, 2, 1, 0]), false)
    igual(esMontana([]), false)
})
