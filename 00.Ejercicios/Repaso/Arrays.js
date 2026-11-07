/*
ARRAYS — ETAPA 1: EJERCICIOS ESTILO LEETCODE Y HACKERRANK
Teoría de apoyo (01.Bases): 10-array · 14-loops · 32-accumulators · 33-big-o

Cada ejercicio es un problema real de LeetCode (LC) o HackerRank (HR) de nivel fácil, reescrito
en español con el formato de Repaso01. Los nombres de función están en inglés, como en esas
plataformas: es el idioma de las entrevistas (Etapa 6).

ORGANIZACIÓN
  Ejercicios 01–06 .... recorridos y acumuladores (sumas, máximos, rachas)
  Ejercicios 07–12 .... estado y condiciones (varios acumuladores, reglas con bordes)
  Ejercicios 13–16 .... índices: escribir en el sitio, intercalar, vuelta circular
  Ejercicios 17–20 .... arreglos de arreglos (matrices)

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN y RESTRICCIONES: te dicen qué problema resuelves y qué datos puedes esperar.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Escribe tu función debajo de «// TU SOLUCIÓN», con el nombre exacto que pide el enunciado.
  4. Antes de ejecutar, predice a mano el resultado de cada línea de COMPRUEBA
     (haz una tabla de seguimiento: variable por variable, vuelta por vuelta).
  5. Ejecuta:   node Arrays.js
     Al final verás una línea por ejercicio:
        ✔  la función pasa todas las pruebas
        ✘  falla: muestra lo que obtuviste y lo que se esperaba
        …  pendiente: aún no declaras la función
     Para ver los valores, copia las líneas de COMPRUEBA debajo de tu función y ejecútalas.
  6. Si falla, NO cambies código al azar: haz la tabla de seguimiento con el caso que falló.
  7. Responde EXPLICA (y COMPLEJIDAD, cuando aparezca) en un comentario bajo tu solución.

VOCABULARIO DE LOS ENUNCIADOS
  «Devuelve» = usa return. Imprimir con console.log NO sustituye a devolver.
  «Recorre» = usa un for (o while) que visite los elementos en el orden que se indica.
  «Índice válido» = entero entre 0 y length - 1.
  «Arreglo nuevo» = crea otro con [] y llénalo; no devuelvas el recibido.
  «En el sitio» = modifica el arreglo recibido, sin crear otro.
  «Matriz» = arreglo de arreglos: matriz[fila][columna].

REGLAS
  - No modifiques los argumentos recibidos, salvo que el ejercicio diga «en el sitio»
    (las pruebas lo verifican).
  - Prohibido en todo el archivo, salvo que el ejercicio lo permita: map, filter, reduce,
    forEach, find, some, every, sort, reverse, splice, slice, Math.max, Math.min, expresiones
    regulares, Set y Map. El objetivo es dominar bucles, índices y condiciones.
  - Siempre permitido: variables, if/else, for, while, for...of, .length, .push() y Math.abs.
  - No hay soluciones incluidas. Las pruebas automáticas están al final: no las edites.
*/

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE A — RECORRIDOS Y ACUMULADORES
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 01 — Suma acumulada (LC 1480 · Running Sum of 1d Array)
/*
SITUACIÓN
  Un negocio anota sus ventas de cada día en un arreglo y quiere saber cuánto lleva vendido
  al terminar cada día. Recibes el arreglo de ventas diarias y devuelves otro arreglo del
  mismo tamaño: en cada posición, la suma de todas las ventas hasta ese día incluido.

  Ejemplo: con [1, 2, 3, 4], el día 3 lleva 1 + 2 + 3 = 6 y el día 4 lleva 10, así que el
  resultado es [1, 3, 6, 10].

  Idea: el acumulador. Una sola variable «suma» que va creciendo; en cada vuelta se le suma el
  elemento actual y se guarda su valor en el resultado. No hace falta volver a sumar desde el
  inicio en cada día.

RESTRICCIONES
  - El arreglo puede estar vacío y puede tener números negativos.

QUÉ DEBES HACER
  1. Declara la función runningSum(nums). Recibe un arreglo de números y devuelve un arreglo
     nuevo.
  2. Crea la variable «suma» con valor 0 y el arreglo «resultado» con valor [], ambos ANTES
     del bucle.
  3. Recorre nums con for...of: en cada vuelta tendrás un número «n».
  4. En cada vuelta, suma n a «suma» y luego agrega el valor de «suma» a «resultado» con push.
  5. Al terminar el bucle, devuelve «resultado». nums debe quedar intacto. Con un arreglo
     vacío, el bucle no da ninguna vuelta y el resultado es [].
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(runningSum([1, 2, 3, 4]));          // [1, 3, 6, 10]
  console.log(runningSum([3, 1, 2, 10, 1]));      // [3, 4, 6, 16, 17]
  console.log(runningSum([-1, 2]));               // [-1, 1]            (hay negativos)
  console.log(runningSum([5]));                   // [5]                (un solo elemento)
  console.log(runningSum([]));                    // []                 (arreglo vacío)

EXPLICA
  ¿Por qué «suma» se declara fuera del bucle? ¿Qué pasaría si se declarara dentro?
*/
// TU SOLUCIÓN


// EJERCICIO 02 — Número faltante (LC 268 · Missing Number)
/*
SITUACIÓN
  Una caja contiene fichas numeradas desde 0 hasta n, sin repetir, pero falta una. En el
  arreglo solo hay n fichas, en cualquier orden. Recibes ese arreglo y devuelves el número de
  la ficha que falta.

  Ejemplo: [3, 0, 1] tiene 3 fichas (n = 3), así que las fichas posibles son 0, 1, 2 y 3.
  Entre ellas no está el 2: es la respuesta.

  Idea: no hace falta buscar el hueco. La suma de 0 a n se conoce de antemano con la fórmula
  de Gauss (n × (n + 1) / 2). Si a esa suma esperada le restas la suma de lo que realmente
  hay, lo que sobra es la ficha que falta.

RESTRICCIONES
  - Hay n fichas distintas, con valores entre 0 y n. Falta exactamente una.
  - n puede ser 1 (un arreglo de un solo elemento).

QUÉ DEBES HACER
  1. Declara la función missingNumber(nums). Recibe un arreglo de enteros y devuelve un entero.
  2. Crea la variable «n» con valor nums.length.
  3. Calcula la suma esperada de 0 a n con la fórmula: «esperada» = n * (n + 1) / 2.
  4. Crea la variable «real» con valor 0 y recorre nums sumando cada elemento a «real».
  5. Devuelve «esperada» - «real».
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(missingNumber([3, 0, 1]));                  // 2
  console.log(missingNumber([0, 1]));                     // 2   (falta el último)
  console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
  console.log(missingNumber([0]));                        // 1
  console.log(missingNumber([1]));                        // 0   (falta el primero)

EXPLICA
  ¿Por qué falta justamente la diferencia entre las dos sumas?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra? ¿Cómo sería con dos bucles anidados (buscar cada
  número del 0 al n)?
*/
// TU SOLUCIÓN


