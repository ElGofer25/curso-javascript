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
  1. Lee SITUACIÓN y RESTRICCIONES: te dicen qué problema resuelves, qué datos puedes esperar
     y con qué herramientas puedes (y no puedes) resolverlo.
  2. QUÉ DEBES HACER dice QUÉ debe cumplir la función (entradas, salida, reglas y bordes), no
     cómo: tú decides el algoritmo, respetando RESTRICCIONES.
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

RESTRICCIONES = Datos (qué puedes esperar) / Usa (estructura de datos, bucle o método que debes
emplear) / No uses (lo que está prohibido en ese ejercicio).

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
    regulares, Set y Map. Cada ejercicio concreta en «No uses» lo prohibido en él (puede
    añadir más cosas a esta lista). El objetivo es dominar bucles, índices y condiciones.
  - Siempre permitido: variables, if/else, for, while, for...of, .length, .push() y Math.abs.
  - No hay soluciones incluidas. Las pruebas automáticas están al final: no las edites.
*/

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE A — RECORRIDOS Y ACUMULADORES
// ═══════════════════════════════════════════════════════════════════════════

//! EJERCICIO 01 — Suma acumulada (LC 1480 · Running Sum of 1d Array)
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
  Datos:
  - El arreglo puede estar vacío y puede tener números negativos.
  Usa:
  - Un arreglo de números como entrada y un arreglo nuevo como salida (se construye con .push()).
  - Un solo recorrido con for...of.
  No uses:
  - map, reduce, slice ni ningún método de arreglo que construya el resultado por ti.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función runningSum(nums). Recibe un arreglo de números y devuelve un arreglo nuevo.
  2. El arreglo devuelto tiene el mismo tamaño que nums: en la posición i va la suma de nums[0]
     hasta nums[i], ambos incluidos.
  3. nums queda intacto. Con un arreglo vacío devuelve [].
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(runningSum([1, 2, 3, 4]));          // [1, 3, 6, 10]
  console.log(runningSum([3, 1, 2, 10, 1]));      // [3, 4, 6, 16, 17]
  console.log(runningSum([-1, 2]));               // [-1, 1]            (hay negativos)
  console.log(runningSum([5]));                   // [5]                (un solo elemento)
  console.log(runningSum([]));                    // []                 (arreglo vacío)

EXPLICA
  ¿Por qué «suma» se declara fuera del bucle? ¿Qué pasaría si se declarara dentro?
  Suma se declara fuera del bucle porque si tiene un valor inicial según la lógica. Además, si lo declaramos dentro, no podríamos llevar a cabo la suma pues el valor se perdería en cada iteración del bucle.
  Básicamente, suma tiene que ir almacenando y sumando los valores durante el recorrido.
*/
// TU SOLUCIÓN

{
    function runningSum(nums){
        let suma = 0;
        let newArray = [];

        for(const n of nums){
            suma += n
            newArray.push(suma)
        }
        return newArray
    }
}



//! EJERCICIO 02 — Número faltante (LC 268 · Missing Number)
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
  Datos:
  - nums contiene n enteros distintos, todos entre 0 y n (ambos incluidos). Falta exactamente un
    valor de ese rango.
  - n puede ser 1 (un arreglo de un solo elemento).
  Usa:
  - Un arreglo de enteros como entrada; solo variables numéricas, sin arreglos auxiliares.
  - Un solo recorrido, con for o for...of.
  No uses:
  - sort, includes, indexOf, Set, Map ni bucles anidados.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función missingNumber(nums). Recibe un arreglo de n enteros y devuelve un entero.
  2. Devuelve el único valor del rango de 0 a n (ambos incluidos) que no aparece en nums.
  3. Con [0] devuelve 1 y con [1] devuelve 0. nums queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(missingNumber([3, 0, 1]));                  // 2
  console.log(missingNumber([0, 1]));                     // 2   (falta el último)
  console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
  console.log(missingNumber([0]));                        // 1
  console.log(missingNumber([1]));                        // 0   (falta el primero)

