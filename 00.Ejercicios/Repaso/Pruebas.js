/*
PRUEBAS — REFUERZO DE BUCLES Y ARRAYS CON LÓGICA (40 EJERCICIOS)
Teoría de apoyo (01.Bases): 03-condicionales · 04-bucles · 05-strings · 06-arrays ·
10-acumuladores-patrones · 11-big-o

ORGANIZACIÓN (de lo simple a lo complejo)
  Ejercicios 01–06 .... recorrer arrays: sumar, contar, buscar, copiar con condición
  Ejercicios 07–12 .... arrays: banderas, comparar con el vecino, construir resultados
  Ejercicios 13–18 .... strings: construir texto, recorrer al revés, estados, anidados
  Ejercicios 19–24 .... condiciones múltiples y más de un acumulador
  Ejercicios 25–31 .... dos índices y bucles anidados
  Ejercicios 32–36 .... matrices (arreglos de arreglos)
  Ejercicios 37–40 .... integración: rachas, frecuencias, espiral, paréntesis

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué problema resuelves. Luego lee PERMITIDO y NO PERMITIDO:
     te dicen con qué herramientas puedes resolverlo y cuáles debes evitar.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Escribe tu función debajo de «// TU SOLUCIÓN», con el nombre exacto que pide el enunciado.
  4. Antes de ejecutar, predice a mano el resultado de cada línea de COMPRUEBA
     (haz una tabla de seguimiento: variable por variable, vuelta por vuelta).
  5. Ejecuta:   node Pruebas.js
     Al final verás una línea por ejercicio:
        ✔  la función pasa todas las pruebas
        ✘  falla: muestra lo que obtuviste y lo que se esperaba
        …  pendiente: aún no declaras la función
     Para ver los valores, copia las líneas de COMPRUEBA debajo de tu función y ejecútalas.
  6. Si falla, NO cambies código al azar: haz la tabla de seguimiento con el caso que falló.
  7. Responde EXPLICA (y COMPLEJIDAD, cuando aparezca) en un comentario bajo tu solución.

VOCABULARIO DE LOS ENUNCIADOS
  «Devuelve» = usa return. Imprimir con console.log NO sustituye a devolver.
  «Arreglo» = array. «Índice válido» = entero entre 0 y length - 1.
  «Recorre» = usa un for (o while) que visite los elementos en el orden que se indica.
  «Supón» = el dato ya es válido; no lo compruebes.
  «Arreglo nuevo» = crea otro con [] y llénalo; no devuelvas el recibido.
  «En el sitio» = modifica el arreglo recibido; no crees otro.
  «Matriz» = arreglo de arreglos; matriz[f][c] es la fila f, columna c.

REGLAS
  - No modifiques los argumentos recibidos, salvo que el ejercicio diga «en el sitio» (las pruebas lo verifican).
  - Cada ejercicio trae dos listas, y esa lista manda sobre esta cabecera:
      PERMITIDO ...... las herramientas que el ejercicio espera que uses.
      NO PERMITIDO ... lo que NO debes usar en ese ejercicio.
    Lo que no aparece en NO PERMITIDO sí se puede usar. Si dudas de un método, busca su
    nombre en la lista del ejercicio, no aquí.
  - Prohibido en todos los ejercicios, salvo que uno lo permita expresamente: map, filter,
    reduce, forEach, find, some, every, sort, reverse, Math.max, Math.min, expresiones
    regulares, Set y Map. El objetivo es dominar bucles, índices y condiciones. Cada
    ejercicio vuelve a nombrarlos en su NO PERMITIDO.
  - Permitido en todos (salvo que el ejercicio diga lo contrario): variables, if/else,
    switch, for, while, for...of, .length, .push() e .includes().
  - No hay soluciones incluidas. Las pruebas automáticas están al final: no las edites.
*/

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE A — ARRAYS: RECORRER, CONTAR Y BUSCAR
// ═══════════════════════════════════════════════════════════════════════════

//! EJERCICIO 01 — Sumar un arreglo
/*
SITUACIÓN
  Una tienda guarda las ventas de cada día de la semana en un arreglo de números enteros. El dueño quiere el total vendido. Recibes el arreglo y devuelves la suma de todos sus elementos (un número).

  Ejemplo: con [10, 20, 5] el total es 35.

  Idea: el acumulador. Una variable que empieza en 0 (el neutro de la suma) y a la que se le suma cada elemento; al terminar el bucle contiene la respuesta.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i] y .length.
NO PERMITIDO
  - Modificar arr (las pruebas lo verifican).
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función sumaArreglo(arr). Recibe un arreglo de números enteros y devuelve un número.
  2. Crea la variable «total» con valor 0, ANTES del bucle.
  3. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  4. En cada vuelta, suma arr[i] a «total».
  5. Al terminar el bucle, devuelve «total». Con un arreglo vacío el bucle no da ninguna vuelta y devuelve 0.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(sumaArreglo([10, 20, 5]));   // 35
  console.log(sumaArreglo([]));   // 0   (arreglo vacío)
  console.log(sumaArreglo([-5, 5, -2]));   // -2   (negativos)
  console.log(sumaArreglo([10]));   // 10   (un solo elemento)

EXPLICA
  ¿Por qué «total» empieza en 0 y no en arr[0]? ¿Qué pasaría con un arreglo vacío si empezara en arr[0]?
*/
// TU SOLUCIÓN

//! EJERCICIO 02 — Contar números pares
/*
SITUACIÓN
  Un profesor tiene una lista de números de lista de alumnos y quiere saber cuántos son pares. Recibes un arreglo de enteros y devuelves CUÁNTOS son pares (un número), no cuáles.

  Definición: un número es par si al dividirlo entre 2 el residuo es 0. El 0 es par.

  Ejemplo: en [1, 2, 3, 4] los pares son 2 y 4: el resultado es 2.

  Idea: contador + condición con %. Cuidado con los negativos: -3 % 2 vale -1, no 1; por eso conviene preguntar por «=== 0» y no por «=== 1».

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length y el operador %.
NO PERMITIDO
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función contarPares(arr). Recibe un arreglo de enteros y devuelve un número.
  2. Crea la variable «contador» con valor 0, ANTES del bucle.
  3. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  4. En cada vuelta, si arr[i] % 2 es igual a 0, suma 1 a «contador».
  5. Al terminar el bucle, devuelve «contador».
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(contarPares([1, 2, 3, 4]));   // 2
  console.log(contarPares([]));   // 0   (arreglo vacío)
  console.log(contarPares([-2, -3, 0]));   // 2   (negativos y cero)
  console.log(contarPares([7, 9]));   // 0   (ninguno cumple)

EXPLICA
  ¿Cuánto vale -3 % 2 en JavaScript y por qué importa para elegir la condición?
*/
// TU SOLUCIÓN

//! EJERCICIO 03 — ¿Hay algún negativo?
/*
SITUACIÓN
  Un banco revisa una lista de movimientos de una cuenta y quiere saber si hubo alguna salida de dinero (un número negativo). Recibes un arreglo de enteros y devuelves true si hay AL MENOS un negativo y false si no.

  Definición: el 0 NO es negativo.

  Ejemplo: [3, -1, 5] devuelve true; [3, 0, 5] devuelve false.

  Idea: la bandera con return temprano: en cuanto encuentras uno, devuelves true y terminas. Solo puedes devolver false DESPUÉS de revisar todos los elementos; si lo devuelves dentro del bucle, decides con el primer elemento.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length y return dentro del bucle.
NO PERMITIDO
  - Devolver false dentro del bucle (solo se concluye «no hay» al terminarlo).
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función hayNegativo(arr). Recibe un arreglo de enteros y devuelve true o false.
  2. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  3. En cada vuelta, si arr[i] es menor que 0, devuelve true y termina.
  4. Fuera del bucle (después de su llave de cierre), devuelve false.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(hayNegativo([3, -1, 5]));   // true
  console.log(hayNegativo([3, 0, 5]));   // false   (el cero no es negativo)
  console.log(hayNegativo([]));   // false   (arreglo vacío)
  console.log(hayNegativo([1, 2, -9]));   // true   (el negativo es el último)
  console.log(hayNegativo([-1]));   // true   (un solo elemento)

EXPLICA
  ¿Por qué el «return false» va fuera del bucle? ¿Qué devolvería la función con [1, -2] si lo pusieras dentro?
*/
// TU SOLUCIÓN

//! EJERCICIO 04 — Posición de un valor
/*
SITUACIÓN
  Un cine guarda en un arreglo el número de sala de cada función del día y quiere saber en qué posición aparece por primera vez una sala. Recibes un arreglo de números y un número «objetivo», y devuelves el índice de la PRIMERA aparición de «objetivo»; si no está, devuelve -1.

  Ejemplo: con [4, 7, 9, 7] y objetivo 7 devuelve 1 (la primera vez que aparece, no la 3).

  Idea: recorrer con índice y devolver el índice (no el valor) al primer acierto. El -1 va después del bucle.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length y return dentro del bucle.
NO PERMITIDO
  - indexOf, lastIndexOf, findIndex, includes y at.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función posicionDe(arr, objetivo). Recibe un arreglo de números y un número, y devuelve un número.
  2. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  3. En cada vuelta, si arr[i] es estrictamente igual (===) a «objetivo», devuelve i (el índice, no el valor) y termina.
  4. Fuera del bucle, devuelve -1: significa que ninguna vuelta lo encontró.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(posicionDe([4, 7, 9, 7], 7));   // 1   (primera aparición)
  console.log(posicionDe([4, 7], 9));   // -1   (no está)
  console.log(posicionDe([], 3));   // -1   (arreglo vacío)
  console.log(posicionDe([4, 7, 9], 9));   // 2   (último elemento)
  console.log(posicionDe([4, 7, 9], 4));   // 0   (primer elemento)

EXPLICA
  ¿Por qué no puedes devolver -1 dentro del bucle cuando arr[i] no coincide?
*/
// TU SOLUCIÓN

//! EJERCICIO 05 — Posición del menor
/*
SITUACIÓN
  Una estación registra la temperatura de cada hora y se quiere saber a qué hora (en qué posición) hizo más frío. Recibes un arreglo de enteros y devuelves el índice del elemento MENOR. Si el menor aparece varias veces, devuelve el índice de la primera. Con un arreglo vacío devuelve -1.

  Ejemplo: con [5, 2, 8, 2] el menor es 2 y su primera posición es 1.

  Idea: guardar el ÍNDICE del mejor candidato, no el valor, y compararlo contra arr[pos]. El candidato inicial es la posición 0, nunca un valor inventado como 0: con negativos o con números grandes un valor inventado gana sin estar en el arreglo.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length y comparaciones.
NO PERMITIDO
  - Math.min, sort e indexOf.
  - Inicializar el menor con un valor inventado (0, 9999, Infinity): usa la posición 0.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función posicionDelMenor(arr). Recibe un arreglo de enteros y devuelve un número.
  2. Si arr está vacío (arr.length === 0), devuelve -1 y termina.
  3. Crea la variable «pos» con valor 0, ANTES del bucle: es la posición del menor visto hasta ahora.
  4. Recorre arr con un for: i empieza en 1 (la posición 0 ya es el candidato), continúa mientras i < arr.length y avanza de 1 en 1.
  5. En cada vuelta, si arr[i] es ESTRICTAMENTE menor que arr[pos], asigna pos = i. Con un empate no cambias nada: así se conserva la primera aparición.
  6. Al terminar el bucle, devuelve «pos».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(posicionDelMenor([5, 2, 8]));   // 1
  console.log(posicionDelMenor([3, -4, -9, -1]));   // 2   (negativos)
  console.log(posicionDelMenor([4, 1, 1]));   // 1   (empate: la primera)
  console.log(posicionDelMenor([9]));   // 0   (un solo elemento)
  console.log(posicionDelMenor([]));   // -1   (arreglo vacío)
  console.log(posicionDelMenor([7, 8, 9]));   // 0   (el menor es el primero)

EXPLICA
  Si «pos» empezara guardando el VALOR 0 en lugar de la posición 0, ¿qué fallaría con [3, 5, 8]?
*/
// TU SOLUCIÓN