// EJERCICIO 03 — Índice de equilibrio (LC 724 · Find Pivot Index)
/*
SITUACIÓN
  En una balanza con pesos alineados en fila, buscas una posición donde el peso total de la
  izquierda sea igual al de la derecha. El elemento de esa posición no cuenta en ningún lado.
  Recibes un arreglo de números y devuelves el índice más a la izquierda que cumple esto, o
  -1 si ninguno lo cumple.

  Ejemplo: en [1, 7, 3, 6, 5, 6], el índice 3 (valor 6) tiene a la izquierda 1 + 7 + 3 = 11
  y a la derecha 5 + 6 = 11: es el pivote. En el índice 0, la izquierda está vacía y suma 0.

  Idea: no sumes cada lado desde cero en cada posición. Calcula UNA vez la suma total y ve
  llevando la suma de la izquierda; la de la derecha sale de: total - izquierda - elemento actual.

RESTRICCIONES
  - El arreglo puede estar vacío (devuelve -1) y puede tener negativos.
  - Un lado vacío suma 0.

QUÉ DEBES HACER
  1. Declara la función pivotIndex(nums). Recibe un arreglo de enteros y devuelve un entero.
  2. Calcula «total», la suma de todos los elementos, con un primer recorrido.
  3. Crea la variable «izquierda» con valor 0 (la suma de lo que queda a la izquierda).
  4. Recorre nums con un for: i empieza en 0, continúa mientras i < nums.length y avanza de 1 en 1.
  5. En cada vuelta calcula «derecha» = total - izquierda - nums[i].
  6. Si «izquierda» es igual a «derecha», devuelve i (ya terminaste).
  7. Si no, suma nums[i] a «izquierda» y pasa a la siguiente vuelta.
  8. Si el bucle termina sin haber devuelto nada, devuelve -1.
  9. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(pivotIndex([1, 7, 3, 6, 5, 6]));   // 3
  console.log(pivotIndex([1, 2, 3]));            // -1   (ningún índice equilibra)
  console.log(pivotIndex([2, 1, -1]));           // 0    (izquierda vacía = 0; derecha 1 + -1 = 0)
  console.log(pivotIndex([0]));                  // 0    (ambos lados vacíos)
  console.log(pivotIndex([]));                   // -1   (arreglo vacío)

EXPLICA
  ¿Qué pasa con el rendimiento si en cada posición sumas la izquierda y la derecha con dos
  bucles nuevos?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN


// EJERCICIO 04 — La racha de unos más larga (LC 485 · Max Consecutive Ones)
/*
SITUACIÓN
  Un sensor registra 1 cuando detecta movimiento y 0 cuando no. Quieres saber cuál fue el
  periodo continuo más largo con movimiento. Recibes un arreglo de ceros y unos y devuelves
  cuántos unos seguidos hubo como máximo.

  Ejemplo: en [1, 1, 0, 1, 1, 1] hay una racha de 2 unos y luego otra de 3: la respuesta es 3.

  Idea: dos acumuladores con preguntas distintas. «actual»: ¿cuántos unos seguidos llevo ahora?
  (se reinicia con cada 0). «mejor»: ¿cuál fue la racha más larga que he visto? (solo crece).

RESTRICCIONES
  - El arreglo solo contiene 0 y 1, y puede estar vacío.

QUÉ DEBES HACER
  1. Declara la función findMaxConsecutiveOnes(nums). Recibe un arreglo y devuelve un número.
  2. Crea las variables «actual» y «mejor», ambas con valor 0.
  3. Recorre nums con for...of: en cada vuelta tendrás un número «n».
  4. Si n es 1: suma 1 a «actual» y, si «actual» es mayor que «mejor», guarda «actual» en «mejor».
  5. Si n es 0: reinicia «actual» a 0.
  6. Al terminar el bucle, devuelve «mejor».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));   // 3
  console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));   // 2
  console.log(findMaxConsecutiveOnes([0, 0]));               // 0   (no hay unos)
  console.log(findMaxConsecutiveOnes([1, 1, 1]));            // 3   (la racha llega hasta el final)
  console.log(findMaxConsecutiveOnes([1]));                  // 1
  console.log(findMaxConsecutiveOnes([]));                   // 0   (arreglo vacío)

EXPLICA
  ¿Por qué se actualiza «mejor» dentro del if y no solo cuando aparece un 0? ¿Qué falla con
  [1, 1, 1] si solo lo actualizas en el 0?
*/
// TU SOLUCIÓN


// EJERCICIO 05 — El número más cercano a cero (LC 2239 · Find Closest Number to Zero)
/*
SITUACIÓN
  Un termómetro registra temperaturas, positivas y negativas, y quieres la lectura más cercana
  a 0 grados. Si dos lecturas están igual de cerca (por ejemplo -2 y 2), se prefiere la
  positiva. Recibes un arreglo con al menos un número y devuelves ese valor (no su distancia).

  Ejemplo: en [-4, -2, 1, 4, 8], las distancias a 0 son 4, 2, 1, 4 y 8, así que la respuesta
  es 1. En [-3, 2, -2, 3] el -2 y el 2 empatan (distancia 2) y gana el 2.

  Idea: comparar por distancia, no por valor. Math.abs(n) mide qué tan lejos de 0 está n. El
  desempate (misma distancia) se resuelve con una segunda condición.

RESTRICCIONES
  - nums tiene al menos 1 elemento. Puede haber ceros y repetidos.

QUÉ DEBES HACER
  1. Declara la función findClosestNumber(nums). Recibe un arreglo y devuelve un número.
  2. Crea la variable «cercano» y asígnale el PRIMER elemento (nums[0]).
  3. Recorre nums desde el índice 1: i empieza en 1, continúa mientras i < nums.length y avanza
     de 1 en 1.
  4. En cada vuelta, sea n = nums[i]. Si Math.abs(n) es MENOR que Math.abs(cercano), guarda n
     en «cercano».
  5. Si no, y Math.abs(n) es IGUAL a Math.abs(cercano), y n es mayor que «cercano», guarda
     n en «cercano» (desempate a favor del positivo).
  6. Al terminar el bucle, devuelve «cercano».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(findClosestNumber([-4, -2, 1, 4, 8]));   // 1
  console.log(findClosestNumber([2, -1, 1]));          // 1    (-1 y 1 empatan: gana el positivo)
  console.log(findClosestNumber([-3, 2, -2, 3]));      // 2    (empate -2 y 2)
  console.log(findClosestNumber([5]));                 // 5    (un solo elemento)
  console.log(findClosestNumber([-5]));                // -5
  console.log(findClosestNumber([3, 0, -1]));          // 0    (el 0 es el más cercano)

EXPLICA
  ¿Por qué «cercano» empieza con nums[0] y no con 0?
*/
// TU SOLUCIÓN