EXPLICA
  ¿Por qué falta justamente la diferencia entre las dos sumas?
    Lo que pasa es que la formula de gauss nos dice cuanto sumarían los elementos SÍ ESTUVIERAN COMPLETOS, entonces. Considerando que el elemento que falta está entre el intervalo [0, n]; habría que calcular la suma de gauss y restarle la suma de los elementos existentes para así obtener el valor ausente.
    En pocas palabras, el valor ausente si entra en la suma de gauss pero no en la segunda suma. Como el valor de gauss sería mayor al de la segunda suma, esa diferencia nos da el valor faltante.
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra? El tiempo es lineal, podríamos considerar: O(n)
  ¿Cómo sería con dos bucles anidados (buscar cada número del 0 al n)? En cuestión de tiempo, sería On2
*/
// TU SOLUCIÓN
{
    function missingNumber(nums){
        const gauss = (nums.length*(nums.length+1)/2)
        let suma = 0;

        for(const i of nums){
            suma += i
        }
        return (gauss - suma)
    }
}

//! EJERCICIO 03 — Índice de equilibrio (LC 724 · Find Pivot Index)
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
  Datos:
  - El arreglo puede estar vacío y puede tener números negativos.
  - Un lado sin elementos suma 0.
  Usa:
  - Un arreglo de enteros como entrada; solo variables numéricas, sin arreglos auxiliares.
  - Bucles for con índice, sin anidarlos: como máximo dos recorridos en total.
  No uses:
  - Bucles anidados, reduce, slice ni arreglos auxiliares.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función pivotIndex(nums). Recibe un arreglo de enteros y devuelve un entero.
  2. Devuelve el índice i más pequeño que cumple que la suma de los elementos con índice menor que
     i es igual a la suma de los elementos con índice mayor que i (nums[i] no cuenta en ninguno de
     los dos lados).
  3. Si ningún índice cumple la condición, o si nums está vacío, devuelve -1. nums queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(pivotIndex([1, 7, 3, 6, 5, 6]));   // 3
  console.log(pivotIndex([1, 2, 3]));            // -1   (ningún índice equilibra)
  console.log(pivotIndex([2, 1, -1]));           // 0    (izquierda vacía = 0; derecha 1 + -1 = 0)
  console.log(pivotIndex([0]));                  // 0    (ambos lados vacíos)
  console.log(pivotIndex([]));                   // -1   (arreglo vacío)

EXPLICA
  ¿Qué pasa con el rendimiento si en cada posición sumas la izquierda y la derecha con dos
  bucles nuevos? Sigue siendo On, son dos bucles que no están anidados, así que no aumentan la complejidad temporal.
  ¿Cuál es el tiempo y el espacio extra de tu solución?
  On ambos
*/
// TU SOLUCIÓN
{
    function pivotIndex(nums){

        let total = 0;
        for(let i = 0; i < nums.length; i++){
            total += nums[i]
        }

        let izquierda = 0;
        for(let i = 0; i < nums.length; i++){
            let derecha = total - izquierda - nums[i];
            if(  izquierda === derecha ){ 
                return i
            }else{
            izquierda += nums[i]
            }
        }
        return -1
    }
}

//! EJERCICIO 04 — La racha de unos más larga (LC 485 · Max Consecutive Ones)
/*
SITUACIÓN
  Un sensor registra 1 cuando detecta movimiento y 0 cuando no. Quieres saber cuál fue el
  periodo continuo más largo con movimiento. Recibes un arreglo de ceros y unos y devuelves
  cuántos unos seguidos hubo como máximo.

  Ejemplo: en [1, 1, 0, 1, 1, 1] hay una racha de 2 unos y luego otra de 3: la respuesta es 3.

  Idea: dos acumuladores con preguntas distintas. «actual»: ¿cuántos unos seguidos llevo ahora?
  (se reinicia con cada 0). «mejor»: ¿cuál fue la racha más larga que he visto? (solo crece).

RESTRICCIONES
  Datos:
  - El arreglo solo contiene 0 y 1, y puede estar vacío.
  Usa:
  - Un arreglo de ceros y unos como entrada; solo variables numéricas, sin arreglos auxiliares.
  - Un solo recorrido con for...of.
  No uses:
  - Math.max, reduce, sort, split, join ni arreglos auxiliares.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función findMaxConsecutiveOnes(nums). Recibe un arreglo de 0 y 1 y devuelve un
     número.
  2. Devuelve la longitud de la tira más larga de unos seguidos (sin ningún 0 en medio) que hay en
     nums.
  3. Si no hay ningún 1, o si nums está vacío, devuelve 0. nums queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));   // 3
  console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));   // 2
  console.log(findMaxConsecutiveOnes([0, 0]));               // 0   (no hay unos)
  console.log(findMaxConsecutiveOnes([1, 1, 1]));            // 3   (la racha llega hasta el final)
  console.log(findMaxConsecutiveOnes([1]));                  // 1
  console.log(findMaxConsecutiveOnes([]));                   // 0   (arreglo vacío)

EXPLICA
  ¿Por qué se actualiza «mejor» dentro del if y no solo cuando aparece un 0? 
    R: Porque buscamos encontrar la 'racha' más grande. Eso solo lo logramos con un comparador

  ¿Qué falla con [1, 1, 1] si solo lo actualizas en el 0?
  R: Que nunca se actualiza, como la condición de cambio es 'i===0'; la condición nunca se cumple.
*/
// TU SOLUCIÓN
{

    function findMaxConsecutiveOnes(nums) {
        let mejor = 0;
        let actual = 0;

        for (const i of nums) {
            if (i === 1) actual += 1;

            if (actual > mejor) {
                mejor = actual
            }
            if( i == 0){
                actual = 0;
            }

        }
        return mejor
    }
}