//! EJERCICIO 06 — Copiar solo los no negativos
/*
SITUACIÓN
  Un sensor a veces falla y devuelve valores negativos. Recibes el arreglo de lecturas y devuelves un arreglo NUEVO con las lecturas válidas (0 o mayores), en el mismo orden. El arreglo recibido no debe cambiar.

  Ejemplo: de [3, -1, 0, -5, 8] salen [3, 0, 8].

  Idea: construir un resultado: empieza con [] y agrega con push solo lo que cumple. Es un «filter» hecho a mano.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length y .push() sobre el arreglo NUEVO.
NO PERMITIDO
  - filter, splice y slice.
  - Modificar arr o devolver arr: debes devolver otro arreglo.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función sinNegativos(arr). Recibe un arreglo de enteros y devuelve un arreglo.
  2. Crea la variable «resultado» con valor [] (arreglo vacío), ANTES del bucle.
  3. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  4. En cada vuelta, si arr[i] es mayor o igual que 0, agrega arr[i] a «resultado» con push.
  5. Al terminar el bucle, devuelve «resultado». Con un arreglo vacío o sin válidos devuelve [].
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(sinNegativos([3, -1, 0, -5, 8]));   // [3, 0, 8]
  console.log(sinNegativos([-1, -2]));   // []   (todos negativos)
  console.log(sinNegativos([]));   // []   (arreglo vacío)
  console.log(sinNegativos([1, 2]));   // [1, 2]   (ninguno se descarta)

EXPLICA
  ¿Por qué «resultado» se crea ANTES del bucle y no dentro de él?
*/
// TU SOLUCIÓN

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE B — ARRAYS: COMPARAR VECINOS Y CONSTRUIR RESULTADOS
// ═══════════════════════════════════════════════════════════════════════════

//! EJERCICIO 07 — ¿Todos superan el mínimo?
/*
SITUACIÓN
  Una academia exige nota mayor a un mínimo en todos los exámenes para aprobar un curso. Recibes el arreglo de notas y un número «minimo», y devuelves true si TODAS las notas son estrictamente mayores que «minimo», y false si alguna no lo es.

  Definición: con un arreglo vacío no hay ninguna nota que falle, así que el resultado es true.

  Ejemplo: con [5, 8, 9] y mínimo 4 devuelve true; con [5, 4, 9] y mínimo 4 devuelve false porque 4 no es mayor que 4.

  Idea: bandera inversa a «hayNegativo»: para «todos» buscas al que FALLA; si aparece, devuelves false de inmediato; solo al terminar puedes decir true.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length y return dentro del bucle.
NO PERMITIDO
  - every y filter.
  - Devolver true dentro del bucle.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función todosMayores(arr, minimo). Recibe un arreglo de números y un número, y devuelve true o false.
  2. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  3. En cada vuelta, si arr[i] es menor o igual que «minimo», devuelve false y termina: encontraste uno que falla.
  4. Fuera del bucle, devuelve true.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(todosMayores([5, 8, 9], 4));   // true
  console.log(todosMayores([5, 4, 9], 4));   // false   (4 no es mayor que 4)
  console.log(todosMayores([], 10));   // true   (arreglo vacío)
  console.log(todosMayores([3], 3));   // false   (un solo elemento que falla)
  console.log(todosMayores([9, 9, 1], 5));   // false   (falla el último)

EXPLICA
  ¿Por qué un arreglo vacío devuelve true? ¿Qué parte de tu código lo hace posible sin un caso especial?
*/
// TU SOLUCIÓN

//! EJERCICIO 08 — ¿Está ordenado de menor a mayor?
/*
SITUACIÓN
  Una biblioteca guarda los años de publicación de una colección y necesita saber si la lista está ordenada de menor a mayor. Recibes un arreglo de enteros y devuelves true si cada elemento es MAYOR O IGUAL que el anterior, y false si alguno es menor que el anterior.

  Ejemplo: [1, 2, 2, 5] devuelve true (el repetido está permitido); [1, 3, 2] devuelve false porque 2 es menor que 3.

  Idea: comparar cada elemento con el anterior. El recorrido empieza en i = 1 para que arr[i - 1] exista.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], arr[i - 1] y return dentro del bucle.
NO PERMITIDO
  - sort (para comparar con una copia ordenada).
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función estaOrdenado(arr). Recibe un arreglo de enteros y devuelve true o false.
  2. Recorre arr con un for: i empieza en 1, continúa mientras i < arr.length y avanza de 1 en 1. Con 0 o 1 elementos no hay vueltas.
  3. En cada vuelta, si arr[i] es menor que arr[i - 1], devuelve false y termina.
  4. Fuera del bucle, devuelve true.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(estaOrdenado([1, 2, 2, 5]));   // true   (repetidos permitidos)
  console.log(estaOrdenado([1, 3, 2]));   // false
  console.log(estaOrdenado([]));   // true   (arreglo vacío)
  console.log(estaOrdenado([7]));   // true   (un solo elemento)
  console.log(estaOrdenado([5, 4]));   // false   (dos elementos)
  console.log(estaOrdenado([1, 2, 3, 2]));   // false   (falla el último par)

EXPLICA
  ¿Por qué el bucle empieza en 1 y no en 0? ¿Qué valor leería arr[i - 1] si i fuera 0?
*/
// TU SOLUCIÓN

//! EJERCICIO 09 — Suma acumulada
/*
SITUACIÓN
  Una app de ahorro guarda cuánto dinero se agregó cada mes. Quiere mostrar cuánto lleva ahorrado AL FINAL de cada mes. Recibes el arreglo de aportes y devuelves un arreglo NUEVO del mismo largo, donde la posición i contiene la suma de arr[0] hasta arr[i].

  Ejemplo: de [1, 2, 3, 4] salen [1, 3, 6, 10].

  Idea: acumulador + resultado: una variable «total» crece en cada vuelta y su valor actual se agrega al arreglo nuevo.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length y .push() sobre el arreglo NUEVO.
NO PERMITIDO
  - reduce, slice y map.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función sumaAcumulada(arr). Recibe un arreglo de enteros y devuelve un arreglo.
  2. Crea «resultado» con valor [] y «total» con valor 0, ambos ANTES del bucle.
  3. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  4. En cada vuelta, suma arr[i] a «total» y luego agrega «total» a «resultado» con push (en ese orden).
  5. Al terminar el bucle, devuelve «resultado». Con un arreglo vacío devuelve [].
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(sumaAcumulada([1, 2, 3, 4]));   // [1, 3, 6, 10]
  console.log(sumaAcumulada([5]));   // [5]   (un solo elemento)
  console.log(sumaAcumulada([]));   // []   (arreglo vacío)
  console.log(sumaAcumulada([3, -3, 4]));   // [3, 0, 4]   (negativos)

EXPLICA
  Si agregaras «total» a «resultado» ANTES de sumarle arr[i], ¿qué devolvería con [1, 2, 3]?
*/
// TU SOLUCIÓN

//! EJERCICIO 10 — Repetir cada elemento dos veces
/*
SITUACIÓN
  Un editor de audio repite cada muestra dos veces seguidas para alargar un sonido. Recibes un arreglo y devuelves un arreglo NUEVO donde cada elemento aparece dos veces seguidas, en el mismo orden.

  Ejemplo: de [1, 2] sale [1, 1, 2, 2]; de [3, 3] sale [3, 3, 3, 3].

  Idea: un solo recorrido puede hacer DOS push por vuelta. Fíjate en el orden: se repite cada elemento junto a sí mismo, no todo el arreglo dos veces.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length y .push() sobre el arreglo NUEVO.
NO PERMITIDO
  - flatMap, concat y el operador spread (...).
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función duplicarCadaUno(arr). Recibe un arreglo y devuelve un arreglo.
  2. Crea «resultado» con valor [], ANTES del bucle.
  3. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  4. En cada vuelta, agrega arr[i] a «resultado» DOS veces seguidas (dos instrucciones push).
  5. Al terminar el bucle, devuelve «resultado».
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(duplicarCadaUno([1, 2]));   // [1, 1, 2, 2]
  console.log(duplicarCadaUno([]));   // []   (arreglo vacío)
  console.log(duplicarCadaUno([3, 3]));   // [3, 3, 3, 3]   (repetidos)
  console.log(duplicarCadaUno([9]));   // [9, 9]   (un solo elemento)

EXPLICA
  ¿De qué tamaño es el resultado respecto a arr? ¿Qué pasaría con [1, 2] si hicieras un bucle que agrega todo arr y luego otro bucle que lo agrega otra vez?
*/
// TU SOLUCIÓN

//! EJERCICIO 11 — Contar repetidos seguidos
/*
SITUACIÓN
  Un teclado registra las teclas pulsadas y se quiere detectar rebotes: una tecla igual a la inmediatamente anterior. Recibes un arreglo y devuelves CUÁNTAS posiciones tienen el mismo valor que la posición anterior.

  Ejemplo: en [1, 1, 2, 2, 2, 3] el segundo 1 repite al anterior (1), el segundo 2 y el tercer 2 también (2): el resultado es 3.

  Idea: comparar con el anterior (recorrido desde i = 1) y contar. Un valor repetido no seguido (como [1, 2, 1]) no cuenta.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], arr[i - 1] y .length.
NO PERMITIDO
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función contarRepetidosSeguidos(arr). Recibe un arreglo y devuelve un número.
  2. Crea «contador» con valor 0, ANTES del bucle.
  3. Recorre arr con un for: i empieza en 1, continúa mientras i < arr.length y avanza de 1 en 1.
  4. En cada vuelta, si arr[i] es estrictamente igual (===) a arr[i - 1], suma 1 a «contador».
  5. Al terminar el bucle, devuelve «contador». Con 0 o 1 elementos devuelve 0.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(contarRepetidosSeguidos([1, 1, 2, 2, 2, 3]));   // 3
  console.log(contarRepetidosSeguidos([1, 2, 1, 2]));   // 0   (repetidos no seguidos)
  console.log(contarRepetidosSeguidos([4, 4, 4, 4]));   // 3   (todos iguales)
  console.log(contarRepetidosSeguidos([]));   // 0   (arreglo vacío)
  console.log(contarRepetidosSeguidos([9]));   // 0   (un solo elemento)

EXPLICA
  En [4, 4, 4, 4] hay 4 elementos iguales pero la respuesta es 3. ¿Por qué?
*/
// TU SOLUCIÓN

//! EJERCICIO 12 — Mayor salto entre vecinos
/*
SITUACIÓN
  Una gráfica de temperaturas tiene un dato por hora. Quieres saber cuál fue el cambio brusco más grande entre dos horas consecutivas, sin importar si subió o bajó. Recibes un arreglo de enteros y devuelves la mayor DIFERENCIA ABSOLUTA entre dos elementos vecinos. Con menos de 2 elementos devuelve 0.

  Definición: la diferencia absoluta es la distancia sin signo; Math.abs(3 - 10) vale 7.

  Ejemplo: en [3, 10, 4, 5] los saltos son 7, 6 y 1; el mayor es 7.

  Idea: máximo + comparar con el anterior. Sin Math.abs, una bajada daría un número negativo y se perdería (la trampa de [10, 3, 4]).

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], arr[i - 1], .length y Math.abs.
NO PERMITIDO
  - Math.max, Math.min y sort.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función mayorSalto(arr). Recibe un arreglo de enteros y devuelve un número.
  2. Crea «mayor» con valor 0, ANTES del bucle. Aquí 0 es válido porque toda diferencia absoluta es 0 o más.
  3. Recorre arr con un for: i empieza en 1, continúa mientras i < arr.length y avanza de 1 en 1.
  4. En cada vuelta, calcula «salto» como Math.abs(arr[i] - arr[i - 1]).
  5. Si «salto» es mayor que «mayor», asigna mayor = salto.
  6. Al terminar el bucle, devuelve «mayor». Con 0 o 1 elementos el bucle no corre y devuelve 0.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(mayorSalto([3, 10, 4, 5]));   // 7
  console.log(mayorSalto([10, 3, 4]));   // 7   (el mayor salto es una bajada)
  console.log(mayorSalto([1, 2, 3]));   // 1
  console.log(mayorSalto([7]));   // 0   (un solo elemento)
  console.log(mayorSalto([]));   // 0   (arreglo vacío)
  console.log(mayorSalto([-5, 5, -5]));   // 10   (negativos)

EXPLICA
  ¿Por qué aquí sí puedes empezar «mayor» en 0, cuando en «posicionDelMenor» no podías inventar un valor inicial?
*/
// TU SOLUCIÓN

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE C — STRINGS Y RECORRIDOS
// ═══════════════════════════════════════════════════════════════════════════

//! EJERCICIO 13 — Quitar los espacios
/*
SITUACIÓN
  Un formulario recibe números de teléfono escritos con espacios sueltos («55 12 34»). Recibes un texto y devuelves un texto NUEVO con los mismos caracteres, en el mismo orden, pero sin ningún espacio (' ').

  Definición: los strings no se pueden modificar; para «quitar» algo se construye otro texto.

  Ejemplo: 'a b  c' se convierte en 'abc'.

  Idea: construir texto: empieza en '' (texto vacío) y concatena con += solo los caracteres que quieres conservar.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for o for...of sobre el texto, texto[i], .length y concatenar con +=.
NO PERMITIDO
  - replace, replaceAll, split, join, trim y expresiones regulares.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función quitarEspacios(texto). Recibe un string y devuelve un string.
  2. Crea «resultado» con valor '' (comillas vacías), ANTES del bucle.
  3. Recorre texto con un for: i empieza en 0, continúa mientras i < texto.length y avanza de 1 en 1.
  4. En cada vuelta, si texto[i] es distinto de ' ' (un espacio), concatena texto[i] a «resultado» con +=.
  5. Al terminar el bucle, devuelve «resultado».
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(quitarEspacios('a b  c'));   // 'abc'
  console.log(quitarEspacios(''));   // ''   (texto vacío)
  console.log(quitarEspacios('   '));   // ''   (solo espacios)
  console.log(quitarEspacios('hola'));   // 'hola'   (sin espacios)
  console.log(quitarEspacios(' x '));   // 'x'   (espacios en los extremos)

EXPLICA
  ¿Por qué no puedes hacer texto[1] = 'z' para cambiar una letra de un string?
*/
// TU SOLUCIÓN