// EJERCICIO 06 — Velas del pastel (HR · Birthday Cake Candles)
/*
SITUACIÓN
  En un cumpleaños, el niño solo puede apagar las velas más altas del pastel. Recibes un arreglo
  con la altura de cada vela y devuelves CUÁNTAS velas tienen la altura máxima (no la altura).

  Ejemplo: con [3, 2, 1, 3], la altura máxima es 3 y hay dos velas de esa altura: la
  respuesta es 2.

  Idea: encontrar el máximo y contar cuántas veces aparece, todo en UNA sola pasada. Cuando
  aparece una vela más alta, el conteo se reinicia en 1; cuando aparece una igual al máximo,
  el conteo sube 1.

RESTRICCIONES
  - Las alturas son enteros positivos. El arreglo puede estar vacío (devuelve 0).

QUÉ DEBES HACER
  1. Declara la función birthdayCakeCandles(candles). Recibe un arreglo y devuelve un número.
  2. Si el arreglo está vacío, devuelve 0 y termina.
  3. Crea la variable «maxima» con valor candles[0] y la variable «cuenta» con valor 1.
  4. Recorre candles desde el índice 1: i empieza en 1, continúa mientras i < candles.length y
     avanza de 1 en 1.
  5. En cada vuelta, sea c = candles[i]:
     a) si c es mayor que «maxima»: guarda c en «maxima» y pon «cuenta» en 1;
     b) si no, si c es igual a «maxima»: suma 1 a «cuenta».
  6. Al terminar el bucle, devuelve «cuenta».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(birthdayCakeCandles([3, 2, 1, 3]));            // 2
  console.log(birthdayCakeCandles([4, 4, 1, 3]));            // 2
  console.log(birthdayCakeCandles([1]));                     // 1
  console.log(birthdayCakeCandles([5, 5, 5]));               // 3   (todas iguales)
  console.log(birthdayCakeCandles([1, 2, 3, 4]));            // 1   (máximo al final, una sola vez)
  console.log(birthdayCakeCandles([3, 3, 5]));               // 1   (aparece una más alta después de empates)
  console.log(birthdayCakeCandles([]));                      // 0   (arreglo vacío)

EXPLICA
  ¿Por qué hay que reiniciar «cuenta» en 1 cuando aparece una vela más alta?
COMPLEJIDAD
  ¿Cuántas pasadas haces al arreglo? ¿Cuántas harías si primero buscaras el máximo y luego
  contaras?
*/
// TU SOLUCIÓN


// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE B — ESTADO Y CONDICIONES
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 07 — Suma mínima y máxima (HR · Mini-Max Sum)
/*
SITUACIÓN
  Con una lista de al menos dos enteros, quieres saber cuál es la suma más pequeña y cuál la
  más grande que se puede obtener sumando todos los elementos MENOS uno. Recibes el arreglo y
  devuelves [sumaMinima, sumaMaxima].

  Ejemplo: con [1, 2, 3, 4, 5]. Para la suma más pequeña dejas fuera el mayor (5): 1 + 2 + 3 + 4 = 10.
  Para la más grande dejas fuera el menor (1): 2 + 3 + 4 + 5 = 14. Resultado: [10, 14].

  Idea: no hace falta probar todas las combinaciones. Basta con tres acumuladores en una pasada:
  el total, el menor y el mayor. La suma mínima es total menos el mayor; la máxima es total
  menos el menor.

RESTRICCIONES
  - El arreglo tiene al menos 2 elementos. Puede haber repetidos.

QUÉ DEBES HACER
  1. Declara la función miniMaxSum(arr). Recibe un arreglo de enteros y devuelve un arreglo
     de dos números.
  2. Crea las variables «total» con valor 0, «menor» con valor arr[0] y «mayor» con valor arr[0].
  3. Recorre arr con for...of: en cada vuelta tendrás un número «n».
  4. En cada vuelta: suma n a «total»; si n es menor que «menor», guárdalo en «menor»; si n es
     mayor que «mayor», guárdalo en «mayor».
  5. Devuelve [total - mayor, total - menor].
  6. Prohibido: sort, Math.min y Math.max.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(miniMaxSum([1, 2, 3, 4, 5]));             // [10, 14]
  console.log(miniMaxSum([7, 69, 2, 221, 8974]));       // [299, 9271]
  console.log(miniMaxSum([5, 5, 5, 5, 5]));             // [20, 20]    (todos iguales)
  console.log(miniMaxSum([1, 2]));                      // [1, 2]      (el mínimo de elementos)

EXPLICA
  ¿Por qué no hace falta ordenar el arreglo?
*/
// TU SOLUCIÓN


// EJERCICIO 08 — Proporciones (HR · Plus Minus)
/*
SITUACIÓN
  Un profesor tiene las diferencias de calificación de su grupo (positivas, negativas o cero) y
  quiere saber qué proporción del grupo mejoró, empeoró o no cambió. Recibes un arreglo de
  enteros y devuelves [proporciónPositivos, proporciónNegativos, proporciónCeros], cada una
  redondeada a 6 decimales.

  Ejemplo: en [-4, 3, -9, 0, 4, 1] hay 3 positivos, 2 negativos y 1 cero, sobre 6 elementos:
  3/6 = 0.5, 2/6 = 0.333333 y 1/6 = 0.166667.

  Idea: tres contadores independientes en un solo recorrido, y al final se divide cada uno
  entre el total de elementos. Para redondear a 6 decimales: Number((x).toFixed(6)).

RESTRICCIONES
  - El arreglo tiene al menos 1 elemento.

QUÉ DEBES HACER
  1. Declara la función plusMinus(arr). Recibe un arreglo de enteros y devuelve un arreglo
     de tres números.
  2. Crea tres contadores con valor 0: «positivos», «negativos» y «ceros».
  3. Recorre arr con for...of: en cada vuelta tendrás un número «n».
  4. Si n es mayor que 0, suma 1 a «positivos»; si es menor que 0, suma 1 a «negativos»; en
     otro caso, suma 1 a «ceros».
  5. Crea «total» con valor arr.length.
  6. Devuelve un arreglo con tres valores, en este orden: positivos / total, negativos / total
     y ceros / total, cada uno convertido con Number((valor).toFixed(6)).
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(plusMinus([-4, 3, -9, 0, 4, 1]));   // [0.5, 0.333333, 0.166667]
  console.log(plusMinus([1, 1, 0, -1, -1]));      // [0.4, 0.4, 0.2]
  console.log(plusMinus([0]));                    // [0, 0, 1]           (solo ceros)
  console.log(plusMinus([1, 2, 3]));              // [1, 0, 0]           (solo positivos)

EXPLICA
  ¿Por qué se cuenta primero y se divide al final, en lugar de dividir en cada vuelta?
*/
// TU SOLUCIÓN


// EJERCICIO 09 — Arreglo monótono (LC 896 · Monotonic Array)
/*
SITUACIÓN
  Una lista de lecturas es monótona si solo sube o se mantiene (nunca baja) o si solo baja o se
  mantiene (nunca sube). Recibes un arreglo de números y devuelves true si es monótono.

  Ejemplo: [1, 2, 2, 3] es monótono (sube y se mantiene). [6, 5, 4, 4] también (baja y se
  mantiene). [1, 3, 2] no: sube y luego baja.

  Idea: dos banderas, una por cada dirección posible. Se parte de «puede ser creciente» y
  «puede ser decreciente», ambas en true; cada pareja de vecinos que contradiga una dirección
  apaga su bandera. Al final basta con que una siga encendida.

RESTRICCIONES
  - El arreglo puede estar vacío o tener un solo elemento (en ambos casos es monótono).

QUÉ DEBES HACER
  1. Declara la función isMonotonic(nums). Recibe un arreglo y devuelve un booleano.
  2. Crea las variables «creciente» y «decreciente», ambas con valor true.
  3. Recorre nums con un for: i empieza en 1, continúa mientras i < nums.length y avanza de 1 en 1.
  4. En cada vuelta compara nums[i] con nums[i - 1]:
     a) si nums[i] es MAYOR que nums[i - 1], haz decreciente = false;
     b) si nums[i] es MENOR que nums[i - 1], haz creciente = false.
  5. Al terminar el bucle, devuelve creciente || decreciente.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(isMonotonic([1, 2, 2, 3]));   // true
  console.log(isMonotonic([6, 5, 4, 4]));   // true
  console.log(isMonotonic([1, 3, 2]));      // false   (sube y luego baja)
  console.log(isMonotonic([1, 1, 1]));      // true    (todos iguales: cuenta como ambas)
  console.log(isMonotonic([5]));            // true    (un solo elemento)
  console.log(isMonotonic([]));             // true    (arreglo vacío)
  console.log(isMonotonic([3, 2, 3]));      // false   (baja y luego sube)

EXPLICA
  ¿Por qué un arreglo con todos los valores iguales cumple las dos banderas a la vez?
*/
// TU SOLUCIÓN