//! EJERCICIO 05 — El número más cercano a cero (LC 2239 · Find Closest Number to Zero)
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
  Datos:
  - nums tiene al menos 1 elemento. Puede haber ceros y repetidos.
  Usa:
  - Un arreglo de números como entrada; solo variables numéricas, sin arreglos auxiliares.
  - Un solo recorrido, con for o for...of, y Math.abs.
  No uses:
  - sort, Math.min, reduce, filter ni arreglos auxiliares.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función findClosestNumber(nums). Recibe un arreglo de números y devuelve un número.
  2. Devuelve el elemento de nums cuyo valor absoluto es el menor (el elemento, no su distancia).
     Con un solo elemento, devuelve ese elemento.
  3. Si hay un empate de distancia (por ejemplo -2 y 2), devuelve el elemento positivo. nums queda
     intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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

{
    function findClosestNumber(nums){
        let numberOne = nums[0];
        let numberTwo;

        if(nums.length < 2) return nums;

        for(const i of nums){
            if( matchMedia.abs(i) < numberOne ){
                numberTwo = numberOne
            }

        }
    }
}

//! EJERCICIO 06 — Velas del pastel (HR · Birthday Cake Candles)
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
  Datos:
  - Las alturas son enteros positivos.
  - El arreglo puede estar vacío.
  Usa:
  - Un arreglo de enteros como entrada; solo variables numéricas, sin arreglos auxiliares.
  - Un solo recorrido, con for o for...of.
  No uses:
  - Math.max, sort, filter, reduce ni un segundo recorrido.
  - No modifiques candles.

QUÉ DEBES HACER
  1. Declara la función birthdayCakeCandles(candles). Recibe un arreglo de enteros y devuelve un
     número.
  2. Devuelve cuántos elementos de candles son iguales al valor máximo del arreglo (la cantidad,
     no el valor).
  3. Con un arreglo vacío devuelve 0. candles queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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

//! EJERCICIO 07 — Suma mínima y máxima (HR · Mini-Max Sum)
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
  Datos:
  - El arreglo tiene al menos 2 elementos. Puede haber repetidos.
  Usa:
  - Un arreglo de enteros como entrada; solo variables numéricas, sin arreglos auxiliares.
  - Un solo recorrido con for...of. El resultado se devuelve como un arreglo literal de dos números.
  No uses:
  - sort, Math.min, Math.max, reduce, slice ni arreglos auxiliares.
  - No modifiques arr.

QUÉ DEBES HACER
  1. Declara la función miniMaxSum(arr). Recibe un arreglo de enteros y devuelve un arreglo de dos
     números [sumaMinima, sumaMaxima].
  2. Cada suma se obtiene sumando todos los elementos de arr menos exactamente uno. sumaMinima es
     la menor de esas sumas posibles y sumaMaxima la mayor.
  3. Si todos los elementos son iguales, ambos valores coinciden. arr queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(miniMaxSum([1, 2, 3, 4, 5]));             // [10, 14]
  console.log(miniMaxSum([7, 69, 2, 221, 8974]));       // [299, 9271]
  console.log(miniMaxSum([5, 5, 5, 5, 5]));             // [20, 20]    (todos iguales)
  console.log(miniMaxSum([1, 2]));                      // [1, 2]      (el mínimo de elementos)