//! EJERCICIO 14 — Invertir un texto
/*
SITUACIÓN
  Un juego de palabras necesita mostrar una palabra al revés. Recibes un texto y devuelves un texto NUEVO con los mismos caracteres en orden inverso (el último primero).

  Ejemplo: 'hola' se convierte en 'aloh'; 'ab c' en 'c ba' (el espacio también se invierte).

  Idea: recorrer al revés: el índice empieza en el último carácter (texto.length - 1) y baja hasta llegar a 0.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for sobre el texto con índice que baja, texto[i], .length y +=.
NO PERMITIDO
  - split, reverse, join y spread (...) sobre el texto.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función invertirTexto(texto). Recibe un string y devuelve un string.
  2. Crea «resultado» con valor '', ANTES del bucle.
  3. Recorre texto con un for: i empieza en texto.length - 1 (el último índice válido), continúa mientras i >= 0 y retrocede de 1 en 1 (i--).
  4. En cada vuelta, concatena texto[i] a «resultado» con +=.
  5. Al terminar el bucle, devuelve «resultado». Con texto vacío el bucle no corre y devuelve ''.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(invertirTexto('hola'));   // 'aloh'
  console.log(invertirTexto(''));   // ''   (texto vacío)
  console.log(invertirTexto('a'));   // 'a'   (un carácter)
  console.log(invertirTexto('ab c'));   // 'c ba'   (con espacio)

EXPLICA
  ¿Por qué la condición es i >= 0 y no i > 0? ¿Qué carácter se perdería?
*/
// TU SOLUCIÓN

//! EJERCICIO 15 — Contar palabras
/*
SITUACIÓN
  Un editor de texto muestra el conteo de palabras. Recibes un texto formado por letras y espacios, y devuelves cuántas palabras tiene.

  Definición: una palabra es una secuencia de caracteres distintos de espacio. Puede haber varios espacios seguidos, y también al inicio o al final.

  Ejemplo: '  uno   dos  tres ' tiene 3 palabras.

  Idea: bandera de estado. Una variable «enPalabra» recuerda si el carácter anterior pertenecía a una palabra; una palabra NUEVA empieza cuando ves un no-espacio y todavía no estabas dentro de una.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for sobre el texto, texto[i], .length y variables booleanas.
NO PERMITIDO
  - split, trim, match y expresiones regulares.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función contarPalabras(texto). Recibe un string y devuelve un número.
  2. Crea «contador» con valor 0 y «enPalabra» con valor false, ambos ANTES del bucle.
  3. Recorre texto con un for: i empieza en 0, continúa mientras i < texto.length y avanza de 1 en 1.
  4. En cada vuelta, si texto[i] es un espacio (' '), asigna enPalabra = false.
  5. Si no es un espacio y «enPalabra» es false, es el inicio de una palabra: suma 1 a «contador» y asigna enPalabra = true.
  6. Al terminar el bucle, devuelve «contador».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(contarPalabras('hola mundo'));   // 2
  console.log(contarPalabras('  uno   dos  tres '));   // 3   (espacios extra)
  console.log(contarPalabras(''));   // 0   (texto vacío)
  console.log(contarPalabras('    '));   // 0   (solo espacios)
  console.log(contarPalabras('solo'));   // 1   (una palabra)

EXPLICA
  Si en vez de la bandera contaras los espacios, ¿qué respuesta daría '  uno   dos '?
*/
// TU SOLUCIÓN

//! EJERCICIO 16 — Racha más larga de un carácter
/*
SITUACIÓN
  Un detector de errores de transmisión busca el tramo más largo donde el mismo carácter se repite sin interrupción. Recibes un texto y devuelves la longitud de la racha más larga de caracteres iguales y consecutivos. Con texto vacío devuelve 0.

  Ejemplo: en 'aabbbc' la racha más larga es 'bbb': el resultado es 3.

  Idea: dos acumuladores: la racha ACTUAL (se reinicia a 1 al cambiar de carácter) y la MEJOR vista. La mejor se actualiza en cada vuelta, así no se pierde una racha que termina justo al final.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, texto[i], texto[i - 1] y .length.
NO PERMITIDO
  - split, match y expresiones regulares.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función rachaMasLarga(texto). Recibe un string y devuelve un número.
  2. Si texto está vacío (texto.length === 0), devuelve 0 y termina.
  3. Crea «mejor» con valor 1 y «actual» con valor 1, ANTES del bucle (un texto no vacío tiene al menos una racha de 1).
  4. Recorre texto con un for: i empieza en 1, continúa mientras i < texto.length y avanza de 1 en 1.
  5. En cada vuelta, si texto[i] es igual a texto[i - 1], suma 1 a «actual»; si no, asigna actual = 1.
  6. Todavía dentro de la vuelta, si «actual» es mayor que «mejor», asigna mejor = actual.
  7. Al terminar el bucle, devuelve «mejor».
  8. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(rachaMasLarga('aabbbc'));   // 3
  console.log(rachaMasLarga('abc'));   // 1   (sin repetidos)
  console.log(rachaMasLarga(''));   // 0   (texto vacío)
  console.log(rachaMasLarga('zzzz'));   // 4   (todo el texto)
  console.log(rachaMasLarga('aaabbbb'));   // 4   (la mayor racha termina al final)
  console.log(rachaMasLarga('x'));   // 1   (un carácter)

EXPLICA
  ¿Por qué actualizar «mejor» en cada vuelta evita el error de 'aaabbbb'? ¿Qué pasaría si solo lo hicieras al cambiar de carácter?
*/
// TU SOLUCIÓN

//! EJERCICIO 17 — Primer carácter que no se repite
/*
SITUACIÓN
  Un corrector quiere encontrar la primera letra de una palabra que aparece UNA sola vez en todo el texto. Recibes un texto y devuelves el ÍNDICE de ese carácter, o -1 si todos se repiten (o si el texto está vacío).

  Ejemplo: en 'loveleetcode' la 'l' (índice 0) aparece dos veces, la 'o' también, y la 'v' (índice 2) aparece una sola vez: el resultado es 2.

  Idea: bucle anidado: para cada posición i, otro bucle recorre TODO el texto y cuenta cuántas veces aparece texto[i]. Si cuenta 1, es el primero único (el recorrido va en orden).

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - Dos for anidados, texto[i], texto[j] y .length.
NO PERMITIDO
  - indexOf, lastIndexOf, includes, split, Set y Map.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función primerUnico(texto). Recibe un string y devuelve un número.
  2. Recorre texto con un for externo: i empieza en 0, continúa mientras i < texto.length y avanza de 1 en 1.
  3. Dentro de cada vuelta de i, crea «veces» con valor 0, ANTES del bucle interno (se reinicia para cada i).
  4. Recorre texto con un for interno: j empieza en 0, continúa mientras j < texto.length y avanza de 1 en 1. Si texto[j] === texto[i], suma 1 a «veces».
  5. Después del bucle interno, si «veces» es igual a 1, devuelve i y termina.
  6. Fuera de ambos bucles, devuelve -1.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(primerUnico('leetcode'));   // 0   ('l' aparece una vez)
  console.log(primerUnico('loveleetcode'));   // 2
  console.log(primerUnico('aabb'));   // -1   (todos se repiten)
  console.log(primerUnico(''));   // -1   (texto vacío)
  console.log(primerUnico('aabbc'));   // 4   (el único es el último)
  console.log(primerUnico('z'));   // 0   (un carácter)

EXPLICA
  ¿Qué pasaría con las cuentas si declararas «veces» fuera del for externo, antes de empezar?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

//! EJERCICIO 18 — Cifrado César
/*
SITUACIÓN
  El cifrado César esconde un mensaje desplazando cada letra un número fijo de posiciones del alfabeto (a→b si el desplazamiento es 1). Recibes un texto en minúsculas sin acentos (letras a–z y espacios) y un desplazamiento entre 0 y 25, y devuelves el texto cifrado. Los espacios no cambian, y después de la 'z' se vuelve a la 'a'.

  Herramientas: texto[i].charCodeAt(0) da el código numérico de la letra ('a' es 97 y 'z' es 122); String.fromCharCode(n) convierte un código en la letra.

  Ejemplo: 'xyz' con desplazamiento 3 da 'abc' (x→a, y→b, z→c).

  Idea: aritmética modular. Se pasa la letra a posición 0–25 (código - 97), se suma el desplazamiento, se usa % 26 para dar la vuelta y se vuelve a código (+ 97).

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for sobre el texto, charCodeAt, String.fromCharCode, el operador % y +=.
NO PERMITIDO
  - split, map, join, replace y expresiones regulares.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función cifradoCesar(texto, desplazamiento). Recibe un string y un número, y devuelve un string.
  2. Crea «resultado» con valor '', ANTES del bucle.
  3. Recorre texto con un for: i empieza en 0, continúa mientras i < texto.length y avanza de 1 en 1.
  4. En cada vuelta, si texto[i] es ' ', concatena ' ' a «resultado» y pasa a la siguiente vuelta (usa else, no hace falta continue).
  5. Si no es un espacio, calcula «pos» = texto[i].charCodeAt(0) - 97 (posición de la letra, de 0 a 25).
  6. Calcula «nueva» = (pos + desplazamiento) % 26 y concatena a «resultado» String.fromCharCode(nueva + 97).
  7. Al terminar el bucle, devuelve «resultado».
  8. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(cifradoCesar('abc', 1));   // 'bcd'
  console.log(cifradoCesar('xyz', 3));   // 'abc'   (da la vuelta al alfabeto)
  console.log(cifradoCesar('hola mundo', 0));   // 'hola mundo'   (desplazamiento 0)
  console.log(cifradoCesar('zebra a', 26));   // 'zebra a'   (26 vuelve a la misma letra)
  console.log(cifradoCesar('a b', 2));   // 'c d'   (espacio intacto)
  console.log(cifradoCesar('', 5));   // ''   (texto vacío)

EXPLICA
  ¿Qué hace el % 26? ¿Qué letra saldría de 'z' con desplazamiento 1 si lo quitaras?
*/
// TU SOLUCIÓN

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE D — CONDICIONES Y MÁS DE UN ACUMULADOR
// ═══════════════════════════════════════════════════════════════════════════

//! EJERCICIO 19 — Resumen de notas
/*
SITUACIÓN
  Un colegio clasifica las notas (enteros de 0 a 100) de un grupo en tres categorías: APROBADA (70 o más), RECUPERACIÓN (de 50 a 69) y REPROBADA (menos de 50). Recibes el arreglo de notas y devuelves un arreglo de tres números [aprobadas, recuperacion, reprobadas] con cuántas notas hay en cada categoría.

  Ejemplo: con [90, 70, 69, 50, 49, 0] devuelve [2, 2, 2]: aprobadas 90 y 70; recuperación 69 y 50; reprobadas 49 y 0.

  Idea: varios contadores y una cadena if / else if / else. Cada nota cae en UNA sola categoría, y los bordes (70, 50) pertenecen a la categoría de arriba.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length, if / else if / else.
NO PERMITIDO
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función resumenNotas(arr). Recibe un arreglo de enteros y devuelve un arreglo de 3 números.
  2. Crea tres variables con valor 0, ANTES del bucle: «aprobadas», «recuperacion» y «reprobadas».
  3. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  4. En cada vuelta: si arr[i] >= 70, suma 1 a «aprobadas»; si no, si arr[i] >= 50, suma 1 a «recuperacion»; si no, suma 1 a «reprobadas».
  5. Al terminar el bucle, devuelve [aprobadas, recuperacion, reprobadas] en ese orden.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(resumenNotas([90, 70, 69, 50, 49, 0]));   // [2, 2, 2]   (bordes 70, 50)
  console.log(resumenNotas([]));   // [0, 0, 0]   (arreglo vacío)
  console.log(resumenNotas([100]));   // [1, 0, 0]   (una nota)
  console.log(resumenNotas([49, 49]));   // [0, 0, 2]   (todas reprobadas)
  console.log(resumenNotas([75, 55, 20, 99]));   // [2, 1, 1]   (mezcla)

EXPLICA
  ¿Qué pasaría si preguntaras primero «arr[i] >= 50»? ¿Dónde caería una nota de 80?
*/
// TU SOLUCIÓN