// EJERCICIO 10 — Sembrar flores (LC 605 · Can Place Flowers)
/*
SITUACIÓN
  Un jardinero tiene un parterre en fila: 1 es una posición ya sembrada y 0 una vacía. Las
  flores no pueden quedar en posiciones vecinas. Recibes el parterre y un número n, y devuelves
  true si se pueden sembrar n flores más sin romper esa regla.

  Ejemplo: en [1, 0, 0, 0, 1] solo cabe una flor más (en el centro): con n = 1 es true; con
  n = 2 es false.

  Idea: una posición vacía se puede sembrar si su vecino izquierdo y su vecino derecho están
  vacíos. En los extremos solo hay un vecino: la posición «fuera» del parterre cuenta como
  vacía. Al sembrar, esa posición pasa a estar ocupada para las siguientes.

RESTRICCIONES
  - El parterre solo contiene 0 y 1 y no tiene flores vecinas al inicio. n es 0 o mayor.

QUÉ DEBES HACER
  1. Declara la función canPlaceFlowers(flowerbed, n). Recibe un arreglo y un número, y
     devuelve un booleano.
  2. Crea una COPIA del arreglo en «parterre» ([...flowerbed]) para no modificar el original.
     Crea «sembradas» con valor 0.
  3. Recorre «parterre» con un for: i empieza en 0, continúa mientras i < parterre.length y
     avanza de 1 en 1.
  4. En cada vuelta, siembra en i si se cumplen LAS TRES condiciones:
     a) parterre[i] es 0;
     b) i es 0 (no hay vecino izquierdo) O parterre[i - 1] es 0;
     c) i es el último índice (no hay vecino derecho) O parterre[i + 1] es 0.
  5. Sembrar significa: parterre[i] = 1 y sumar 1 a «sembradas».
  6. Al terminar el bucle, devuelve sembradas >= n.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));   // true
  console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));   // false
  console.log(canPlaceFlowers([0, 0, 0], 2));         // true    (posiciones 0 y 2)
  console.log(canPlaceFlowers([0], 1));               // true    (extremos sin vecinos)
  console.log(canPlaceFlowers([1], 1));               // false
  console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2));   // true    (posiciones 0 y 4)
  console.log(canPlaceFlowers([1, 0, 1], 0));         // true    (n = 0 siempre se cumple)
  const parterre = [0, 0, 0];
  canPlaceFlowers(parterre, 2);
  console.log(parterre);                              // [0, 0, 0]   (no se modificó)

EXPLICA
  ¿Por qué hay que marcar la posición como 1 cuando siembras, y no solo contar?
*/
// TU SOLUCIÓN


// EJERCICIO 11 — Tercer mayor distinto (LC 414 · Third Maximum Number)
/*
SITUACIÓN
  Quieres el tercer valor DISTINTO más grande de una lista. Si no existen tres valores
  distintos, se devuelve el mayor. Recibes un arreglo con al menos un número.

  Ejemplo: en [2, 2, 3, 1] los valores distintos son 3, 2 y 1: el tercer mayor es 1. En
  [1, 2] solo hay dos distintos, así que se devuelve el mayor: 2.

  Idea: es el ejercicio del segundo mayor con un acumulador más: «primero», «segundo» y
  «tercero», todos sin valor al empezar (undefined). Un valor repetido se ignora; uno nuevo
  desplaza a los que quedan por debajo.

RESTRICCIONES
  - nums tiene al menos 1 elemento. Puede haber repetidos y negativos.

QUÉ DEBES HACER
  1. Declara la función thirdMax(nums). Recibe un arreglo y devuelve un número.
  2. Crea tres variables sin valor inicial: «primero», «segundo» y «tercero».
  3. Recorre nums con for...of: en cada vuelta tendrás un número «n».
  4. Si n es igual a «primero», a «segundo» o a «tercero», sáltalo (continue): ya está contado.
  5. Si «primero» es undefined o n es mayor que «primero»: haz tercero = segundo,
     segundo = primero y primero = n.
  6. Si no, y («segundo» es undefined o n es mayor que «segundo»): haz tercero = segundo y
     segundo = n.
  7. Si no, y («tercero» es undefined o n es mayor que «tercero»): haz tercero = n.
  8. Al terminar el bucle, si «tercero» es undefined devuelve «primero»; si no, devuelve «tercero».
  9. Prohibido: sort, Set, Math.max y Math.min.
  10. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(thirdMax([3, 2, 1]));          // 1
  console.log(thirdMax([1, 2]));             // 2    (solo dos distintos: devuelve el mayor)
  console.log(thirdMax([2, 2, 3, 1]));       // 1    (el 2 repetido cuenta una vez)
  console.log(thirdMax([1, 1, 2]));          // 2
  console.log(thirdMax([5, 2, 2]));          // 5
  console.log(thirdMax([3, 3, 3]));          // 3
  console.log(thirdMax([1, 2, -5]));         // -5   (negativos)

EXPLICA
  ¿Por qué hay que mover «segundo» a «tercero» ANTES de asignar el nuevo «primero»?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra? ¿Qué costo tendría ordenar y buscar el tercero?
*/
// TU SOLUCIÓN


// EJERCICIO 12 — Dominante al doble (LC 747 · Largest Number At Least Twice of Others)
/*
SITUACIÓN
  En una competencia quieres saber si el ganador sacó al menos el doble que cada uno de los
  demás participantes. Recibes las puntuaciones (enteros no negativos) y devuelves el índice
  del mayor si cumple la condición, o -1 si no.

  Ejemplo: en [3, 6, 1, 0] el mayor es 6 (índice 1) y 6 es al menos el doble de 3, de 1 y de
  0: devuelve 1. En [1, 2, 3, 4], el 4 no llega al doble de 3: devuelve -1.

  Idea: no hace falta comparar el mayor contra todos. Basta compararlo contra el segundo mayor:
  si supera el doble del segundo, supera el doble de todos los demás. Esto se resuelve en una
  pasada con tres acumuladores: el mayor, su índice y el segundo mayor.

RESTRICCIONES
  - nums tiene al menos 1 elemento. Todos los valores son 0 o mayores.

QUÉ DEBES HACER
  1. Declara la función dominantIndex(nums). Recibe un arreglo y devuelve un entero.
  2. Crea «mayor» con valor nums[0], «indice» con valor 0 y «segundo» con valor -Infinity.
  3. Recorre nums desde el índice 1: i empieza en 1, continúa mientras i < nums.length y avanza
     de 1 en 1.
  4. En cada vuelta, sea n = nums[i]:
     a) si n es mayor que «mayor»: haz segundo = mayor, mayor = n e indice = i;
     b) si no, y n es mayor que «segundo»: haz segundo = n.
  5. Al terminar el bucle, devuelve «indice» si mayor >= 2 * segundo; si no, devuelve -1.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(dominantIndex([3, 6, 1, 0]));   // 1
  console.log(dominantIndex([1, 2, 3, 4]));   // -1   (4 no llega al doble de 3)
  console.log(dominantIndex([1]));            // 0    (sin otros números, cumple)
  console.log(dominantIndex([0, 0, 3, 2]));   // -1   (3 no llega al doble de 2)
  console.log(dominantIndex([0, 0, 0, 1]));   // 3
  console.log(dominantIndex([5, 10]));        // 1    (10 es exactamente el doble de 5)
  console.log(dominantIndex([3, 3]));         // -1   (el mayor está repetido)

EXPLICA
  ¿Por qué es suficiente comparar contra el segundo mayor? ¿Qué pasa si el mayor aparece dos
  veces?
*/
// TU SOLUCIÓN


// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE C — ÍNDICES: ESCRIBIR EN EL SITIO, INTERCALAR Y VUELTA CIRCULAR
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 13 — Quitar un valor en el sitio (LC 27 · Remove Element)
/*
SITUACIÓN
  Una lista de pedidos contiene un código que debe eliminarse, pero la lista ocupa una zona de
  memoria fija y no puedes crear otro arreglo. Recibes el arreglo y el valor a quitar. Debes
  reorganizar el MISMO arreglo para que los elementos que se quedan estén al principio, en su
  orden original, y devolver cuántos son.

  Ejemplo: [3, 2, 2, 3] sin los 3 queda con [2, 2] al inicio y se devuelve 2. Lo que haya en
  las posiciones restantes da igual.

  Idea: dos índices que viajan a distinta velocidad. «leer» recorre todo el arreglo; «escribir»
  marca dónde se guarda el próximo elemento que se queda. Como «escribir» nunca va por delante
  de «leer», no se pisa ningún dato pendiente.

RESTRICCIONES
  - Modifica el arreglo EN EL SITIO. No crees otro arreglo ni uses splice, filter ni slice.
  - Debes devolver el número k de elementos que quedan; solo importan las primeras k posiciones.
  - slice aparece en las líneas de COMPRUEBA solo para mirar esas k posiciones; tu solución no
    debe usarlo.

QUÉ DEBES HACER
  1. Declara la función removeElement(nums, val). Recibe un arreglo y un valor, y devuelve un
     entero.
  2. Crea la variable «escribir» con valor 0.
  3. Recorre nums con un for: «leer» empieza en 0, continúa mientras leer < nums.length y avanza
     de 1 en 1.
  4. En cada vuelta, si nums[leer] es DISTINTO de val: copia nums[leer] en nums[escribir] y
     suma 1 a «escribir».
  5. Al terminar el bucle, devuelve «escribir».
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  const a = [3, 2, 2, 3];
  const k = removeElement(a, 3);
  console.log(k);                // 2
  console.log(a.slice(0, k));    // [2, 2]
  const b = [0, 1, 2, 2, 3, 0, 4, 2];
  const k2 = removeElement(b, 2);
  console.log(k2);               // 5
  console.log(b.slice(0, k2));   // [0, 1, 3, 0, 4]
  console.log(removeElement([], 1));        // 0   (arreglo vacío)
  console.log(removeElement([1], 1));       // 0   (se quita el único elemento)
  console.log(removeElement([1, 2, 3], 4)); // 3   (el valor no está)

EXPLICA
  ¿Por qué «escribir» nunca puede quedar por delante de «leer»? ¿Qué pasaría si usaras splice
  dentro del bucle?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN


// EJERCICIO 14 — Quitar repetidos de un arreglo ordenado (LC 26 · Remove Duplicates from Sorted Array)
/*
SITUACIÓN
  Un listado ordenado de menor a mayor tiene valores repetidos y debes dejar cada uno una sola
  vez, reorganizando el MISMO arreglo. Recibes el arreglo y devuelves cuántos valores distintos
  hay; esos valores deben quedar al inicio del arreglo, en orden.

  Ejemplo: [1, 1, 2] queda con [1, 2] al inicio y se devuelve 2.

  Idea: como el arreglo está ordenado, los repetidos están pegados: basta comparar cada
  elemento con el último que se guardó. Es el mismo patrón de dos índices del ejercicio
  anterior, con otra condición.

RESTRICCIONES
  - El arreglo está ordenado de menor a mayor (puede haber repetidos) y puede estar vacío.
  - Modifica el arreglo EN EL SITIO: no crees otro arreglo.

QUÉ DEBES HACER
  1. Declara la función removeDuplicates(nums). Recibe un arreglo ordenado y devuelve un entero.
  2. Si el arreglo está vacío, devuelve 0 y termina.
  3. Crea la variable «escribir» con valor 1 (la posición 0 ya está guardada).
  4. Recorre nums con un for: «leer» empieza en 1, continúa mientras leer < nums.length y avanza
     de 1 en 1.
  5. En cada vuelta, si nums[leer] es DISTINTO de nums[escribir - 1] (el último guardado):
     copia nums[leer] en nums[escribir] y suma 1 a «escribir».
  6. Al terminar el bucle, devuelve «escribir».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  const a = [1, 1, 2];
  const k = removeDuplicates(a);
  console.log(k);                // 2
  console.log(a.slice(0, k));    // [1, 2]
  const b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k2 = removeDuplicates(b);
  console.log(k2);               // 5
  console.log(b.slice(0, k2));   // [0, 1, 2, 3, 4]
  console.log(removeDuplicates([]));          // 0   (arreglo vacío)
  console.log(removeDuplicates([1]));         // 1
  console.log(removeDuplicates([1, 2, 3]));   // 3   (no hay repetidos)
  console.log(removeDuplicates([2, 2, 2]));   // 1   (todos iguales)

EXPLICA
  ¿Por qué esta solución no funcionaría si el arreglo no estuviera ordenado?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN


// EJERCICIO 15 — Intercalar dos mitades (LC 1470 · Shuffle the Array)
/*
SITUACIÓN
  Como al barajar cartas, tienes un arreglo de 2n elementos con dos mitades: [x1, ..., xn,
  y1, ..., yn]. Debes intercalarlas, una de cada mitad, para obtener [x1, y1, x2, y2, ...,
  xn, yn]. Recibes el arreglo y el número n, y devuelves un arreglo nuevo.

  Ejemplo: [2, 5, 1, 3, 4, 7] con n = 3 tiene las mitades [2, 5, 1] y [3, 4, 7]; al
  intercalar queda [2, 3, 5, 4, 1, 7].

  Idea: el elemento «i» de la primera mitad está en la posición i, y su pareja de la segunda
  mitad está exactamente n posiciones más adelante: i + n.

RESTRICCIONES
  - nums.length es exactamente 2 × n. Puede ser 0 (n = 0).

QUÉ DEBES HACER
  1. Declara la función shuffle(nums, n). Recibe un arreglo y un número, y devuelve un arreglo
     nuevo.
  2. Crea el arreglo «resultado» con valor [].
  3. Recorre con un for: i empieza en 0, continúa mientras i < n y avanza de 1 en 1.
  4. En cada vuelta, agrega a «resultado» primero nums[i] y luego nums[i + n], en ese orden.
  5. Al terminar el bucle, devuelve «resultado». nums debe quedar intacto.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(shuffle([2, 5, 1, 3, 4, 7], 3));          // [2, 3, 5, 4, 1, 7]
  console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));    // [1, 4, 2, 3, 3, 2, 4, 1]
  console.log(shuffle([1, 1, 2, 2], 2));                // [1, 2, 1, 2]
  console.log(shuffle([1, 2], 1));                      // [1, 2]      (una pareja)
  console.log(shuffle([], 0));                          // []          (arreglo vacío)

EXPLICA
  ¿Por qué el bucle llega solo hasta n y no hasta nums.length?
*/
// TU SOLUCIÓN