EXPLICA
  ¿Por qué no hace falta ordenar el arreglo?
*/
// TU SOLUCIÓN


//! EJERCICIO 08 — Proporciones (HR · Plus Minus)
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
  Datos:
  - El arreglo tiene al menos 1 elemento.
  Usa:
  - Un arreglo de enteros como entrada; solo variables numéricas, sin arreglos auxiliares para
    contar.
  - Un solo recorrido con for...of. Para redondear: Number((x).toFixed(6)).
  No uses:
  - filter, reduce, Math.round ni un segundo recorrido.
  - No modifiques arr.

QUÉ DEBES HACER
  1. Declara la función plusMinus(arr). Recibe un arreglo de enteros y devuelve un arreglo de tres
     números [proporciónPositivos, proporciónNegativos, proporciónCeros].
  2. Cada proporción es la cantidad de elementos de esa clase (mayores que 0, menores que 0 o
     iguales a 0) dividida entre arr.length, redondeada a 6 decimales.
  3. Si una clase no tiene elementos, su proporción es 0. arr queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(plusMinus([-4, 3, -9, 0, 4, 1]));   // [0.5, 0.333333, 0.166667]
  console.log(plusMinus([1, 1, 0, -1, -1]));      // [0.4, 0.4, 0.2]
  console.log(plusMinus([0]));                    // [0, 0, 1]           (solo ceros)
  console.log(plusMinus([1, 2, 3]));              // [1, 0, 0]           (solo positivos)

EXPLICA
  ¿Por qué se cuenta primero y se divide al final, en lugar de dividir en cada vuelta?
*/
// TU SOLUCIÓN


//! EJERCICIO 09 — Arreglo monótono (LC 896 · Monotonic Array)
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
  Datos:
  - El arreglo puede estar vacío o tener un solo elemento.
  Usa:
  - Un arreglo de números como entrada y un booleano como salida; solo variables, sin arreglos
    auxiliares.
  - Un solo recorrido con for.
  No uses:
  - sort, every, some, slice, reverse ni arreglos auxiliares.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función isMonotonic(nums). Recibe un arreglo de números y devuelve un booleano.
  2. Devuelve true si cada elemento es mayor o igual que el anterior (nunca baja) o si cada
     elemento es menor o igual que el anterior (nunca sube). Devuelve false si hay al menos una
     subida y al menos una bajada.
  3. Con un arreglo vacío o de un solo elemento devuelve true. nums queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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


//! EJERCICIO 10 — Sembrar flores (LC 605 · Can Place Flowers)
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
  Datos:
  - El parterre solo contiene 0 y 1, y al inicio no hay dos flores en posiciones vecinas.
  - n es un entero mayor o igual que 0.
  Usa:
  - Un arreglo de 0 y 1 y un número como entrada; un booleano como salida.
  - Un solo recorrido con for con índice.
  No uses:
  - splice, slice, regex ni recursión.
  - No modifiques flowerbed.

QUÉ DEBES HACER
  1. Declara la función canPlaceFlowers(flowerbed, n). Recibe un arreglo de 0 y 1 y un número, y
     devuelve un booleano.
  2. Dos posiciones son vecinas si sus índices son consecutivos; los extremos solo tienen un
     vecino. Una flor nueva solo puede ir en una posición con 0, y ninguna flor (ya sembrada o
     nueva) puede quedar vecina de otra.
  3. Devuelve true si se pueden sembrar al menos n flores nuevas cumpliendo esa regla y false en
     caso contrario. Con n igual a 0 devuelve true. flowerbed queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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


//! EJERCICIO 11 — Tercer mayor distinto (LC 414 · Third Maximum Number)
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
  Datos:
  - nums tiene al menos 1 elemento. Puede haber repetidos y negativos.
  Usa:
  - Un arreglo de números como entrada; solo variables, sin arreglos auxiliares.
  - Un solo recorrido con for...of.
  No uses:
  - sort, Set, Map, includes, Math.max, Math.min ni arreglos auxiliares.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función thirdMax(nums). Recibe un arreglo de números y devuelve un número.
  2. Devuelve el tercer valor más grande entre los valores distintos de nums (un valor repetido
     cuenta una sola vez).
  3. Si nums tiene menos de tres valores distintos, devuelve el valor más grande. nums queda
     intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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