//! EJERCICIO 20 — Etiquetas por edad
/*
SITUACIÓN
  Un museo asigna una etiqueta a cada visitante según su edad (enteros de 0 en adelante): 'niño' de 0 a 12, 'adolescente' de 13 a 17, 'adulto' de 18 a 64 y 'mayor' de 65 en adelante. Recibes un arreglo de edades y devuelves un arreglo NUEVO de textos, uno por edad, en el mismo orden.

  Ejemplo: de [5, 13, 70] salen ['niño', 'adolescente', 'mayor'].

  Idea: regla múltiple dentro de un recorrido que construye resultado. Cuida los bordes: 12 y 13, 17 y 18, 64 y 65.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length, if / else if / else y .push() sobre el arreglo NUEVO.
NO PERMITIDO
  - map, switch con rangos y modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función etiquetasDeEdad(edades). Recibe un arreglo de enteros y devuelve un arreglo de textos.
  2. Crea «resultado» con valor [], ANTES del bucle.
  3. Recorre edades con un for: i empieza en 0, continúa mientras i < edades.length y avanza de 1 en 1.
  4. En cada vuelta: si edades[i] <= 12, agrega 'niño'; si no, si <= 17, agrega 'adolescente'; si no, si <= 64, agrega 'adulto'; si no, agrega 'mayor'. Cada etiqueta se agrega con push.
  5. Al terminar el bucle, devuelve «resultado».
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(etiquetasDeEdad([5, 12, 13, 17, 18, 64, 65, 90]));   // ['niño', 'niño', 'adolescente', 'adolescente', 'adulto', 'adulto', 'mayor', 'mayor']   (todos los bordes)
  console.log(etiquetasDeEdad([]));   // []   (arreglo vacío)
  console.log(etiquetasDeEdad([0]));   // ['niño']   (edad 0)

EXPLICA
  En la cadena de if / else if, ¿por qué no hace falta escribir «edades[i] >= 13 &&» en la segunda condición?
*/
// TU SOLUCIÓN

//! EJERCICIO 21 — Cambios de signo
/*
SITUACIÓN
  Una cuenta tiene movimientos positivos (ingresos) y negativos (gastos), nunca 0. Quieres saber cuántas veces el saldo de un movimiento cambia de signo respecto al anterior. Recibes un arreglo de enteros distintos de 0 y devuelves cuántas parejas de vecinos tienen signos distintos.

  Ejemplo: en [1, -2, 3, 4, -5] los cambios son 1→-2, -2→3 y 4→-5: el resultado es 3 (3→4 no cuenta).

  Idea: comparar vecinos con una condición compuesta: un cambio ocurre cuando uno es positivo Y el otro negativo, en cualquiera de los dos órdenes.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], arr[i - 1], .length, && y ||.
NO PERMITIDO
  - Multiplicar los vecinos para decidir el signo (se pide practicar la condición compuesta).
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función cambiosDeSigno(arr). Recibe un arreglo de enteros distintos de 0 y devuelve un número.
  2. Crea «contador» con valor 0, ANTES del bucle.
  3. Recorre arr con un for: i empieza en 1, continúa mientras i < arr.length y avanza de 1 en 1.
  4. En cada vuelta, si (arr[i] > 0 && arr[i - 1] < 0) o (arr[i] < 0 && arr[i - 1] > 0), suma 1 a «contador».
  5. Al terminar el bucle, devuelve «contador». Con 0 o 1 elementos devuelve 0.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(cambiosDeSigno([1, -2, 3, 4, -5]));   // 3
  console.log(cambiosDeSigno([1, 2, 3]));   // 0   (sin cambios)
  console.log(cambiosDeSigno([-1, -2]));   // 0   (dos negativos)
  console.log(cambiosDeSigno([]));   // 0   (arreglo vacío)
  console.log(cambiosDeSigno([5]));   // 0   (un solo elemento)
  console.log(cambiosDeSigno([-1, 1, -1, 1]));   // 3   (cambia siempre)

EXPLICA
  ¿Por qué es necesario escribir las dos mitades de la condición (positivo-negativo y negativo-positivo)?
*/
// TU SOLUCIÓN

//! EJERCICIO 22 — Mínimo y máximo en una pasada
/*
SITUACIÓN
  Un resumen de precios necesita el más barato y el más caro de una lista. Recibes un arreglo de enteros y devuelves [minimo, maximo]. Con un arreglo vacío devuelve [].

  Ejemplo: con [3, 9, -2, 7] devuelve [-2, 9].

  Idea: dos acumuladores en UN solo recorrido. Ambos empiezan en arr[0] (nunca en 0 ni en un número inventado) y se comparan por separado: dos if independientes, no un else.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length, comparaciones.
NO PERMITIDO
  - Math.min, Math.max, sort y recorrer el arreglo dos veces.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función minimoYMaximo(arr). Recibe un arreglo de enteros y devuelve un arreglo.
  2. Si arr está vacío (arr.length === 0), devuelve [] y termina.
  3. Crea «menor» y «mayor», ambos con valor arr[0], ANTES del bucle.
  4. Recorre arr con un for: i empieza en 1, continúa mientras i < arr.length y avanza de 1 en 1.
  5. En cada vuelta, si arr[i] < menor, asigna menor = arr[i]. Luego, en un if SEPARADO, si arr[i] > mayor, asigna mayor = arr[i].
  6. Al terminar el bucle, devuelve [menor, mayor] en ese orden.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(minimoYMaximo([3, 9, -2, 7]));   // [-2, 9]
  console.log(minimoYMaximo([-5, -1, -9]));   // [-9, -1]   (todos negativos)
  console.log(minimoYMaximo([4]));   // [4, 4]   (un solo elemento)
  console.log(minimoYMaximo([]));   // []   (arreglo vacío)
  console.log(minimoYMaximo([2, 2]));   // [2, 2]   (repetidos)
  console.log(minimoYMaximo([1, 2, 3]));   // [1, 3]   (ordenado ascendente)

EXPLICA
  ¿Por qué los dos ifs son independientes? ¿En qué caso un elemento sería a la vez el menor y el mayor visto hasta ese momento?
*/
// TU SOLUCIÓN

//! EJERCICIO 23 — Contar picos
/*
SITUACIÓN
  Una gráfica de ventas diarias se analiza buscando picos: días que vendieron MÁS que el día anterior Y MÁS que el siguiente. Recibes un arreglo de enteros y devuelves cuántos picos hay.

  Definición: el primer y el último elemento nunca son picos (les falta un vecino). Una meseta, como [1, 3, 3, 1], no tiene picos porque 3 no es mayor que su vecino 3.

  Ejemplo: en [1, 3, 1, 4, 2] los picos son el 3 (posición 1) y el 4 (posición 3): el resultado es 2.

  Idea: recorrido interno con dos vecinos. El índice solo puede ir desde 1 hasta length - 2; así arr[i - 1] y arr[i + 1] siempre existen.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i - 1], arr[i], arr[i + 1], .length y &&.
NO PERMITIDO
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función contarPicos(arr). Recibe un arreglo de enteros y devuelve un número.
  2. Crea «contador» con valor 0, ANTES del bucle.
  3. Recorre arr con un for: i empieza en 1, continúa mientras i < arr.length - 1 (el último índice válido para i es arr.length - 2) y avanza de 1 en 1.
  4. En cada vuelta, si arr[i] > arr[i - 1] Y arr[i] > arr[i + 1], suma 1 a «contador».
  5. Al terminar el bucle, devuelve «contador». Con menos de 3 elementos el bucle no corre y devuelve 0.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(contarPicos([1, 3, 1, 4, 2]));   // 2
  console.log(contarPicos([1, 2, 3]));   // 0   (solo sube)
  console.log(contarPicos([1, 3, 3, 1]));   // 0   (meseta: no es pico)
  console.log(contarPicos([5]));   // 0   (un solo elemento)
  console.log(contarPicos([1, 2]));   // 0   (dos elementos)
  console.log(contarPicos([]));   // 0   (arreglo vacío)
  console.log(contarPicos([2, 1, 2]));   // 0   (los extremos no cuentan)
  console.log(contarPicos([1, 5, 1]));   // 1   (el único pico)

EXPLICA
  ¿Qué valor leería arr[i + 1] en la última vuelta si el bucle llegara hasta i < arr.length?
*/
// TU SOLUCIÓN