// EJERCICIO 16 — Ordenado y rotado (LC 1752 · Check if Array Is Sorted and Rotated)
/*
SITUACIÓN
  Un arreglo estaba ordenado de menor a mayor (con repetidos permitidos) y luego se rotó: se
  tomaron algunos elementos del inicio y se pasaron al final. Recibes un arreglo y devuelves
  true si pudo salir de ese proceso, incluida la rotación de 0 posiciones (sin rotar).

  Ejemplo: [3, 4, 5, 1, 2] sí: era [1, 2, 3, 4, 5] rotado. [2, 1, 3, 4] no.

  Idea: en un arreglo ordenado y rotado, mirándolo como un círculo (el último elemento queda
  junto al primero), hay como máximo UN punto donde un elemento es mayor que el siguiente.
  Cuenta esos «descensos». Para que la última posición se compare con la primera, usa la misma
  idea de vuelta del operador % del ejercicio de rotación.

RESTRICCIONES
  - nums tiene al menos 1 elemento. Puede haber repetidos.

QUÉ DEBES HACER
  1. Declara la función isSortedAndRotated(nums). Recibe un arreglo y devuelve un booleano.
  2. Crea la variable «descensos» con valor 0.
  3. Recorre nums con un for: i empieza en 0, continúa mientras i < nums.length y avanza de 1 en 1.
  4. En cada vuelta compara nums[i] con el siguiente elemento, que está en la posición
     (i + 1) % nums.length (para el último, el siguiente es el primero).
  5. Si nums[i] es MAYOR que ese siguiente, suma 1 a «descensos».
  6. Al terminar el bucle, devuelve descensos <= 1.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(isSortedAndRotated([3, 4, 5, 1, 2]));   // true
  console.log(isSortedAndRotated([2, 1, 3, 4]));      // false   (dos descensos: 2→1 y 4→2)
  console.log(isSortedAndRotated([1, 2, 3]));         // true    (sin rotar)
  console.log(isSortedAndRotated([1, 1, 1]));         // true    (todos iguales)
  console.log(isSortedAndRotated([2, 1]));            // true
  console.log(isSortedAndRotated([1]));               // true    (un solo elemento)
  console.log(isSortedAndRotated([3, 1, 2, 4, 0]));   // false

EXPLICA
  ¿Por qué hay que comparar también el último elemento con el primero?
*/
// TU SOLUCIÓN


// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE D — ARREGLOS DE ARREGLOS (MATRICES)
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 17 — Cliente más rico (LC 1672 · Richest Customer Wealth)
/*
SITUACIÓN
  Un banco guarda el dinero de cada cliente en varias cuentas. Los datos están en una matriz:
  cada FILA es un cliente y cada COLUMNA, una cuenta (matriz[cliente][cuenta]). La riqueza de
  un cliente es la suma de todas sus cuentas. Recibes la matriz y devuelves la riqueza del
  cliente más rico.

  Ejemplo: en [[1, 5], [7, 3], [3, 5]] las riquezas son 6, 10 y 8: la respuesta es 10.

  Idea: bucles anidados con un acumulador por nivel. El bucle exterior recorre clientes; el
  interior suma las cuentas de ese cliente en una variable que se reinicia con cada cliente.
  Al terminar cada cliente se compara su suma con la mejor vista.

RESTRICCIONES
  - Hay al menos 1 cliente y 1 cuenta. Todo el dinero es 0 o mayor.

QUÉ DEBES HACER
  1. Declara la función maximumWealth(accounts). Recibe una matriz y devuelve un número.
  2. Crea la variable «mayor» con valor 0. (Aquí sí puede empezar en 0: nadie tiene dinero
     negativo.)
  3. Recorre las filas con un for: i empieza en 0, continúa mientras i < accounts.length y avanza
     de 1 en 1.
  4. DENTRO de esa vuelta, crea «riqueza» con valor 0 (se reinicia por cliente) y recorre las
     columnas de accounts[i] con otro for (j desde 0 mientras j < accounts[i].length),
     sumando accounts[i][j] a «riqueza».
  5. Al terminar el bucle interior, si «riqueza» es mayor que «mayor», guárdala en «mayor».
  6. Al terminar el bucle exterior, devuelve «mayor».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));             // 6   (empate entre los dos)
  console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));           // 10
  console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));  // 17
  console.log(maximumWealth([[5]]));                              // 5   (un cliente, una cuenta)
  console.log(maximumWealth([[0, 0], [0, 0]]));                   // 0   (todos sin dinero)

EXPLICA
  ¿Qué pasaría si declararas «riqueza» fuera de los bucles, antes del primer for?
COMPLEJIDAD
  Si la matriz tiene m filas y n columnas, ¿cuál es el tiempo de tu solución?
*/
// TU SOLUCIÓN


// EJERCICIO 18 — Diferencia de diagonales (HR · Diagonal Difference)
/*
SITUACIÓN
  Una matriz cuadrada de n × n tiene dos diagonales: la principal (de la esquina superior
  izquierda a la inferior derecha) y la secundaria (de la esquina superior derecha a la
  inferior izquierda). Recibes la matriz y devuelves el valor absoluto de la diferencia entre
  la suma de las dos diagonales.

  Ejemplo: en [[11, 2, 4], [4, 5, 6], [10, 8, -12]] la principal suma 11 + 5 + (-12) = 4 y la
  secundaria suma 4 + 5 + 10 = 19. La diferencia es |4 - 19| = 15.

  Idea: un solo bucle, no dos. En la fila i, el elemento de la diagonal principal está en la
  columna i, y el de la secundaria en la columna n - 1 - i.

RESTRICCIONES
  - La matriz es cuadrada, con al menos 1 fila.

QUÉ DEBES HACER
  1. Declara la función diagonalDifference(matrix). Recibe una matriz y devuelve un número.
  2. Crea «n» con valor matrix.length, y las variables «principal» y «secundaria», ambas con
     valor 0.
  3. Recorre las filas con un for: i empieza en 0, continúa mientras i < n y avanza de 1 en 1.
  4. En cada vuelta, suma matrix[i][i] a «principal» y matrix[i][n - 1 - i] a «secundaria».
  5. Devuelve Math.abs(principal - secundaria).
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));   // 15
  console.log(diagonalDifference([[1, 2], [3, 4]]));                        // 0    (5 y 5)
  console.log(diagonalDifference([[5]]));                                   // 0    (una sola celda)
  console.log(diagonalDifference([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));       // 2    (3 contra 1)

EXPLICA
  ¿Por qué la columna de la diagonal secundaria es n - 1 - i? Compruébalo con n = 3 para
  i = 0, 1 y 2.
*/
// TU SOLUCIÓN