//! EJERCICIO 12 — Dominante al doble (LC 747 · Largest Number At Least Twice of Others)
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
  Datos:
  - nums tiene al menos 1 elemento. Todos los valores son 0 o mayores.
  Usa:
  - Un arreglo de enteros como entrada; solo variables numéricas, sin arreglos auxiliares.
  - Un solo recorrido con for.
  No uses:
  - sort, Math.max, indexOf, bucles anidados ni arreglos auxiliares.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función dominantIndex(nums). Recibe un arreglo de enteros y devuelve un entero.
  2. Sea M el valor más grande de nums. Devuelve el índice de M si M es mayor o igual que el doble
     de cada uno de los demás elementos; si no, devuelve -1.
  3. Si M aparece más de una vez, devuelve -1. Con un solo elemento devuelve 0. nums queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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

//! EJERCICIO 13 — Quitar un valor en el sitio (LC 27 · Remove Element)
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
  Datos:
  - nums puede estar vacío y val puede no aparecer en él.
  Usa:
  - Un arreglo de números que se modifica EN EL SITIO; solo variables numéricas, sin arreglos
    auxiliares.
  - Un solo recorrido con for con índice.
  No uses:
  - splice, filter, slice, push ni ningún arreglo auxiliar o copia.
  - slice aparece en las líneas de COMPRUEBA solo para mirar las primeras k posiciones; tu
    solución no debe usarlo.

QUÉ DEBES HACER
  1. Declara la función removeElement(nums, val). Recibe un arreglo de números y un valor, y
     devuelve un entero k.
  2. k es la cantidad de elementos de nums distintos de val.
  3. Al terminar, las primeras k posiciones de nums contienen esos elementos, en su orden
     original. Lo que haya desde la posición k en adelante no importa.
  4. Con un arreglo vacío o si val no aparece, el resultado sigue esa misma regla (k = 0, o k =
     nums.length con el arreglo igual).
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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


//! EJERCICIO 14 — Quitar repetidos de un arreglo ordenado (LC 26 · Remove Duplicates from Sorted Array)
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
  Datos:
  - El arreglo está ordenado de menor a mayor, puede tener repetidos y puede estar vacío.
  Usa:
  - Un arreglo de números que se modifica EN EL SITIO; solo variables numéricas, sin arreglos
    auxiliares.
  - Un solo recorrido con for con índice.
  No uses:
  - splice, filter, slice, Set ni ningún arreglo auxiliar o copia.

QUÉ DEBES HACER
  1. Declara la función removeDuplicates(nums). Recibe un arreglo ordenado de menor a mayor y
     devuelve un entero k.
  2. k es la cantidad de valores distintos de nums.
  3. Al terminar, las primeras k posiciones de nums contienen esos valores distintos, una vez cada
     uno y en orden ascendente. Lo que haya desde la posición k en adelante no importa.
  4. Con un arreglo vacío devuelve 0.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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


//! EJERCICIO 15 — Intercalar dos mitades (LC 1470 · Shuffle the Array)
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
  Datos:
  - nums.length es exactamente 2 × n. Puede ser 0 (n = 0).
  Usa:
  - Un arreglo de números y un número como entrada; un arreglo nuevo como salida (se construye con
    .push()).
  - Un solo recorrido con for con índice.
  No uses:
  - map, slice, concat, splice ni ningún método que arme el resultado por ti.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función shuffle(nums, n). Recibe un arreglo de 2n números y el número n, y
     devuelve un arreglo nuevo.
  2. La primera mitad de nums son las posiciones 0 a n - 1 y la segunda mitad, las posiciones n a
     2n - 1. El arreglo devuelto tiene 2n elementos y alterna: un elemento de la primera mitad
     seguido de su pareja de la segunda mitad (la que ocupa la misma posición dentro de su mitad),
     en el orden de la primera mitad.
  3. nums queda intacto. Con n igual a 0 devuelve [].
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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


//! EJERCICIO 16 — Ordenado y rotado (LC 1752 · Check if Array Is Sorted and Rotated)
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
  Datos:
  - nums tiene al menos 1 elemento. Puede haber repetidos.
  Usa:
  - Un arreglo de números como entrada y un booleano como salida; solo variables, sin arreglos
    auxiliares.
  - Un solo recorrido con for con índice. El operador % está permitido.
  No uses:
  - sort, slice, concat, indexOf ni arreglos auxiliares.
  - No modifiques nums.