//! EJERCICIO 24 — El número que falta
/*
SITUACIÓN
  Una caja tiene fichas numeradas del 0 al n, pero falta una. Recibes un arreglo con n números DISTINTOS tomados de 0..n (sin ordenar) y devuelves el único número de 0..n que no está.

  Definición: n es arr.length. Los números esperados son 0, 1, …, n, y su suma es n * (n + 1) / 2.

  Ejemplo: con [3, 0, 1] n vale 3, la suma esperada es 6 y la suma real es 4: falta el 2.

  Idea: en vez de buscar cada número (O(n²)), compara sumas: lo que falta es la suma esperada menos la suma real. Un recorrido, memoria constante.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], .length y aritmética.
NO PERMITIDO
  - includes, indexOf, sort, Set y Map.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función faltante(arr). Recibe un arreglo de enteros distintos y devuelve un número.
  2. Crea «n» con valor arr.length y «esperada» con valor n * (n + 1) / 2 (la suma de 0 hasta n).
  3. Crea «real» con valor 0, ANTES del bucle.
  4. Recorre arr con un for: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1. En cada vuelta suma arr[i] a «real».
  5. Al terminar el bucle, devuelve esperada - real.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(faltante([3, 0, 1]));   // 2
  console.log(faltante([0, 1]));   // 2   (falta el último)
  console.log(faltante([1]));   // 0   (falta el primero)
  console.log(faltante([9, 6, 4, 2, 3, 5, 7, 0, 1]));   // 8
  console.log(faltante([0]));   // 1   (un solo elemento)

EXPLICA
  Con [0, 1] la suma esperada es 3 (0+1+2) y no 1. ¿Por qué se usa n = arr.length y no el mayor del arreglo?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE E — DOS ÍNDICES Y BUCLES ANIDADOS
// ═══════════════════════════════════════════════════════════════════════════

//! EJERCICIO 25 — Invertir en el sitio
/*
SITUACIÓN
  Un reproductor necesita invertir el orden de una lista de canciones usando la MISMA lista, sin crear otra (memoria extra constante). Recibes un arreglo y lo modificas EN EL SITIO para que quede en orden inverso. La función no necesita devolver nada.

  Definición: «en el sitio» significa que cambias el arreglo recibido; las pruebas comprueban que ese arreglo quedó invertido.

  Ejemplo: [1, 2, 3, 4] queda como [4, 3, 2, 1].

  Idea: dos índices que se acercan: uno desde el inicio y otro desde el final; en cada vuelta intercambias y los acercas. Terminas cuando se cruzan.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - while o for con dos índices, arr[i], .length y una variable temporal para intercambiar.
NO PERMITIDO
  - reverse, crear otro arreglo (nada de push) y slice.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función invertirEnSitio(arr). Recibe un arreglo y lo modifica; no devuelve nada.
  2. Crea «izq» con valor 0 y «der» con valor arr.length - 1, ANTES del bucle.
  3. Repite con un while mientras izq < der.
  4. En cada vuelta, intercambia arr[izq] con arr[der]: guarda arr[izq] en una variable «temp», asigna arr[izq] = arr[der] y luego arr[der] = temp.
  5. Al final de la vuelta, suma 1 a izq y resta 1 a der.
  6. No hace falta return. Con 0 o 1 elementos el while no corre y el arreglo queda igual.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  const a = [1, 2, 3, 4]; invertirEnSitio(a); console.log(a);   // [4, 3, 2, 1]   (cantidad par)
  const a = [1, 2, 3]; invertirEnSitio(a); console.log(a);   // [3, 2, 1]   (cantidad impar: el del centro no se mueve)
  const a = [7]; invertirEnSitio(a); console.log(a);   // [7]   (un solo elemento)
  const a = []; invertirEnSitio(a); console.log(a);   // []   (arreglo vacío)

EXPLICA
  ¿Por qué el while es «izq < der» y no «izq <= der»? ¿Qué pasaría con el elemento del centro si fuera <=?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

//! EJERCICIO 26 — ¿Hay duplicados?
/*
SITUACIÓN
  Un registro de matrículas no debe repetir ningún número. Recibes un arreglo y devuelves true si algún valor aparece dos o más veces, y false si todos son distintos.

  Ejemplo: [1, 2, 3, 1] devuelve true (el 1 se repite); [1, 2, 3] devuelve false.

  Idea: bucle anidado sobre PAREJAS: cada elemento se compara con los que están a su derecha. El índice interno empieza en i + 1, así nunca se compara un elemento consigo mismo.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - Dos for anidados, arr[i], arr[j], .length y return dentro del bucle.
NO PERMITIDO
  - Set, Map, includes, indexOf, sort y filter.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función hayDuplicados(arr). Recibe un arreglo y devuelve true o false.
  2. Recorre arr con un for externo: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  3. Dentro, recorre con un for interno: j empieza en i + 1, continúa mientras j < arr.length y avanza de 1 en 1.
  4. En cada vuelta interna, si arr[i] === arr[j], devuelve true y termina.
  5. Fuera de ambos bucles, devuelve false.
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(hayDuplicados([1, 2, 3, 1]));   // true
  console.log(hayDuplicados([1, 2, 3]));   // false   (todos distintos)
  console.log(hayDuplicados([]));   // false   (arreglo vacío)
  console.log(hayDuplicados([4]));   // false   (un solo elemento)
  console.log(hayDuplicados([2, 2]));   // true   (dos iguales)
  console.log(hayDuplicados([5, 6, 7, 7]));   // true   (el duplicado está al final)

EXPLICA
  Si j empezara en 0, ¿qué devolvería la función con [1, 2, 3]? ¿Por qué?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

//! EJERCICIO 27 — Parejas que suman un objetivo
/*
SITUACIÓN
  En un juego de cartas se buscan dos cartas cuyos valores sumen un número objetivo. Recibes un arreglo de enteros y un «objetivo», y devuelves CUÁNTAS parejas de posiciones distintas (i, j con i menor que j) suman «objetivo». Cada pareja de posiciones se cuenta una sola vez.

  Ejemplo: con [1, 2, 3, 4, 5] y objetivo 5 las parejas son (1,4) y (2,3): el resultado es 2.

  Idea: bucle anidado con j = i + 1: genera cada pareja una sola vez y nunca empareja un elemento consigo mismo. Un valor repetido sí forma parejas distintas porque están en posiciones distintas.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - Dos for anidados, arr[i], arr[j] y .length.
NO PERMITIDO
  - Set, Map, includes y sort.
  - Empezar j en 0 (contaría parejas repetidas y un elemento consigo mismo).
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función contarParesConSuma(arr, objetivo). Recibe un arreglo de enteros y un entero, y devuelve un número.
  2. Crea «contador» con valor 0, ANTES de los bucles.
  3. Recorre arr con un for externo: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  4. Dentro, recorre con un for interno: j empieza en i + 1, continúa mientras j < arr.length y avanza de 1 en 1.
  5. En cada vuelta interna, si arr[i] + arr[j] === objetivo, suma 1 a «contador».
  6. Al terminar ambos bucles, devuelve «contador».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(contarParesConSuma([1, 2, 3, 4, 5], 5));   // 2
  console.log(contarParesConSuma([2, 2, 2], 4));   // 3   (tres parejas de posiciones distintas)
  console.log(contarParesConSuma([1, 2], 10));   // 0   (ninguna)
  console.log(contarParesConSuma([], 0));   // 0   (arreglo vacío)
  console.log(contarParesConSuma([3], 6));   // 0   (un elemento no se suma consigo mismo)
  console.log(contarParesConSuma([-1, 1, 2, -2], 0));   // 2   (negativos)

EXPLICA
  En [2, 2, 2] con objetivo 4 la respuesta es 3 y no 1. ¿Cuáles son las tres parejas de posiciones?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

//! EJERCICIO 28 — Elementos en común
/*
SITUACIÓN
  Dos clubes tienen listas de socios identificados por número. Quieres los socios que están en AMBAS listas. Recibes dos arreglos «a» y «b» y devuelves un arreglo NUEVO con los elementos de «a» que también están en «b», sin repetir ninguno y en el orden en que aparecen en «a».

  Ejemplo: con a = [1, 2, 2, 3, 4] y b = [2, 4, 6] devuelve [2, 4] (el 2 solo una vez).

  Idea: dos preguntas por elemento: «¿está en b?» y «¿ya lo agregué al resultado?». Ambas se responden con includes, que es un bucle escondido; por eso el costo es O(n · m).

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, a[i], .length, .push() sobre el arreglo NUEVO e .includes() sobre «b» y sobre el resultado.
NO PERMITIDO
  - filter, Set, Map y sort.
  - Modificar a o b.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función comunes(a, b). Recibe dos arreglos de números y devuelve un arreglo.
  2. Crea «resultado» con valor [], ANTES del bucle.
  3. Recorre «a» con un for: i empieza en 0, continúa mientras i < a.length y avanza de 1 en 1.
  4. En cada vuelta, si b.includes(a[i]) es true Y resultado.includes(a[i]) es false, agrega a[i] a «resultado» con push.
  5. Al terminar el bucle, devuelve «resultado».
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(comunes([1, 2, 2, 3, 4], [2, 4, 6]));   // [2, 4]
  console.log(comunes([1, 2], [3]));   // []   (ninguno en común)
  console.log(comunes([], [1]));   // []   (a vacío)
  console.log(comunes([5, 5, 5], [5]));   // [5]   (repetidos en a)
  console.log(comunes([1, 2, 3], [3, 2, 1, 1]));   // [1, 2, 3]   (el orden es el de a)

EXPLICA
  Si «a» tiene n elementos y «b» tiene m, ¿cuántas comparaciones hace includes en el peor caso y cuál es el tiempo total?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

//! EJERCICIO 29 — Comunes en dos listas ordenadas
/*
SITUACIÓN
  Dos listas de números están ORDENADAS de menor a mayor y sin repetidos dentro de cada una. Quieres saber cuántos números aparecen en ambas, recorriendo cada lista una sola vez. Recibes «a» y «b» y devuelves esa cantidad.

  Ejemplo: con a = [1, 3, 5, 7] y b = [3, 4, 5, 8] los comunes son 3 y 5: el resultado es 2.

  Idea: dos índices que avanzan, uno por lista. Como están ordenadas, el menor de los dos valores actuales nunca podrá coincidir con nada más: ese índice avanza. Si son iguales, cuentas y avanzan ambos.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - while con dos índices, a[i], b[j] y .length.
NO PERMITIDO
  - Bucles anidados, includes, indexOf, Set y Map: se pide un recorrido único de cada lista.
  - Modificar a o b.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función contarComunesOrdenados(a, b). Recibe dos arreglos de números y devuelve un número.
  2. Crea «i» con valor 0, «j» con valor 0 y «contador» con valor 0, ANTES del bucle.
  3. Repite con un while mientras i < a.length Y j < b.length.
  4. En cada vuelta: si a[i] === b[j], suma 1 a «contador» y suma 1 a i y a j.
  5. Si no, si a[i] < b[j], suma 1 a i; si no, suma 1 a j.
  6. Al terminar el while, devuelve «contador».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(contarComunesOrdenados([1, 3, 5, 7], [3, 4, 5, 8]));   // 2
  console.log(contarComunesOrdenados([1, 2], [3, 4]));   // 0   (ninguno)
  console.log(contarComunesOrdenados([], [1]));   // 0   (una lista vacía)
  console.log(contarComunesOrdenados([1, 2, 3], [1, 2, 3]));   // 3   (iguales)
  console.log(contarComunesOrdenados([2, 4, 6, 8], [1, 2, 3, 4]));   // 2   (los comunes están al inicio de una)
  console.log(contarComunesOrdenados([5], [1, 2, 3, 4, 5]));   // 1   (el común es el último de b)

EXPLICA
  ¿Cuántas vueltas da el while en el peor caso, en función de a.length y b.length? ¿Por qué es mejor que dos for anidados?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

//! EJERCICIO 30 — Ordenar por burbuja
/*
SITUACIÓN
  Sin usar sort, quieres ordenar un arreglo de menor a mayor. Recibes un arreglo de enteros y devuelves un arreglo NUEVO ordenado; el recibido no debe cambiar.

  Definición: el ordenamiento burbuja compara vecinos y los intercambia si están al revés. Tras cada pasada, el mayor de la parte que aún no está ordenada «sube» a su lugar al final.

  Ejemplo: [5, 2, 9, 1] → pasada 1: [2, 5, 1, 9] → pasada 2: [2, 1, 5, 9] → pasada 3: [1, 2, 5, 9].

  Idea: bucles anidados con intercambios y partes que se acortan: en la pasada p, el final ya está ordenado, así que el bucle interno llega hasta length - 2 - p. Antes de ordenar hay que COPIAR el arreglo para no mutar la entrada.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for anidados, copiar con un bucle y push, arr[j], .length y una variable temporal para intercambiar.
NO PERMITIDO
  - sort, reverse, slice, spread (...) y concat.
  - Modificar arr: ordena una copia.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función ordenarBurbuja(arr). Recibe un arreglo de enteros y devuelve un arreglo.
  2. Crea «copia» con valor [] y llénala con un for que agregue cada arr[i] con push. Trabajarás sobre «copia».
  3. Recorre con un for externo: p empieza en 0, continúa mientras p < copia.length - 1 y avanza de 1 en 1.
  4. Dentro, recorre con un for interno: j empieza en 0, continúa mientras j < copia.length - 1 - p y avanza de 1 en 1.
  5. En cada vuelta interna, si copia[j] > copia[j + 1], intercámbialos usando una variable «temp».
  6. Al terminar ambos bucles, devuelve «copia». Con 0 o 1 elementos los bucles no corren.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(ordenarBurbuja([5, 2, 9, 1]));   // [1, 2, 5, 9]
  console.log(ordenarBurbuja([3, 1, 2]));   // [1, 2, 3]
  console.log(ordenarBurbuja([]));   // []   (arreglo vacío)
  console.log(ordenarBurbuja([4]));   // [4]   (un solo elemento)
  console.log(ordenarBurbuja([2, 2, 1]));   // [1, 2, 2]   (repetidos)
  console.log(ordenarBurbuja([-3, 5, -10, 0]));   // [-10, -3, 0, 5]   (negativos)
  console.log(ordenarBurbuja([1, 2, 3]));   // [1, 2, 3]   (ya ordenado)

EXPLICA
  ¿Por qué el bucle interno se acorta con cada pasada (length - 1 - p)? ¿Qué se desperdiciaría si siempre llegara hasta el final?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

//! EJERCICIO 31 — Mayor suma de K consecutivos
/*
SITUACIÓN
  Una tienda quiere saber cuál fue su mejor racha de k días seguidos. Recibes un arreglo de ventas diarias (enteros, pueden ser negativos) y un entero k mayor o igual a 1, y devuelves la mayor suma posible de k elementos CONSECUTIVOS. Si k es mayor que arr.length, devuelve null.

  Definición: una «ventana» es un tramo de k posiciones seguidas; en cada posición de inicio hay una ventana.

  Ejemplo: con [1, 4, 2, 10, 2, 3] y k = 3 las ventanas suman 7, 16, 14 y 15: el resultado es 16 (la ventana 4, 2, 10).

  Idea: recorrido externo sobre los INICIOS posibles (del 0 a arr.length - k) y un bucle interno que suma k elementos desde ese inicio. El mejor se inicializa en -Infinity para no fallar con sumas negativas.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for anidados, arr[i + j], .length y -Infinity.
NO PERMITIDO
  - slice, reduce, Math.max y sort.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función mayorSumaDeK(arr, k). Recibe un arreglo de enteros y un entero k, y devuelve un número o null.
  2. Si k > arr.length, devuelve null y termina.
  3. Crea «mejor» con valor -Infinity, ANTES de los bucles.
  4. Recorre con un for externo: inicio empieza en 0, continúa mientras inicio <= arr.length - k y avanza de 1 en 1.
  5. Dentro de cada vuelta, crea «suma» con valor 0 y recorre con un for interno: d empieza en 0, continúa mientras d < k y avanza de 1 en 1; en cada vuelta suma arr[inicio + d] a «suma».
  6. Después del for interno, si «suma» es mayor que «mejor», asigna mejor = suma.
  7. Al terminar el for externo, devuelve «mejor».
  8. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(mayorSumaDeK([1, 4, 2, 10, 2, 3], 3));   // 16
  console.log(mayorSumaDeK([-5, -2, -8], 2));   // -7   (todo negativo)
  console.log(mayorSumaDeK([5], 1));   // 5   (un solo elemento)
  console.log(mayorSumaDeK([1, 2], 3));   // null   (k mayor que el arreglo)
  console.log(mayorSumaDeK([2, 3, 4, 1], 4));   // 10   (la ventana es todo el arreglo)
  console.log(mayorSumaDeK([-1, -2], 1));   // -1   (k = 1)

EXPLICA
  ¿Por qué el último inicio válido es arr.length - k? ¿Cuánto vale el tiempo en función de n y k?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE F — MATRICES (ARREGLOS DE ARREGLOS)
// ═══════════════════════════════════════════════════════════════════════════

//! EJERCICIO 32 — Aplanar una matriz
/*
SITUACIÓN
  Una hoja de cálculo guarda sus datos como una matriz: un arreglo de filas, y cada fila es un arreglo. Recibes una matriz y devuelves un arreglo NUEVO con todos los valores en una sola lista, fila por fila, de izquierda a derecha.

  Definición: matriz[f][c] es el elemento de la fila f y la columna c. Las filas pueden tener tamaños distintos y pueden estar vacías.

  Ejemplo: de [[1, 2], [3], [4, 5, 6]] sale [1, 2, 3, 4, 5, 6].

  Idea: dos bucles anidados donde el interno depende de la fila actual: su límite es matriz[f].length, no un número fijo.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for anidados, matriz[f][c], .length y .push() sobre el arreglo NUEVO.
NO PERMITIDO
  - flat, concat, spread (...) y join.
  - Modificar la matriz.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función aplanar(matriz). Recibe un arreglo de arreglos de números y devuelve un arreglo.
  2. Crea «resultado» con valor [], ANTES de los bucles.
  3. Recorre las filas con un for externo: f empieza en 0, continúa mientras f < matriz.length y avanza de 1 en 1.
  4. Dentro, recorre las columnas con un for interno: c empieza en 0, continúa mientras c < matriz[f].length y avanza de 1 en 1.
  5. En cada vuelta interna, agrega matriz[f][c] a «resultado» con push.
  6. Al terminar ambos bucles, devuelve «resultado».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(aplanar([[1, 2], [3], [4, 5, 6]]));   // [1, 2, 3, 4, 5, 6]
  console.log(aplanar([]));   // []   (matriz vacía)
  console.log(aplanar([[], [1], []]));   // [1]   (filas vacías)
  console.log(aplanar([[7]]));   // [7]   (un solo valor)

EXPLICA
  ¿Por qué el límite del for interno es matriz[f].length y no matriz.length?
*/
// TU SOLUCIÓN