// EJERCICIO 19 — Transponer una matriz (LC 867 · Transpose Matrix)
/*
SITUACIÓN
  Transponer una matriz es girarla sobre su diagonal: las filas pasan a ser columnas y las
  columnas, filas. Si la matriz original tiene m filas y n columnas, la nueva tiene n filas y
  m columnas. Recibes una matriz y devuelves una matriz nueva.

  Ejemplo: [[1, 2, 3], [4, 5, 6]] (2 filas, 3 columnas) → [[1, 4], [2, 5], [3, 6]] (3 filas,
  2 columnas). El elemento de la fila 0 y columna 2 (el 3) pasa a la fila 2 y columna 0.

  Idea: se construye la nueva matriz fila por fila. Cada fila nueva se forma recorriendo la
  columna c de la original de arriba abajo: matriz[0][c], matriz[1][c], matriz[2][c]...

RESTRICCIONES
  - La matriz tiene al menos 1 fila y 1 columna y es rectangular (todas las filas miden lo mismo).

QUÉ DEBES HACER
  1. Declara la función transpose(matrix). Recibe una matriz y devuelve una matriz nueva.
  2. Crea «filas» con valor matrix.length, «columnas» con valor matrix[0].length y «resultado»
     con valor [].
  3. Recorre las columnas de la original con un for: c empieza en 0, continúa mientras
     c < columnas y avanza de 1 en 1.
  4. En cada vuelta crea «nuevaFila» con valor [] y recorre las filas de la original con otro
     for: f empieza en 0, continúa mientras f < filas y avanza de 1 en 1. En cada vuelta de
     f, agrega matrix[f][c] a «nuevaFila».
  5. Al terminar el bucle interior, agrega «nuevaFila» a «resultado».
  6. Al terminar el bucle exterior, devuelve «resultado». La matriz original debe quedar intacta.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));   // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  console.log(transpose([[1, 2, 3], [4, 5, 6]]));              // [[1, 4], [2, 5], [3, 6]]
  console.log(transpose([[1]]));                               // [[1]]
  console.log(transpose([[1, 2]]));                            // [[1], [2]]   (una fila → una columna)
  console.log(transpose([[1], [2], [3]]));                     // [[1, 2, 3]]  (una columna → una fila)

EXPLICA
  ¿Cuántas filas y columnas tiene el resultado respecto a la original? ¿Por qué el bucle
  exterior recorre columnas y no filas?
*/
// TU SOLUCIÓN


// EJERCICIO 20 — Triángulo de Pascal (LC 118 · Pascal's Triangle)
/*
SITUACIÓN
  El triángulo de Pascal se construye fila por fila: la primera fila es [1]; cada fila
  siguiente empieza y termina con 1, y cada elemento del medio es la suma de los dos que tiene
  justo encima (el de arriba a la izquierda y el de arriba). Recibes cuántas filas generar y
  devuelves una matriz con todas las filas.

  Ejemplo: con 4 filas: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]. El 3 de la última fila es
  1 + 2, los dos elementos que tiene encima.

  Idea: construir cada fila usando la anterior. La fila número «fila» (empezando en 0) tiene
  «fila + 1» elementos; en la posición j, si no es un extremo, vale triangulo[fila - 1][j - 1]
  + triangulo[fila - 1][j].

RESTRICCIONES
  - numRows es un entero mayor o igual que 0 (con 0 se devuelve un triángulo vacío).

QUÉ DEBES HACER
  1. Declara la función generatePascal(numRows). Recibe un entero y devuelve una matriz.
  2. Crea el arreglo «triangulo» con valor [].
  3. Recorre las filas con un for: «fila» empieza en 0, continúa mientras fila < numRows y avanza
     de 1 en 1.
  4. En cada vuelta crea «nueva» con valor [] y recorre las posiciones con otro for: j empieza
     en 0, continúa mientras j <= fila y avanza de 1 en 1.
  5. En cada posición j: si j es 0 o j es igual a «fila» (los extremos), agrega 1 a «nueva»; si
     no, agrega triangulo[fila - 1][j - 1] + triangulo[fila - 1][j].
  6. Al terminar el bucle interior, agrega «nueva» a «triangulo».
  7. Al terminar el bucle exterior, devuelve «triangulo».
  8. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(generatePascal(5));   // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
  console.log(generatePascal(1));   // [[1]]
  console.log(generatePascal(0));   // []                    (sin filas)
  console.log(generatePascal(3));   // [[1], [1, 1], [1, 2, 1]]
  console.log(generatePascal(6)[5]);   // [1, 5, 10, 10, 5, 1]   (la última fila de 6)

EXPLICA
  ¿Por qué el segundo bucle llega hasta j <= fila y no hasta j < fila?
COMPLEJIDAD
  ¿Cuántos elementos tiene el triángulo para n filas? ¿Cuál es el tiempo de tu solución?
*/
// TU SOLUCIÓN


// ═══════════════════════════════════════════════════════════════════════════
// PRUEBAS AUTOMÁTICAS — NO EDITAR DE AQUÍ HACIA ABAJO
// Ejecuta:  node Arrays.js
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

probar(1, 'runningSum', () => {
    igual(runningSum([1, 2, 3, 4]), [1, 3, 6, 10])
    igual(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17])
    igual(runningSum([-1, 2]), [-1, 1])
    igual(runningSum([5]), [5])
    igual(runningSum([]), [])
    noMuta(runningSum, [1, 2, 3])
})

probar(2, 'missingNumber', () => {
    igual(missingNumber([3, 0, 1]), 2)
    igual(missingNumber([0, 1]), 2)
    igual(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8)
    igual(missingNumber([0]), 1)
    igual(missingNumber([1]), 0)
    noMuta(missingNumber, [3, 0, 1])
})

probar(3, 'pivotIndex', () => {
    igual(pivotIndex([1, 7, 3, 6, 5, 6]), 3)
    igual(pivotIndex([1, 2, 3]), -1)
    igual(pivotIndex([2, 1, -1]), 0)
    igual(pivotIndex([0]), 0)
    igual(pivotIndex([]), -1)
    igual(pivotIndex([-1, -1, 0, 1, 1, 0]), 5)
    noMuta(pivotIndex, [1, 7, 3, 6, 5, 6])
})

probar(4, 'findMaxConsecutiveOnes', () => {
    igual(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3)
    igual(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]), 2)
    igual(findMaxConsecutiveOnes([0, 0]), 0)
    igual(findMaxConsecutiveOnes([1, 1, 1]), 3)
    igual(findMaxConsecutiveOnes([1]), 1)
    igual(findMaxConsecutiveOnes([]), 0)
})

probar(5, 'findClosestNumber', () => {
    igual(findClosestNumber([-4, -2, 1, 4, 8]), 1)
    igual(findClosestNumber([2, -1, 1]), 1)
    igual(findClosestNumber([-3, 2, -2, 3]), 2)
    igual(findClosestNumber([5]), 5)
    igual(findClosestNumber([-5]), -5)
    igual(findClosestNumber([3, 0, -1]), 0)
    igual(findClosestNumber([-1, 1]), 1)
})