QUÉ DEBES HACER
  1. Declara la función isSortedAndRotated(nums). Recibe un arreglo de números y devuelve un
     booleano.
  2. Rotar k posiciones significa pasar los primeros k elementos al final, sin cambiar su orden.
     Devuelve true si existe un arreglo ordenado de menor a mayor (con repetidos permitidos) que,
     rotado k posiciones con k de 0 o más, da nums. Si no existe, devuelve false.
  3. Un arreglo de un solo elemento devuelve true. nums queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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

//! EJERCICIO 17 — Cliente más rico (LC 1672 · Richest Customer Wealth)
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
  Datos:
  - Hay al menos 1 cliente y 1 cuenta. Todo el dinero es 0 o mayor.
  Usa:
  - Una matriz de números como entrada; solo variables numéricas, sin arreglos auxiliares.
  - Dos bucles for con índice, uno dentro del otro.
  No uses:
  - reduce, map, Math.max, flat ni arreglos auxiliares.
  - No modifiques accounts.

QUÉ DEBES HACER
  1. Declara la función maximumWealth(accounts). Recibe una matriz (cada fila es un cliente, cada
     columna una cuenta) y devuelve un número.
  2. La riqueza de un cliente es la suma de todos los valores de su fila. Devuelve la mayor
     riqueza entre todos los clientes (el valor, no el cliente).
  3. accounts queda intacta.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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


//! EJERCICIO 18 — Diferencia de diagonales (HR · Diagonal Difference)
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
  Datos:
  - La matriz es cuadrada, con al menos 1 fila. Puede haber negativos.
  Usa:
  - Una matriz cuadrada de números como entrada; solo variables numéricas, sin arreglos auxiliares.
  - Un solo bucle for con índice (sin anidar) y Math.abs.
  No uses:
  - Bucles anidados, reduce, map ni arreglos auxiliares.
  - No modifiques matrix.

QUÉ DEBES HACER
  1. Declara la función diagonalDifference(matrix). Recibe una matriz cuadrada de números y
     devuelve un número.
  2. La diagonal principal va de la esquina superior izquierda a la inferior derecha; la
     secundaria, de la esquina superior derecha a la inferior izquierda. Devuelve el valor
     absoluto de (suma de la diagonal principal - suma de la diagonal secundaria).
  3. En una matriz de 1 × 1 ambas diagonales son esa única celda y el resultado es 0. matrix queda
     intacta.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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


//! EJERCICIO 19 — Transponer una matriz (LC 867 · Transpose Matrix)
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
  Datos:
  - La matriz tiene al menos 1 fila y 1 columna, y es rectangular (todas las filas miden lo mismo).
  Usa:
  - Una matriz de números como entrada y una matriz nueva como salida (se construye con .push()).
  - Dos bucles for con índice, uno dentro del otro.
  No uses:
  - map, reduce, flat, slice ni reutilizar las filas de la original dentro del resultado.
  - No modifiques matrix.

QUÉ DEBES HACER
  1. Declara la función transpose(matrix). Recibe una matriz de m filas y n columnas y devuelve
     una matriz nueva de n filas y m columnas.
  2. En el resultado, el elemento de la fila i y la columna j es el elemento de la fila j y la
     columna i de la original.
  3. matrix queda intacta.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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


//! EJERCICIO 20 — Triángulo de Pascal (LC 118 · Pascal's Triangle)
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
  Datos:
  - numRows es un entero mayor o igual que 0.
  Usa:
  - Un número como entrada y una matriz nueva como salida (se construye con .push()).
  - Dos bucles for con índice, uno dentro del otro.
  No uses:
  - Recursión, factoriales ni fórmulas combinatorias, map, slice ni ningún método que arme las
    filas por ti.

QUÉ DEBES HACER
  1. Declara la función generatePascal(numRows). Recibe un entero y devuelve una matriz con
     numRows filas.
  2. La fila de posición k (la primera es la 0) tiene k + 1 elementos. Su primer y su último
     elemento valen 1; cada elemento intermedio es la suma de los dos elementos de la fila
     anterior que tiene encima (el de su misma columna y el de la columna anterior).
  3. Con numRows igual a 0 devuelve [].
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

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