//! EJERCICIO 33 — Buscar en una matriz
/*
SITUACIÓN
  Un tablero de juego se guarda como matriz y quieres saber dónde está una pieza. Recibes una matriz de números y un «objetivo», y devuelves [fila, columna] de la PRIMERA aparición, recorriendo fila por fila de izquierda a derecha. Si no está, devuelve [-1, -1].

  Ejemplo: con [[1, 2], [3, 4]] y objetivo 3 devuelve [1, 0] (fila 1, columna 0).

  Idea: bucles anidados con retorno temprano: al acertar devuelves AMBOS índices a la vez. El [-1, -1] se devuelve solo después de revisar todo.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for anidados, matriz[f][c], .length y return dentro del bucle.
NO PERMITIDO
  - indexOf, includes, flat y findIndex.
  - Modificar la matriz.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función buscarEnMatriz(matriz, objetivo). Recibe una matriz de números y un número, y devuelve un arreglo de 2 números.
  2. Recorre las filas con un for externo: f empieza en 0, continúa mientras f < matriz.length y avanza de 1 en 1.
  3. Dentro, recorre las columnas con un for interno: c empieza en 0, continúa mientras c < matriz[f].length y avanza de 1 en 1.
  4. En cada vuelta interna, si matriz[f][c] === objetivo, devuelve [f, c] y termina.
  5. Fuera de ambos bucles, devuelve [-1, -1].
  6. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(buscarEnMatriz([[1, 2], [3, 4]], 3));   // [1, 0]
  console.log(buscarEnMatriz([[1, 2], [3, 4]], 5));   // [-1, -1]   (no está)
  console.log(buscarEnMatriz([], 1));   // [-1, -1]   (matriz vacía)
  console.log(buscarEnMatriz([[7, 7], [7, 7]], 7));   // [0, 0]   (repetido: la primera aparición)
  console.log(buscarEnMatriz([[1], [2], [3]], 3));   // [2, 0]   (una sola columna)
  console.log(buscarEnMatriz([[], [1]], 1));   // [1, 0]   (fila vacía antes)

EXPLICA
  ¿Por qué un solo return dentro del for interno basta para detener también el for externo?
*/
// TU SOLUCIÓN

//! EJERCICIO 34 — Tabla de multiplicar
/*
SITUACIÓN
  Un libro de matemáticas necesita la tabla de multiplicar de 1 a n como matriz. Recibes un entero n (0 o mayor) y devuelves una matriz de n filas y n columnas, donde el elemento de la fila f y la columna c (contando desde 0) vale (f + 1) * (c + 1). Con n = 0 devuelve [].

  Ejemplo: con n = 3 devuelve [[1, 2, 3], [2, 4, 6], [3, 6, 9]].

  Idea: construir una matriz: cada vuelta del for externo crea una fila nueva (un arreglo vacío) que el for interno llena, y al terminar la fila se agrega a la matriz. La fila se crea DENTRO del for externo.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for anidados, .push(), multiplicación.
NO PERMITIDO
  - map, Array(n), fill y Array.from.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función tablaDeMultiplicar(n). Recibe un entero y devuelve un arreglo de arreglos.
  2. Crea «tabla» con valor [], ANTES de los bucles.
  3. Recorre con un for externo: f empieza en 0, continúa mientras f < n y avanza de 1 en 1.
  4. Dentro de cada vuelta externa, crea «fila» con valor [] (una fila nueva en cada vuelta).
  5. Recorre con un for interno: c empieza en 0, continúa mientras c < n y avanza de 1 en 1; en cada vuelta agrega (f + 1) * (c + 1) a «fila».
  6. Después del for interno, agrega «fila» a «tabla» con push.
  7. Al terminar el for externo, devuelve «tabla».
  8. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(tablaDeMultiplicar(3));   // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
  console.log(tablaDeMultiplicar(1));   // [[1]]   (n = 1)
  console.log(tablaDeMultiplicar(0));   // []   (n = 0)
  console.log(tablaDeMultiplicar(4));   // [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]

EXPLICA
  Si crearas «fila» fuera de los dos bucles, ¿qué contendría la matriz al final con n = 2?
*/
// TU SOLUCIÓN

//! EJERCICIO 35 — Suma de las dos diagonales
/*
SITUACIÓN
  En un tablero cuadrado de n filas y n columnas se suman los valores de las dos diagonales: la principal (de arriba-izquierda a abajo-derecha: posiciones [0][0], [1][1]…) y la secundaria (de arriba-derecha a abajo-izquierda: [0][n-1], [1][n-2]…). Recibes la matriz cuadrada y devuelves esa suma. Si n es impar, el elemento del centro está en las dos diagonales y se cuenta UNA sola vez. Una matriz vacía suma 0.

  Ejemplo: con [[1, 2, 3], [4, 5, 6], [7, 8, 9]]: principal 1+5+9 = 15; secundaria 3+5+7 = 15; el 5 se cuenta una vez: 25.

  Idea: un solo bucle, no anidado: en la fila i, las dos diagonales están en las columnas i y n - 1 - i. Cuando coinciden (centro), solo se suma una.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - Un for con índice, matriz[i][i], matriz[i][n - 1 - i] y .length.
NO PERMITIDO
  - Bucles anidados (con un solo for alcanza).
  - Modificar la matriz.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función sumaDiagonales(matriz). Recibe una matriz cuadrada de enteros y devuelve un número.
  2. Crea «n» con valor matriz.length y «suma» con valor 0, ANTES del bucle.
  3. Recorre con un for: i empieza en 0, continúa mientras i < n y avanza de 1 en 1.
  4. En cada vuelta, suma matriz[i][i] a «suma» (diagonal principal).
  5. Si i es distinto de n - 1 - i, suma también matriz[i][n - 1 - i] a «suma» (diagonal secundaria; así el centro no se cuenta dos veces).
  6. Al terminar el bucle, devuelve «suma».
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(sumaDiagonales([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));   // 25   (n impar: centro una vez)
  console.log(sumaDiagonales([[5]]));   // 5   (1x1)
  console.log(sumaDiagonales([[1, 2], [3, 4]]));   // 10   (n par)
  console.log(sumaDiagonales([]));   // 0   (matriz vacía)
  console.log(sumaDiagonales([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]));   // 8   (4x4)

EXPLICA
  ¿Por qué con n par la condición i !== n - 1 - i siempre es verdadera?
*/
// TU SOLUCIÓN

//! EJERCICIO 36 — Transponer una matriz
/*
SITUACIÓN
  Transponer una matriz es convertir sus filas en columnas. Recibes una matriz de f filas y c columnas (todas las filas del mismo largo) y devuelves una matriz NUEVA de c filas y f columnas, donde el elemento [i][j] de la nueva es el [j][i] de la original. Con una matriz vacía devuelve [].

  Ejemplo: [[1, 2, 3], [4, 5, 6]] (2 filas, 3 columnas) se convierte en [[1, 4], [2, 5], [3, 6]] (3 filas, 2 columnas).

  Idea: el bucle externo recorre las COLUMNAS de la original (cada una será una fila nueva) y el interno recorre las FILAS. Fíjate en qué índice va primero al leer matriz[r][c].

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for anidados, matriz[r][c], .length y .push().
NO PERMITIDO
  - map, flat, Array.from y spread (...).
  - Modificar la matriz.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función transponer(matriz). Recibe una matriz de números y devuelve una matriz.
  2. Si matriz está vacía (matriz.length === 0), devuelve [] y termina.
  3. Crea «resultado» con valor [] y «columnas» con valor matriz[0].length, ANTES de los bucles.
  4. Recorre con un for externo: c empieza en 0, continúa mientras c < columnas y avanza de 1 en 1.
  5. Dentro de cada vuelta externa, crea «fila» con valor []. Recorre con un for interno: r empieza en 0, continúa mientras r < matriz.length y avanza de 1 en 1; agrega matriz[r][c] a «fila».
  6. Después del for interno, agrega «fila» a «resultado» con push.
  7. Al terminar el for externo, devuelve «resultado».
  8. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(transponer([[1, 2, 3], [4, 5, 6]]));   // [[1, 4], [2, 5], [3, 6]]   (2x3)
  console.log(transponer([[1, 2], [3, 4]]));   // [[1, 3], [2, 4]]   (cuadrada)
  console.log(transponer([[1], [2], [3]]));   // [[1, 2, 3]]   (una columna)
  console.log(transponer([]));   // []   (matriz vacía)
  console.log(transponer([[9]]));   // [[9]]   (1x1)

EXPLICA
  Si la matriz original es de 2x3, ¿de qué tamaño es la resultante y qué límite usa cada bucle?
*/
// TU SOLUCIÓN

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE G — INTEGRACIÓN
// ═══════════════════════════════════════════════════════════════════════════

//! EJERCICIO 37 — Mayor racha creciente
/*
SITUACIÓN
  Un atleta registra su tiempo en cada carrera y quiere saber cuántas carreras seguidas mejoró su marca: cada valor ESTRICTAMENTE mayor que el anterior (aquí crecer es mejorar). Recibes un arreglo de enteros y devuelves el largo del tramo consecutivo estrictamente creciente más largo. Con arreglo vacío devuelve 0.

  Ejemplo: en [2, 1, 2, 3, 4] el tramo más largo es 1, 2, 3, 4: el resultado es 4.

  Idea: mismo patrón de racha que en los textos: una racha ACTUAL que crece o se reinicia a 1, y una MEJOR que se actualiza en cada vuelta. Un repetido (como [1, 1]) rompe la racha.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for con índice, arr[i], arr[i - 1] y .length.
NO PERMITIDO
  - Math.max, sort, Set y Map.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función mayorRachaCreciente(arr). Recibe un arreglo de enteros y devuelve un número.
  2. Si arr está vacío (arr.length === 0), devuelve 0 y termina.
  3. Crea «mejor» con valor 1 y «actual» con valor 1, ANTES del bucle.
  4. Recorre arr con un for: i empieza en 1, continúa mientras i < arr.length y avanza de 1 en 1.
  5. En cada vuelta, si arr[i] > arr[i - 1], suma 1 a «actual»; si no, asigna actual = 1.
  6. Todavía dentro de la vuelta, si «actual» es mayor que «mejor», asigna mejor = actual.
  7. Al terminar el bucle, devuelve «mejor».
  8. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(mayorRachaCreciente([1, 2, 3, 1, 2]));   // 3
  console.log(mayorRachaCreciente([5, 4, 3]));   // 1   (todo decrece)
  console.log(mayorRachaCreciente([1, 1, 1]));   // 1   (repetidos rompen la racha)
  console.log(mayorRachaCreciente([]));   // 0   (arreglo vacío)
  console.log(mayorRachaCreciente([1, 3, 5, 7]));   // 4   (todo el arreglo)
  console.log(mayorRachaCreciente([2, 1, 2, 3, 4]));   // 4   (la mayor racha es la última)
  console.log(mayorRachaCreciente([7]));   // 1   (un solo elemento)

EXPLICA
  En [1, 1, 1] la respuesta es 1 y no 3. ¿Qué parte de tu condición lo garantiza?
*/
// TU SOLUCIÓN