probar(6, 'birthdayCakeCandles', () => {
    igual(birthdayCakeCandles([3, 2, 1, 3]), 2)
    igual(birthdayCakeCandles([4, 4, 1, 3]), 2)
    igual(birthdayCakeCandles([1]), 1)
    igual(birthdayCakeCandles([5, 5, 5]), 3)
    igual(birthdayCakeCandles([1, 2, 3, 4]), 1)
    igual(birthdayCakeCandles([3, 3, 5]), 1)
    igual(birthdayCakeCandles([]), 0)
})

probar(7, 'miniMaxSum', () => {
    igual(miniMaxSum([1, 2, 3, 4, 5]), [10, 14])
    igual(miniMaxSum([7, 69, 2, 221, 8974]), [299, 9271])
    igual(miniMaxSum([5, 5, 5, 5, 5]), [20, 20])
    igual(miniMaxSum([1, 2]), [1, 2])
    noMuta(miniMaxSum, [3, 1, 2])
})

probar(8, 'plusMinus', () => {
    igual(plusMinus([-4, 3, -9, 0, 4, 1]), [0.5, 0.333333, 0.166667])
    igual(plusMinus([1, 1, 0, -1, -1]), [0.4, 0.4, 0.2])
    igual(plusMinus([0]), [0, 0, 1])
    igual(plusMinus([1, 2, 3]), [1, 0, 0])
    igual(plusMinus([-1, -2]), [0, 1, 0])
})

probar(9, 'isMonotonic', () => {
    igual(isMonotonic([1, 2, 2, 3]), true)
    igual(isMonotonic([6, 5, 4, 4]), true)
    igual(isMonotonic([1, 3, 2]), false)
    igual(isMonotonic([1, 1, 1]), true)
    igual(isMonotonic([5]), true)
    igual(isMonotonic([]), true)
    igual(isMonotonic([3, 2, 3]), false)
})

probar(10, 'canPlaceFlowers', () => {
    igual(canPlaceFlowers([1, 0, 0, 0, 1], 1), true)
    igual(canPlaceFlowers([1, 0, 0, 0, 1], 2), false)
    igual(canPlaceFlowers([0, 0, 0], 2), true)
    igual(canPlaceFlowers([0], 1), true)
    igual(canPlaceFlowers([1], 1), false)
    igual(canPlaceFlowers([0, 0, 1, 0, 0], 2), true)
    igual(canPlaceFlowers([1, 0, 1], 0), true)
    igual(canPlaceFlowers([0, 0, 0, 0, 0], 3), true)
    igual(canPlaceFlowers([0, 0, 0, 0, 0], 4), false)
    noMuta(canPlaceFlowers, [0, 0, 0], 2)
})

probar(11, 'thirdMax', () => {
    igual(thirdMax([3, 2, 1]), 1)
    igual(thirdMax([1, 2]), 2)
    igual(thirdMax([2, 2, 3, 1]), 1)
    igual(thirdMax([1, 1, 2]), 2)
    igual(thirdMax([5, 2, 2]), 5)
    igual(thirdMax([3, 3, 3]), 3)
    igual(thirdMax([1, 2, -5]), -5)
    igual(thirdMax([1, 2, 3, 4]), 2)
    noMuta(thirdMax, [3, 1, 2])
})

probar(12, 'dominantIndex', () => {
    igual(dominantIndex([3, 6, 1, 0]), 1)
    igual(dominantIndex([1, 2, 3, 4]), -1)
    igual(dominantIndex([1]), 0)
    igual(dominantIndex([0, 0, 3, 2]), -1)
    igual(dominantIndex([0, 0, 0, 1]), 3)
    igual(dominantIndex([5, 10]), 1)
    igual(dominantIndex([3, 3]), -1)
})

probar(13, 'removeElement', () => {
    const a = [3, 2, 2, 3]
    const k = removeElement(a, 3)
    igual(k, 2)
    igual(a.slice(0, k), [2, 2])
    const b = [0, 1, 2, 2, 3, 0, 4, 2]
    const k2 = removeElement(b, 2)
    igual(k2, 5)
    igual(b.slice(0, k2), [0, 1, 3, 0, 4])
    igual(removeElement([], 1), 0)
    igual(removeElement([1], 1), 0)
    const c = [1, 2, 3]
    igual(removeElement(c, 4), 3)
    igual(c, [1, 2, 3])
})

probar(14, 'removeDuplicates', () => {
    const a = [1, 1, 2]
    const k = removeDuplicates(a)
    igual(k, 2)
    igual(a.slice(0, k), [1, 2])
    const b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const k2 = removeDuplicates(b)
    igual(k2, 5)
    igual(b.slice(0, k2), [0, 1, 2, 3, 4])
    igual(removeDuplicates([]), 0)
    igual(removeDuplicates([1]), 1)
    igual(removeDuplicates([1, 2, 3]), 3)
    const c = [2, 2, 2]
    igual(removeDuplicates(c), 1)
    igual(c[0], 2)
})

probar(15, 'shuffle', () => {
    igual(shuffle([2, 5, 1, 3, 4, 7], 3), [2, 3, 5, 4, 1, 7])
    igual(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4), [1, 4, 2, 3, 3, 2, 4, 1])
    igual(shuffle([1, 1, 2, 2], 2), [1, 2, 1, 2])
    igual(shuffle([1, 2], 1), [1, 2])
    igual(shuffle([], 0), [])
    noMuta(shuffle, [2, 5, 1, 3, 4, 7], 3)
})

probar(16, 'isSortedAndRotated', () => {
    igual(isSortedAndRotated([3, 4, 5, 1, 2]), true)
    igual(isSortedAndRotated([2, 1, 3, 4]), false)
    igual(isSortedAndRotated([1, 2, 3]), true)
    igual(isSortedAndRotated([1, 1, 1]), true)
    igual(isSortedAndRotated([2, 1]), true)
    igual(isSortedAndRotated([1]), true)
    igual(isSortedAndRotated([3, 1, 2, 4, 0]), false)
    igual(isSortedAndRotated([6, 10, 6]), true)
})

probar(17, 'maximumWealth', () => {
    igual(maximumWealth([[1, 2, 3], [3, 2, 1]]), 6)
    igual(maximumWealth([[1, 5], [7, 3], [3, 5]]), 10)
    igual(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]), 17)
    igual(maximumWealth([[5]]), 5)
    igual(maximumWealth([[0, 0], [0, 0]]), 0)
    noMuta(maximumWealth, [[1, 5], [7, 3]])
})

probar(18, 'diagonalDifference', () => {
    igual(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]), 15)
    igual(diagonalDifference([[1, 2], [3, 4]]), 0)
    igual(diagonalDifference([[5]]), 0)
    igual(diagonalDifference([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), 2)
    igual(diagonalDifference([[1, 2], [3, 9]]), 5)
})

probar(19, 'transpose', () => {
    igual(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[1, 4, 7], [2, 5, 8], [3, 6, 9]])
    igual(transpose([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]])
    igual(transpose([[1]]), [[1]])
    igual(transpose([[1, 2]]), [[1], [2]])
    igual(transpose([[1], [2], [3]]), [[1, 2, 3]])
    noMuta(transpose, [[1, 2, 3], [4, 5, 6]])
})

probar(20, 'generatePascal', () => {
    igual(generatePascal(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
    igual(generatePascal(1), [[1]])
    igual(generatePascal(0), [])
    igual(generatePascal(3), [[1], [1, 1], [1, 2, 1]])
    igual(generatePascal(6)[5], [1, 5, 10, 10, 5, 1])
})