//! EJERCICIO 38 — El valor más frecuente
/*
SITUACIÓN
  Una encuesta guarda la respuesta de cada persona como un número. Quieres saber cuál respuesta se repite más. Recibes un arreglo y devuelves el valor que más veces aparece. Si hay empate, devuelve el que aparece PRIMERO en el arreglo. Con arreglo vacío devuelve null.

  Ejemplo: con [1, 3, 2, 3, 1, 3] el 3 aparece 3 veces: devuelve 3. Con [4, 5, 5, 4] hay empate (2 y 2) y devuelve 4 porque aparece antes.

  Idea: para cada posición i, un bucle interno cuenta cuántas veces aparece arr[i] en TODO el arreglo; si supera el mejor conteo guardado, actualizas valor y conteo. Usar «mayor ESTRICTO» (>) es lo que conserva el primero en caso de empate.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - Dos for anidados, arr[i], arr[j] y .length.
NO PERMITIDO
  - Set, Map, sort, objetos como diccionario y Math.max.
  - Modificar arr.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función masFrecuente(arr). Recibe un arreglo de números y devuelve un número o null.
  2. Si arr está vacío (arr.length === 0), devuelve null y termina.
  3. Crea «mejorValor» con valor arr[0] y «mejorConteo» con valor 0, ANTES de los bucles.
  4. Recorre con un for externo: i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1.
  5. Dentro de cada vuelta, crea «conteo» con valor 0 y recorre con un for interno: j empieza en 0, continúa mientras j < arr.length y avanza de 1 en 1; si arr[j] === arr[i], suma 1 a «conteo».
  6. Después del for interno, si «conteo» es ESTRICTAMENTE mayor que «mejorConteo», asigna mejorValor = arr[i] y mejorConteo = conteo.
  7. Al terminar el for externo, devuelve «mejorValor».
  8. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(masFrecuente([1, 3, 2, 3, 1, 3]));   // 3
  console.log(masFrecuente([4, 5, 5, 4]));   // 4   (empate: gana el primero)
  console.log(masFrecuente([9]));   // 9   (un solo elemento)
  console.log(masFrecuente([]));   // null   (arreglo vacío)
  console.log(masFrecuente([-1, -1, 2]));   // -1   (negativos)
  console.log(masFrecuente([1, 2, 3]));   // 1   (todos aparecen una vez)

EXPLICA
  Si cambiaras > por >= en la comparación, ¿qué devolvería con [4, 5, 5, 4]?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

//! EJERCICIO 39 — Recorrer en espiral
/*
SITUACIÓN
  Un robot aspirador recorre una habitación (una matriz) en espiral: primero la fila de arriba de izquierda a derecha, luego la columna derecha hacia abajo, luego la fila de abajo de derecha a izquierda y luego la columna izquierda hacia arriba; después repite hacia adentro. Recibes una matriz rectangular y devuelves un arreglo NUEVO con los valores en el orden de la espiral. Con matriz vacía devuelve [].

  Ejemplo: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] devuelve [1, 2, 3, 6, 9, 8, 7, 4, 5].

  Idea: cuatro límites que se encogen (arriba, abajo, izquierda, derecha). Tras recorrer cada lado, ese límite se mueve hacia adentro. Cuando queda una sola fila o una sola columna, hay que comprobar que el lado siguiente aún existe, o se recorrerían valores dos veces.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - while, for, matriz[f][c], .length y .push() sobre el arreglo NUEVO.
NO PERMITIDO
  - flat, concat, spread (...), shift y pop sobre la matriz.
  - Modificar la matriz.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función recorrerEspiral(matriz). Recibe una matriz de números y devuelve un arreglo.
  2. Si matriz está vacía (matriz.length === 0), devuelve [] y termina.
  3. Crea «resultado» con valor [] y los límites «arriba» = 0, «abajo» = matriz.length - 1, «izq» = 0, «der» = matriz[0].length - 1, ANTES del bucle.
  4. Repite con un while mientras arriba <= abajo Y izq <= der.
  5. Lado 1 (fila de arriba, hacia la derecha): con un for, c va de izq a der (inclusive); agrega matriz[arriba][c]. Después suma 1 a «arriba».
  6. Lado 2 (columna derecha, hacia abajo): con un for, f va de arriba a abajo (inclusive); agrega matriz[f][der]. Después resta 1 a «der».
  7. Lado 3 (fila de abajo, hacia la izquierda): SOLO si arriba <= abajo, con un for, c va de der hasta izq (inclusive, bajando); agrega matriz[abajo][c]. Después resta 1 a «abajo».
  8. Lado 4 (columna izquierda, hacia arriba): SOLO si izq <= der, con un for, f va de abajo hasta arriba (inclusive, bajando); agrega matriz[f][izq]. Después suma 1 a «izq».
  9. Al terminar el while, devuelve «resultado».
  10. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(recorrerEspiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));   // [1, 2, 3, 6, 9, 8, 7, 4, 5]   (3x3)
  console.log(recorrerEspiral([[1, 2, 3, 4]]));   // [1, 2, 3, 4]   (una sola fila)
  console.log(recorrerEspiral([[1], [2], [3]]));   // [1, 2, 3]   (una sola columna)
  console.log(recorrerEspiral([[1, 2], [3, 4]]));   // [1, 2, 4, 3]   (2x2)
  console.log(recorrerEspiral([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));   // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]   (3x4)
  console.log(recorrerEspiral([]));   // []   (matriz vacía)
  console.log(recorrerEspiral([[5]]));   // [5]   (1x1)

EXPLICA
  En [[1, 2, 3, 4]] (una sola fila), ¿qué valores se repetirían si no existieran las comprobaciones de los lados 3 y 4?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN

//! EJERCICIO 40 — Paréntesis balanceados
/*
SITUACIÓN
  Un editor de código revisa que cada paréntesis que se abre se cierre. Recibes un texto que puede tener letras, espacios y paréntesis '(' y ')', y devuelves true si está BALANCEADO y false si no.

  Definición: está balanceado si (1) en ningún punto se ha cerrado más de lo que se ha abierto y (2) al final todo lo abierto se cerró. Los demás caracteres se ignoran.

  Ejemplo: '(a(b)c)' es true; '(()' es false (queda uno abierto); ')(' es false (se cierra antes de abrir).

  Idea: un solo contador de «paréntesis abiertos pendientes». Sube con '(' y baja con ')'. Si baja de 0 en cualquier momento, ya falló; y al final debe valer exactamente 0.

PERMITIDO  (lo que no aparece en NO PERMITIDO también se puede usar)
  - for o for...of sobre el texto, texto[i], .length y un contador.
NO PERMITIDO
  - replace, split, includes, regex y estructuras auxiliares (pilas): un contador basta.
  - Además, en todos los ejercicios: map, filter, reduce, forEach, find, some, every, sort,
    reverse, Math.max, Math.min, expresiones regulares, Set y Map.

QUÉ DEBES HACER
  1. Declara la función parentesisBalanceados(texto). Recibe un string y devuelve true o false.
  2. Crea «abiertos» con valor 0, ANTES del bucle.
  3. Recorre texto con un for: i empieza en 0, continúa mientras i < texto.length y avanza de 1 en 1.
  4. En cada vuelta, si texto[i] es '(', suma 1 a «abiertos».
  5. Si texto[i] es ')', resta 1 a «abiertos» y, si «abiertos» quedó menor que 0, devuelve false y termina (se cerró algo que no estaba abierto).
  6. Los demás caracteres no hacen nada.
  7. Al terminar el bucle, devuelve true si «abiertos» es igual a 0 y false en otro caso.
  8. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(parentesisBalanceados('(a(b)c)'));   // true
  console.log(parentesisBalanceados('(()'));   // false   (queda uno abierto)
  console.log(parentesisBalanceados(')('));   // false   (cierra antes de abrir)
  console.log(parentesisBalanceados(''));   // true   (texto vacío)
  console.log(parentesisBalanceados('())('));   // false   (el contador baja de 0 aunque termine en 0)
  console.log(parentesisBalanceados('()()'));   // true   (secuencia)
  console.log(parentesisBalanceados('sin parentesis'));   // true   (sin paréntesis)

EXPLICA
  El texto '())(' tiene 2 aperturas y 2 cierres, pero es inválido. ¿Qué línea de tu código lo detecta?
*/
// TU SOLUCIÓN

// ═══════════════════════════════════════════════════════════════════════════
// PRUEBAS AUTOMÁTICAS — NO EDITAR DE AQUÍ HACIA ABAJO
// Ejecuta:  node Pruebas.js
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

probar(1, 'sumaArreglo', () => {
    igual(sumaArreglo([10, 20, 5]), 35)
    igual(sumaArreglo([]), 0)
    igual(sumaArreglo([-5, 5, -2]), -2)
    igual(sumaArreglo([10]), 10)
    noMuta(sumaArreglo, [1, 2, 3])
})

probar(2, 'contarPares', () => {
    igual(contarPares([1, 2, 3, 4]), 2)
    igual(contarPares([]), 0)
    igual(contarPares([-2, -3, 0]), 2)
    igual(contarPares([7, 9]), 0)
    noMuta(contarPares, [1, 2, 3])
})

probar(3, 'hayNegativo', () => {
    igual(hayNegativo([3, -1, 5]), true)
    igual(hayNegativo([3, 0, 5]), false)
    igual(hayNegativo([]), false)
    igual(hayNegativo([1, 2, -9]), true)
    igual(hayNegativo([-1]), true)
    noMuta(hayNegativo, [1, -2, 3])
})

probar(4, 'posicionDe', () => {
    igual(posicionDe([4, 7, 9, 7], 7), 1)
    igual(posicionDe([4, 7], 9), -1)
    igual(posicionDe([], 3), -1)
    igual(posicionDe([4, 7, 9], 9), 2)
    igual(posicionDe([4, 7, 9], 4), 0)
    noMuta(posicionDe, [1, 2, 3], 2)
})

probar(5, 'posicionDelMenor', () => {
    igual(posicionDelMenor([5, 2, 8]), 1)
    igual(posicionDelMenor([3, -4, -9, -1]), 2)
    igual(posicionDelMenor([4, 1, 1]), 1)
    igual(posicionDelMenor([9]), 0)
    igual(posicionDelMenor([]), -1)
    igual(posicionDelMenor([7, 8, 9]), 0)
    noMuta(posicionDelMenor, [3, 1, 2])
})

probar(6, 'sinNegativos', () => {
    igual(sinNegativos([3, -1, 0, -5, 8]), [3, 0, 8])
    igual(sinNegativos([-1, -2]), [])
    igual(sinNegativos([]), [])
    igual(sinNegativos([1, 2]), [1, 2])
    noMuta(sinNegativos, [3, -1, 0])
    { const a = [1, 2]; if (sinNegativos(a) === a) throw new Error('devolviste el mismo arreglo, debe ser uno nuevo') }
})

probar(7, 'todosMayores', () => {
    igual(todosMayores([5, 8, 9], 4), true)
    igual(todosMayores([5, 4, 9], 4), false)
    igual(todosMayores([], 10), true)
    igual(todosMayores([3], 3), false)
    igual(todosMayores([9, 9, 1], 5), false)
    noMuta(todosMayores, [5, 8], 4)
})

probar(8, 'estaOrdenado', () => {
    igual(estaOrdenado([1, 2, 2, 5]), true)
    igual(estaOrdenado([1, 3, 2]), false)
    igual(estaOrdenado([]), true)
    igual(estaOrdenado([7]), true)
    igual(estaOrdenado([5, 4]), false)
    igual(estaOrdenado([1, 2, 3, 2]), false)
    noMuta(estaOrdenado, [3, 1, 2])
})

probar(9, 'sumaAcumulada', () => {
    igual(sumaAcumulada([1, 2, 3, 4]), [1, 3, 6, 10])
    igual(sumaAcumulada([5]), [5])
    igual(sumaAcumulada([]), [])
    igual(sumaAcumulada([3, -3, 4]), [3, 0, 4])
    noMuta(sumaAcumulada, [1, 2, 3])
})

probar(10, 'duplicarCadaUno', () => {
    igual(duplicarCadaUno([1, 2]), [1, 1, 2, 2])
    igual(duplicarCadaUno([]), [])
    igual(duplicarCadaUno([3, 3]), [3, 3, 3, 3])
    igual(duplicarCadaUno([9]), [9, 9])
    noMuta(duplicarCadaUno, [1, 2])
})

probar(11, 'contarRepetidosSeguidos', () => {
    igual(contarRepetidosSeguidos([1, 1, 2, 2, 2, 3]), 3)
    igual(contarRepetidosSeguidos([1, 2, 1, 2]), 0)
    igual(contarRepetidosSeguidos([4, 4, 4, 4]), 3)
    igual(contarRepetidosSeguidos([]), 0)
    igual(contarRepetidosSeguidos([9]), 0)
    noMuta(contarRepetidosSeguidos, [1, 1, 2])
})

probar(12, 'mayorSalto', () => {
    igual(mayorSalto([3, 10, 4, 5]), 7)
    igual(mayorSalto([10, 3, 4]), 7)
    igual(mayorSalto([1, 2, 3]), 1)
    igual(mayorSalto([7]), 0)
    igual(mayorSalto([]), 0)
    igual(mayorSalto([-5, 5, -5]), 10)
    noMuta(mayorSalto, [1, 5, 2])
})

probar(13, 'quitarEspacios', () => {
    igual(quitarEspacios('a b  c'), 'abc')
    igual(quitarEspacios(''), '')
    igual(quitarEspacios('   '), '')
    igual(quitarEspacios('hola'), 'hola')
    igual(quitarEspacios(' x '), 'x')
})

probar(14, 'invertirTexto', () => {
    igual(invertirTexto('hola'), 'aloh')
    igual(invertirTexto(''), '')
    igual(invertirTexto('a'), 'a')
    igual(invertirTexto('ab c'), 'c ba')
})

probar(15, 'contarPalabras', () => {
    igual(contarPalabras('hola mundo'), 2)
    igual(contarPalabras('  uno   dos  tres '), 3)
    igual(contarPalabras(''), 0)
    igual(contarPalabras('    '), 0)
    igual(contarPalabras('solo'), 1)
})

probar(16, 'rachaMasLarga', () => {
    igual(rachaMasLarga('aabbbc'), 3)
    igual(rachaMasLarga('abc'), 1)
    igual(rachaMasLarga(''), 0)
    igual(rachaMasLarga('zzzz'), 4)
    igual(rachaMasLarga('aaabbbb'), 4)
    igual(rachaMasLarga('x'), 1)
})

probar(17, 'primerUnico', () => {
    igual(primerUnico('leetcode'), 0)
    igual(primerUnico('loveleetcode'), 2)
    igual(primerUnico('aabb'), -1)
    igual(primerUnico(''), -1)
    igual(primerUnico('aabbc'), 4)
    igual(primerUnico('z'), 0)
})

probar(18, 'cifradoCesar', () => {
    igual(cifradoCesar('abc', 1), 'bcd')
    igual(cifradoCesar('xyz', 3), 'abc')
    igual(cifradoCesar('hola mundo', 0), 'hola mundo')
    igual(cifradoCesar('zebra a', 26), 'zebra a')
    igual(cifradoCesar('a b', 2), 'c d')
    igual(cifradoCesar('', 5), '')
})

probar(19, 'resumenNotas', () => {
    igual(resumenNotas([90, 70, 69, 50, 49, 0]), [2, 2, 2])
    igual(resumenNotas([]), [0, 0, 0])
    igual(resumenNotas([100]), [1, 0, 0])
    igual(resumenNotas([49, 49]), [0, 0, 2])
    igual(resumenNotas([75, 55, 20, 99]), [2, 1, 1])
    noMuta(resumenNotas, [90, 50, 10])
})

probar(20, 'etiquetasDeEdad', () => {
    igual(etiquetasDeEdad([5, 12, 13, 17, 18, 64, 65, 90]), ['niño', 'niño', 'adolescente', 'adolescente', 'adulto', 'adulto', 'mayor', 'mayor'])
    igual(etiquetasDeEdad([]), [])
    igual(etiquetasDeEdad([0]), ['niño'])
    noMuta(etiquetasDeEdad, [5, 30])
})

probar(21, 'cambiosDeSigno', () => {
    igual(cambiosDeSigno([1, -2, 3, 4, -5]), 3)
    igual(cambiosDeSigno([1, 2, 3]), 0)
    igual(cambiosDeSigno([-1, -2]), 0)
    igual(cambiosDeSigno([]), 0)
    igual(cambiosDeSigno([5]), 0)
    igual(cambiosDeSigno([-1, 1, -1, 1]), 3)
    noMuta(cambiosDeSigno, [1, -2, 3])
})

probar(22, 'minimoYMaximo', () => {
    igual(minimoYMaximo([3, 9, -2, 7]), [-2, 9])
    igual(minimoYMaximo([-5, -1, -9]), [-9, -1])
    igual(minimoYMaximo([4]), [4, 4])
    igual(minimoYMaximo([]), [])
    igual(minimoYMaximo([2, 2]), [2, 2])
    igual(minimoYMaximo([1, 2, 3]), [1, 3])
    noMuta(minimoYMaximo, [3, 1, 2])
})

probar(23, 'contarPicos', () => {
    igual(contarPicos([1, 3, 1, 4, 2]), 2)
    igual(contarPicos([1, 2, 3]), 0)
    igual(contarPicos([1, 3, 3, 1]), 0)
    igual(contarPicos([5]), 0)
    igual(contarPicos([1, 2]), 0)
    igual(contarPicos([]), 0)
    igual(contarPicos([2, 1, 2]), 0)
    igual(contarPicos([1, 5, 1]), 1)
    noMuta(contarPicos, [1, 3, 1])
})

probar(24, 'faltante', () => {
    igual(faltante([3, 0, 1]), 2)
    igual(faltante([0, 1]), 2)
    igual(faltante([1]), 0)
    igual(faltante([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8)
    igual(faltante([0]), 1)
    noMuta(faltante, [3, 0, 1])
})

probar(25, 'invertirEnSitio', () => {
    { const a = [1, 2, 3, 4]; invertirEnSitio(a); igual(a, [4, 3, 2, 1]) }
    { const a = [1, 2, 3]; invertirEnSitio(a); igual(a, [3, 2, 1]) }
    { const a = [7]; invertirEnSitio(a); igual(a, [7]) }
    { const a = []; invertirEnSitio(a); igual(a, []) }
})

probar(26, 'hayDuplicados', () => {
    igual(hayDuplicados([1, 2, 3, 1]), true)
    igual(hayDuplicados([1, 2, 3]), false)
    igual(hayDuplicados([]), false)
    igual(hayDuplicados([4]), false)
    igual(hayDuplicados([2, 2]), true)
    igual(hayDuplicados([5, 6, 7, 7]), true)
    noMuta(hayDuplicados, [1, 2, 1])
})

probar(27, 'contarParesConSuma', () => {
    igual(contarParesConSuma([1, 2, 3, 4, 5], 5), 2)
    igual(contarParesConSuma([2, 2, 2], 4), 3)
    igual(contarParesConSuma([1, 2], 10), 0)
    igual(contarParesConSuma([], 0), 0)
    igual(contarParesConSuma([3], 6), 0)
    igual(contarParesConSuma([-1, 1, 2, -2], 0), 2)
    noMuta(contarParesConSuma, [1, 2, 3], 5)
})

probar(28, 'comunes', () => {
    igual(comunes([1, 2, 2, 3, 4], [2, 4, 6]), [2, 4])
    igual(comunes([1, 2], [3]), [])
    igual(comunes([], [1]), [])
    igual(comunes([5, 5, 5], [5]), [5])
    igual(comunes([1, 2, 3], [3, 2, 1, 1]), [1, 2, 3])
    noMuta(comunes, [1, 2, 2], [2]); noMuta(comunes, [2], [1, 2, 2])
})

probar(29, 'contarComunesOrdenados', () => {
    igual(contarComunesOrdenados([1, 3, 5, 7], [3, 4, 5, 8]), 2)
    igual(contarComunesOrdenados([1, 2], [3, 4]), 0)
    igual(contarComunesOrdenados([], [1]), 0)
    igual(contarComunesOrdenados([1, 2, 3], [1, 2, 3]), 3)
    igual(contarComunesOrdenados([2, 4, 6, 8], [1, 2, 3, 4]), 2)
    igual(contarComunesOrdenados([5], [1, 2, 3, 4, 5]), 1)
    noMuta(contarComunesOrdenados, [1, 2], [2, 3])
})

probar(30, 'ordenarBurbuja', () => {
    igual(ordenarBurbuja([5, 2, 9, 1]), [1, 2, 5, 9])
    igual(ordenarBurbuja([3, 1, 2]), [1, 2, 3])
    igual(ordenarBurbuja([]), [])
    igual(ordenarBurbuja([4]), [4])
    igual(ordenarBurbuja([2, 2, 1]), [1, 2, 2])
    igual(ordenarBurbuja([-3, 5, -10, 0]), [-10, -3, 0, 5])
    igual(ordenarBurbuja([1, 2, 3]), [1, 2, 3])
    noMuta(ordenarBurbuja, [3, 1, 2])
})

probar(31, 'mayorSumaDeK', () => {
    igual(mayorSumaDeK([1, 4, 2, 10, 2, 3], 3), 16)
    igual(mayorSumaDeK([-5, -2, -8], 2), -7)
    igual(mayorSumaDeK([5], 1), 5)
    igual(mayorSumaDeK([1, 2], 3), null)
    igual(mayorSumaDeK([2, 3, 4, 1], 4), 10)
    igual(mayorSumaDeK([-1, -2], 1), -1)
    noMuta(mayorSumaDeK, [1, 2, 3], 2)
})

probar(32, 'aplanar', () => {
    igual(aplanar([[1, 2], [3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6])
    igual(aplanar([]), [])
    igual(aplanar([[], [1], []]), [1])
    igual(aplanar([[7]]), [7])
    noMuta(aplanar, [[1, 2], [3]])
})

probar(33, 'buscarEnMatriz', () => {
    igual(buscarEnMatriz([[1, 2], [3, 4]], 3), [1, 0])
    igual(buscarEnMatriz([[1, 2], [3, 4]], 5), [-1, -1])
    igual(buscarEnMatriz([], 1), [-1, -1])
    igual(buscarEnMatriz([[7, 7], [7, 7]], 7), [0, 0])
    igual(buscarEnMatriz([[1], [2], [3]], 3), [2, 0])
    igual(buscarEnMatriz([[], [1]], 1), [1, 0])
    noMuta(buscarEnMatriz, [[1, 2], [3, 4]], 3)
})

probar(34, 'tablaDeMultiplicar', () => {
    igual(tablaDeMultiplicar(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
    igual(tablaDeMultiplicar(1), [[1]])
    igual(tablaDeMultiplicar(0), [])
    igual(tablaDeMultiplicar(4), [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]])
})

probar(35, 'sumaDiagonales', () => {
    igual(sumaDiagonales([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 25)
    igual(sumaDiagonales([[5]]), 5)
    igual(sumaDiagonales([[1, 2], [3, 4]]), 10)
    igual(sumaDiagonales([]), 0)
    igual(sumaDiagonales([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]), 8)
    noMuta(sumaDiagonales, [[1, 2], [3, 4]])
})

probar(36, 'transponer', () => {
    igual(transponer([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]])
    igual(transponer([[1, 2], [3, 4]]), [[1, 3], [2, 4]])
    igual(transponer([[1], [2], [3]]), [[1, 2, 3]])
    igual(transponer([]), [])
    igual(transponer([[9]]), [[9]])
    noMuta(transponer, [[1, 2, 3], [4, 5, 6]])
})

probar(37, 'mayorRachaCreciente', () => {
    igual(mayorRachaCreciente([1, 2, 3, 1, 2]), 3)
    igual(mayorRachaCreciente([5, 4, 3]), 1)
    igual(mayorRachaCreciente([1, 1, 1]), 1)
    igual(mayorRachaCreciente([]), 0)
    igual(mayorRachaCreciente([1, 3, 5, 7]), 4)
    igual(mayorRachaCreciente([2, 1, 2, 3, 4]), 4)
    igual(mayorRachaCreciente([7]), 1)
    noMuta(mayorRachaCreciente, [1, 2, 3])
})

probar(38, 'masFrecuente', () => {
    igual(masFrecuente([1, 3, 2, 3, 1, 3]), 3)
    igual(masFrecuente([4, 5, 5, 4]), 4)
    igual(masFrecuente([9]), 9)
    igual(masFrecuente([]), null)
    igual(masFrecuente([-1, -1, 2]), -1)
    igual(masFrecuente([1, 2, 3]), 1)
    noMuta(masFrecuente, [1, 2, 2])
})

probar(39, 'recorrerEspiral', () => {
    igual(recorrerEspiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5])
    igual(recorrerEspiral([[1, 2, 3, 4]]), [1, 2, 3, 4])
    igual(recorrerEspiral([[1], [2], [3]]), [1, 2, 3])
    igual(recorrerEspiral([[1, 2], [3, 4]]), [1, 2, 4, 3])
    igual(recorrerEspiral([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]), [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
    igual(recorrerEspiral([]), [])
    igual(recorrerEspiral([[5]]), [5])
    noMuta(recorrerEspiral, [[1, 2], [3, 4]])
})

probar(40, 'parentesisBalanceados', () => {
    igual(parentesisBalanceados('(a(b)c)'), true)
    igual(parentesisBalanceados('(()'), false)
    igual(parentesisBalanceados(')('), false)
    igual(parentesisBalanceados(''), true)
    igual(parentesisBalanceados('())('), false)
    igual(parentesisBalanceados('()()'), true)
    igual(parentesisBalanceados('sin parentesis'), true)
})
