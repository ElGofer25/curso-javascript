/*
REPASO 01 — ETAPA 1: ARRAYS, STRINGS, ÍNDICES, BUCLES Y CONDICIONALES
Teoría de apoyo (01.Bases): 06-strings · 08-conditionals · 10-array · 14-loops ·
32-accumulators · 33-big-o

ORGANIZACIÓN
  Ejercicios 01–06 .... arrays e índices
  Ejercicios 07–12 .... strings y recorridos
  Ejercicios 13–16 .... condicionales y reglas múltiples
  Ejercicios 17–20 .... integración estilo LeetCode (acumuladores, bordes, dos índices)

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN y RESTRICCIONES: te dicen qué problema resuelves, qué datos esperar y con
     qué herramientas puedes (y no puedes) resolverlo.
  2. QUÉ DEBES HACER dice QUÉ debe cumplir la función (firma, qué devuelve en cada caso,
     bordes), no cómo: tú decides el algoritmo, respetando RESTRICCIONES.
  3. Escribe tu función debajo de «// TU SOLUCIÓN», con el nombre exacto que pide el enunciado.
  4. Antes de ejecutar, predice a mano el resultado de cada línea de COMPRUEBA
     (haz una tabla de seguimiento: variable por variable, vuelta por vuelta).
  5. Ejecuta:   node Repaso01.js
     Al final verás una línea por ejercicio:
        ✔  la función pasa todas las pruebas
        ✘  falla: muestra lo que obtuviste y lo que se esperaba
        …  pendiente: aún no declaras la función
     Para ver los valores, copia las líneas de COMPRUEBA debajo de tu función y ejecútalas.
  6. Si falla, NO cambies código al azar: haz la tabla de seguimiento con el caso que falló.
  7. Responde EXPLICA (y COMPLEJIDAD, cuando aparezca) en un comentario bajo tu solución.

RESTRICCIONES (en cada ejercicio)
  Datos .... qué entradas puedes esperar (rangos, vacío, negativos, repetidos...).
  Usa ..... la estructura de datos y el bucle o método que debes emplear.
  No uses .. lo que está prohibido en ESE ejercicio.

VOCABULARIO DE LOS ENUNCIADOS
  «Devuelve» = usa return. Imprimir con console.log NO sustituye a devolver.
  «Arreglo» = array. «Índice válido» = entero entre 0 y length - 1.
  «Recorre» = usa un for (o while) que visite los elementos en el orden que se indica.
  «Supón» = el dato ya es válido; no lo compruebes.
  «Arreglo nuevo» = crea otro con [] y llénalo; no devuelvas el recibido.
  «En el sitio» = modifica el arreglo recibido en lugar de crear uno nuevo.

REGLAS
  - No modifiques los argumentos recibidos, salvo que el ejercicio lo pida (las pruebas lo verifican).
  - Prohibido en todo el archivo, salvo que el ejercicio lo permita: map, filter, reduce,
    forEach, find, some, every, sort, reverse, Math.max, Math.min, expresiones regulares,
    Set y Map. El objetivo es dominar bucles, índices y condiciones.
  - Cada ejercicio concreta en «No uses» lo prohibido en él (puede añadir más cosas a esta
    lista, como slice, split o Math.floor) y en «Usa» lo que debes emplear.
  - Siempre permitido, salvo que «No uses» lo prohíba: variables, if/else, switch, for,
    while, for...of, .length, .push(), .includes() y los métodos de string que se indiquen.
  - No hay soluciones incluidas. Las pruebas automáticas están al final: no las edites.
*/

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE A — ARRAYS E ÍNDICES
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 01 — Extremos de un arreglo
/*
SITUACIÓN
  Una estación meteorológica guarda las temperaturas del día en un arreglo, de la primera
  lectura a la última. Para un resumen rápido solo necesitas dos datos: con qué temperatura
  empezó el día y con cuál terminó. Recibes el arreglo completo y devuelves otro arreglo con
  esos dos valores: [primera, última].

  Ejemplo: de [4, 8, 15] salen [4, 15].

  Idea: acceso por índice. La primera lectura está en la posición 0 y la última en la
  posición arr.length - 1; no hace falta recorrer nada.

RESTRICCIONES
  Datos:
  - Un arreglo de números; puede estar vacío o tener un solo elemento.
  Usa:
  - El arreglo recibido, leído por índice y con .length. El resultado es un arreglo nuevo.
  No uses:
  - .at(), slice, pop, shift ni ningún método que modifique arr.

QUÉ DEBES HACER
  1. Declara la función extremos(arr). Recibe un arreglo de números y devuelve un arreglo.
  2. Devuelve un arreglo nuevo de dos elementos: [primer elemento de arr, último elemento de arr].
     Con un solo elemento, el primero y el último son el mismo.
  3. Con un arreglo vacío devuelve [].
  4. arr queda intacto.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(extremos([4, 8, 15]));   // [4, 15]
  console.log(extremos([7]));          // [7, 7]    (un solo elemento)
  console.log(extremos([]));           // []        (arreglo vacío)

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
  Una persona anotó la temperatura de cada día de la semana y quiere saber en cuántos días
  hizo más calor que un umbral que ella elige. Recibes el arreglo de temperaturas y el
  umbral, y devuelves CUÁNTOS días lo superaron (un número), no cuáles fueron.

  Ejemplo: con [1, 5, 10, 15] y umbral 5, solo 10 y 15 lo superan: el resultado es 2. El 5
  no cuenta porque es igual al umbral, no mayor.

  Idea: el contador. Una variable que empieza en 0 y sube 1 cada vez que un elemento cumple
  la condición; al final contiene la respuesta.

RESTRICCIONES
  Datos:
  - Un arreglo de números (puede estar vacío y tener negativos) y un número límite.
  Usa:
  - El arreglo recibido, recorrido con un for con índice, y una variable numérica para llevar
    la cuenta.
  No uses:
  - filter, reduce, forEach; no crees arreglos auxiliares ni modifiques arr.

QUÉ DEBES HACER
  1. Declara la función contarMayores(arr, limite). Recibe un arreglo de números y un
     número, y devuelve un número.
  2. Devuelve cuántos elementos de arr son ESTRICTAMENTE mayores que limite. Un elemento
     igual al límite no cuenta.
  3. Con un arreglo vacío devuelve 0. arr queda intacto.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(contarMayores([1, 5, 10, 15], 5));   // 2
  console.log(contarMayores([2, 2, 2], 2));        // 0   (iguales al límite no cuentan)
  console.log(contarMayores([-1, -5], -3));        // 1   (hay negativos)
  console.log(contarMayores([], 3));               // 0   (arreglo vacío)

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
  Una tienda guarda los precios de sus productos en un arreglo y quiere saber cuál es el más
  alto. Recibes el arreglo de números y devuelves el mayor, sin usar Math.max: la
  comparación la haces tú.

  Ejemplo: en [3, 9, 2], el «mayor visto hasta ahora» va siendo 3, luego 9, y se queda en 9.

  Idea: recordar el mayor visto y cambiarlo cuando aparezca uno más grande. La trampa está
  en el punto de partida: ese valor inicial debe ser un elemento real de la lista, no un
  número inventado (con [-5, -2, -9], empezar en 0 daría un resultado que ni siquiera está
  en el arreglo).

RESTRICCIONES
  Datos:
  - Un arreglo de números; puede estar vacío, tener negativos y valores repetidos.
  Usa:
  - El arreglo recibido, recorrido con un for con índice, y variables sueltas (sin arreglos
    auxiliares).
  No uses:
  - Math.max, Math.min, sort, reduce; no crees arreglos auxiliares ni modifiques arr.

QUÉ DEBES HACER
  1. Declara la función maximo(arr). Recibe un arreglo de números y devuelve un número.
  2. Devuelve el mayor valor de arr. Siempre es uno de sus elementos: con todos negativos
     devuelve el mayor de ellos (en [-5, -2, -9], el -2).
  3. Con un arreglo vacío devuelve undefined (no existe un «mayor» de nada).
  4. arr queda intacto.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(maximo([3, 9, 2]));        // 9
  console.log(maximo([-5, -2, -9]));     // -2         (todos negativos)
  console.log(maximo([4]));              // 4          (un solo elemento)
  console.log(maximo([7, 7, 1]));        // 7          (máximo repetido)
  console.log(maximo([]));               // undefined  (arreglo vacío)

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
  Un maestro tiene la lista de asistencia en el orden en que llegaron los alumnos y quiere
  mostrarla del último al primero, sin perder el orden original, que seguirá usando. Recibes
  un arreglo y devuelves OTRO arreglo con los mismos elementos en orden contrario; el
  original no debe cambiar.

  Ejemplo: de [1, 2, 3] sale [3, 2, 1], y el original sigue siendo [1, 2, 3].

  Idea: recorrer un arreglo al revés. Se empieza en la última posición (arr.length - 1) y se
  baja de uno en uno hasta llegar a la 0, agregando cada elemento a un arreglo nuevo.

RESTRICCIONES
  Datos:
  - Un arreglo con elementos de cualquier tipo; puede estar vacío o tener un solo elemento.
  Usa:
  - El arreglo recibido, recorrido con un for con índice, y un arreglo nuevo para el
    resultado, al que agregas con .push().
  No uses:
  - reverse, slice, concat, spread (...), sort; no modifiques arr.

QUÉ DEBES HACER
  1. Declara la función invertirArreglo(arr). Recibe un arreglo y devuelve un arreglo nuevo.
  2. El resultado contiene los mismos elementos de arr en orden contrario: su primer
     elemento es el último de arr, y su último elemento es el primero de arr.
  3. Con un arreglo vacío devuelve [].
  4. arr queda exactamente igual, y el resultado es otro arreglo (no el mismo objeto).
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  const original = [1, 2, 3];
  const invertido = invertirArreglo(original);
  console.log(invertido);              // [3, 2, 1]
  console.log(original);               // [1, 2, 3]   (no se modificó)
  console.log(invertido === original); // false       (es un arreglo nuevo)
  console.log(invertirArreglo(['a'])); // ['a']
  console.log(invertirArreglo([]));    // []

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
  Para ordenar una lista, invertirla o mover elementos, la operación más básica es
  intercambiar dos de ellos de posición. Recibes un arreglo y dos posiciones i y j; en la
  posición i debe quedar lo que había en j, y en la j lo que había en i. A diferencia del
  ejercicio anterior, aquí SÍ se modifica el arreglo recibido, y se devuelve ese mismo
  arreglo. Si alguna de las posiciones no existe en el arreglo, no se hace nada.

  Ejemplo: en [1, 2, 3, 4], intercambiar las posiciones 0 y 3 deja [4, 2, 3, 1].

  Idea: la variable temporal. Si copias arr[j] sobre arr[i] sin guardar antes el valor de
  arr[i], ese valor se pierde y no puedes ponerlo en arr[j].

RESTRICCIONES
  Datos:
  - Un arreglo con elementos de cualquier tipo y dos posiciones i y j. Las posiciones pueden
    ser negativas, mayores o iguales que arr.length, o iguales entre sí.
  Usa:
  - El propio arreglo recibido, leído y asignado por índice, solo con variables sueltas
    (sin arreglos auxiliares), y Number.isInteger para validar las posiciones.
  No uses:
  - splice, slice, reverse, copiar el arreglo ni la asignación por desestructuración
    ([arr[i], arr[j]] = [arr[j], arr[i]]).

QUÉ DEBES HACER
  1. Declara la función intercambiar(arr, i, j). Recibe un arreglo y dos posiciones, y
     devuelve el MISMO arreglo recibido (no una copia).
  2. Una posición es válida si es un entero y cumple 0 <= posición < arr.length.
  3. Si i y j son válidas, al terminar la posición i contiene lo que había en j y la
     posición j contiene lo que había en i.
  4. Si i o j NO es válida, arr queda sin cambios.
  5. Si i y j son iguales, arr queda igual.
  6. La función modifica arr en el sitio y devuelve ese mismo arreglo.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  const a = [1, 2, 3, 4];
  const r = intercambiar(a, 0, 3);
  console.log(a);                             // [4, 2, 3, 1]   (se modificó el original)
  console.log(r === a);                       // true           (devuelve el MISMO arreglo)
  console.log(intercambiar([1, 2], 0, 5));    // [1, 2]         (j fuera de rango)
  console.log(intercambiar([1, 2], -1, 0));   // [1, 2]         (i negativo)
  console.log(intercambiar([1, 2, 3], 1, 1)); // [1, 2, 3]      (i y j iguales)

EXPLICA
  ¿Qué pasa si intentas intercambiar sin variable temporal usando solo dos asignaciones
  (arr[i] = arr[j]; arr[j] = arr[i])?
  Chocan los valores, la variable temporal nos permite 'retener' el valor por un instante en cada iteración y así poder verificar si cumple o no, si no la tuvieramos no podriamos guardar el valor para compararlo
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
  Un banco atiende en una fila circular: cuando la fila avanza k lugares, las k primeras
  personas pasan al final y todas las demás se recorren hacia adelante. Recibes un arreglo y
  un número k, y devuelves un arreglo NUEVO con el resultado. Con k = 0 la fila no se mueve.

  Ejemplo: [1, 2, 3, 4, 5] con k = 2. Los dos primeros (1 y 2) se van al final:
  [3, 4, 5, 1, 2].

  Idea: verlo por posiciones. En el resultado, la posición 0 toma el elemento que estaba k
  lugares adelante en el original (la posición 2, que vale 3). La posición 3 tomaría la 5,
  pero esa no existe: al llegar al final hay que volver al inicio y tomar la 0 (que vale 1).
  Esa «vuelta al llegar al final» es lo que resuelve el operador %.

RESTRICCIONES
  Datos:
  - Un arreglo de cualquier tipo de elementos (puede estar vacío) y un entero k >= 0, que
    puede ser mayor o igual que arr.length.
  Usa:
  - El arreglo recibido, recorrido con un for con índice, un arreglo nuevo para el
    resultado (con .push()) y el operador %.
  No uses:
  - slice, splice, concat, spread (...), shift, unshift, reverse; no modifiques arr.

QUÉ DEBES HACER
  1. Declara la función rotarIzquierda(arr, k). Recibe un arreglo y un entero k >= 0, y
     devuelve un arreglo nuevo.
  2. Devuelve los elementos de arr desplazados k lugares a la izquierda: los k primeros
     pasan al final, conservando su orden, y los demás quedan antes, también en su orden.
  3. Si k es mayor o igual que arr.length, la fila sigue girando: con 5 elementos, k = 7
     da el mismo resultado que k = 2.
  4. Con k = 0 devuelve un arreglo nuevo con los mismos elementos y en el mismo orden.
  5. Con un arreglo vacío devuelve [].
  6. arr queda intacto.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(rotarIzquierda([1, 2, 3, 4, 5], 2));   // [3, 4, 5, 1, 2]
  console.log(rotarIzquierda([1, 2, 3, 4, 5], 7));   // [3, 4, 5, 1, 2]   (7 ≥ length: da una vuelta y 2 más)
  console.log(rotarIzquierda([1, 2, 3], 0));         // [1, 2, 3]         (k = 0: copia igual)
  console.log(rotarIzquierda([], 3));                // []                (arreglo vacío)

EXPLICA
  ¿Qué papel cumple el operador % en el paso 5? Prueba (i + k) sin % con k = 7.
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN
{
  function rotarIzquierda(arr, k){
    const resultado = [];
    
    if(arr.length === 0){
      return []
    }
    for(let i = 0; i < arr.length; i++ ){
      position = (i+k) % arr.length
      resultado.push(arr[position])
    }
    
    return resultado;
  }


}

// ═══════════════════════════════════════════════════════════════════════════
// BLOQUE B — STRINGS Y RECORRIDOS
// ═══════════════════════════════════════════════════════════════════════════

// EJERCICIO 07 — Contar vocales
/*
SITUACIÓN
  Un corrector ortográfico quiere saber cuántas vocales tiene una palabra o frase para sus
  estadísticas de lectura. Recibes un texto y devuelves cuántas vocales (a, e, i, o, u)
  contiene, sin importar si están en mayúscula o minúscula.

  Ejemplo: 'Hola Mundo' tiene 4 vocales: o, a, u, o.

  Idea: recorrer un texto carácter por carácter y contar solo los que cumplen una condición.
  Pasar antes el texto a minúsculas permite comparar con 5 letras en lugar de 10.

RESTRICCIONES
  Datos:
  - Un texto que puede estar vacío y contener mayúsculas, minúsculas, espacios, signos y
    letras con acento.
  Usa:
  - El texto recibido, recorrido con un bucle for o for...of, el método de string
    toLowerCase(), .includes() sobre un texto fijo de vocales y una variable numérica.
  No uses:
  - Set, Map, expresiones regulares, split, match, filter, reduce ni arreglos auxiliares.

QUÉ DEBES HACER
  1. Declara la función contarVocales(texto). Recibe un texto y devuelve un número.
  2. Devuelve cuántos caracteres de texto son vocales: a, e, i, o, u, en mayúscula o en
     minúscula (la «A» cuenta igual que la «a»).
  3. Las vocales con acento (á, é, í, ó, ú) NO se cuentan.
  4. Con un texto vacío, o sin vocales, devuelve 0.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(contarVocales('Hola Mundo'));    // 4    (o, a, u, o)
  console.log(contarVocales('rhythm'));        // 0    (sin vocales)
  console.log(contarVocales('AEIOUaeiou'));    // 10   (mayúsculas y minúsculas)
  console.log(contarVocales(''));              // 0    (texto vacío)

EXPLICA
  ¿Por qué conviene normalizar con toLowerCase() en lugar de comparar con diez letras?
*/
// TU SOLUCIÓN
{
  function contarVocales(texto){
    let contador;
    texto = texto.toLowerCase()
    vowels = new Set(['a', 'o', 'i', 'e', 'u'])

    for(let i = 0; i < texto.length; i++){
      if( vowels.has(texto)){
        contador += 1
      }

    }
    
    return contador
  }

}


// EJERCICIO 08 — Capitalizar cada palabra
/*
SITUACIÓN
  Un formulario recibe nombres escritos de cualquier manera (por ejemplo, 'jAVAsCRIPT' o
  'ana lopez') y quiere mostrarlos con un formato uniforme: cada palabra empieza con
  mayúscula y el resto va en minúscula. Recibes una frase con las palabras separadas por un
  solo espacio y devuelves la frase transformada.

  Ejemplo: 'hola mundo' → 'Hola Mundo'.

  Idea: trabajar palabra por palabra. Se separa el texto en un arreglo de palabras, se
  transforma cada una y se vuelve a unir. Cuidado con el texto vacío: al separarlo queda una
  palabra vacía, y esa no tiene una primera letra que poner en mayúscula.

RESTRICCIONES
  Datos:
  - Un texto de letras sin acento, con las palabras separadas por UN solo espacio y sin
    espacios al inicio ni al final; las letras pueden venir en mayúscula y minúscula
    mezcladas. Puede ser el texto vacío.
  Usa:
  - Un arreglo de palabras obtenido con split(' '), un bucle for...of o for con índice, los
    métodos de string toUpperCase(), toLowerCase() y slice(), .push() sobre un arreglo
    nuevo y join(' ') para unir.
  No uses:
  - Expresiones regulares, replace, map, forEach ni reduce.

QUÉ DEBES HACER
  1. Declara la función capitalizar(frase). Recibe un texto y devuelve un texto.
  2. Devuelve la frase con la primera letra de cada palabra en mayúscula y todas las demás
     letras en minúscula. Los espacios quedan como estaban.
  3. Con el texto vacío devuelve '' (sin error).
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(capitalizar('hola mundo'));   // 'Hola Mundo'
  console.log(capitalizar('jAVAsCRIPT'));   // 'Javascript'   (mayúsculas mezcladas)
  console.log(capitalizar('a'));            // 'A'            (una letra)
  console.log(capitalizar(''));             // ''             (''.split(' ') da [''])

EXPLICA
  ¿Qué error ocurre si aplicas toUpperCase() sobre ''[0]? ¿Cómo lo evitaste?
*/
// TU SOLUCIÓN


// EJERCICIO 09 — Palíndromo con dos extremos
/*
SITUACIÓN
  Un palíndromo es un texto que se lee igual de izquierda a derecha que de derecha a
  izquierda, como «anita lava la tina». Para decidirlo se ignoran las mayúsculas y todo lo
  que no sea letra o dígito: en 'A man, a plan, a canal: Panama' no cuentan ni las comas, ni
  los espacios, ni los dos puntos. Recibes un texto y devuelves true o false.

  Ejemplo: 'abba' → se compara la primera 'a' con la última 'a', luego 'b' con 'b': es
  palíndromo.

  Idea: dos índices, uno en cada extremo, que se acercan al centro. Cuando uno de los dos
  apunta a un carácter que no cuenta, ese índice se salta y se vuelve a comparar. No se
  construye ningún texto nuevo.

RESTRICCIONES
  Datos:
  - Un texto con letras sin acento, dígitos, espacios y signos de puntuación; puede estar
    vacío o no tener ninguna letra ni dígito.
  Usa:
  - El texto recibido leído por índice (texto[i]), un bucle while, toLowerCase() sobre
    caracteres sueltos, comparaciones entre caracteres y variables numéricas.
  No uses:
  - reverse, split, join, replace, expresiones regulares, .at(), arreglos auxiliares ni
    crear una versión limpia o copia del texto.

QUÉ DEBES HACER
  1. Declara la función auxiliar esAlfanumerico(c). Recibe un carácter y devuelve true si es
     una letra de la a a la z (minúscula o mayúscula) o un dígito del 0 al 9; en otro
     caso, false.
  2. Declara la función esPalindromo(texto). Recibe un texto y devuelve un booleano.
  3. Devuelve true si, ignorando las mayúsculas y todo carácter que no sea alfanumérico,
     las letras y dígitos restantes se leen igual de izquierda a derecha que de derecha a
     izquierda; en caso contrario, false.
  4. Con un texto vacío, o sin ningún carácter alfanumérico, devuelve true.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(esPalindromo('A man, a plan, a canal: Panama'));  // true
  console.log(esPalindromo('race a car'));                      // false
  console.log(esPalindromo(''));                                // true    (vacío)
  console.log(esPalindromo('.,'));                              // true    (solo signos)
  console.log(esPalindromo('0P'));                              // false   ('0' y 'p' son distintos)
  console.log(esPalindromo('abba'));                            // true

EXPLICA
  ¿Por qué los pasos 4a y 4b avanzan un índice y vuelven a empezar, en vez de comparar directamente?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN


// EJERCICIO 10 — Comprimir repeticiones
/*
SITUACIÓN
  Para ahorrar espacio, un sistema guarda un texto con letras repetidas indicando cada letra
  y cuántas veces se repite SEGUIDA: 'aaabcc' se guarda como 'a3b1c2'. Recibes el texto y
  devuelves la versión comprimida. Solo se agrupan letras iguales consecutivas: 'aabaa' da
  'a2b1a2', no 'a4b1'.

  Ejemplo: 'aaabccdd' → 'a3b1c2d2'.

  Idea: llevar el grupo en curso (la letra actual y cuántas van) y cerrarlo cuando la letra
  cambia. El último grupo nunca ve un cambio, así que hay que cerrarlo aparte, al terminar
  el recorrido.

RESTRICCIONES
  Datos:
  - Un texto de letras (sin dígitos); puede estar vacío o ser de una sola letra.
  Usa:
  - El texto recibido, recorrido con un for con índice en un solo recorrido, y un texto
    para el resultado que se va ampliando con +.
  No uses:
  - Expresiones regulares, split, join, repeat, Map, Set, ni arreglos auxiliares.

QUÉ DEBES HACER
  1. Declara la función comprimir(texto). Recibe un texto y devuelve un texto.
  2. Cada grupo de letras iguales CONSECUTIVAS se reemplaza por la letra seguida de cuántas
     veces se repite, sin separadores: 'aaabcc' da 'a3b1c2'. Un grupo de una sola letra
     lleva 1 ('abc' da 'a1b1c1'). Un grupo de 12 letras lleva el número completo: 'a12'.
  3. La misma letra en grupos separados da grupos separados: 'aabaa' da 'a2b1a2', no 'a4b1'.
  4. Con el texto vacío devuelve ''.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(comprimir('aaabccdd'));   // 'a3b1c2d2'
  console.log(comprimir('abc'));        // 'a1b1c1'    (ninguna se repite)
  console.log(comprimir('zzzz'));       // 'z4'        (un solo grupo)
  console.log(comprimir('aabaa'));      // 'a2b1a2'    (la 'a' reaparece)
  console.log(comprimir(''));           // ''          (texto vacío)

EXPLICA
  ¿Por qué hay que agregar el último grupo fuera del bucle? ¿Qué pasaría si no se hiciera?
*/
// TU SOLUCIÓN


// EJERCICIO 11 — Longitud de la última palabra
/*
SITUACIÓN
  Un editor de texto quiere mostrar la longitud de la última palabra de lo que escribió el
  usuario, pero el texto puede terminar con espacios sobrantes. Recibes un texto y devuelves
  cuántas letras tiene su última palabra (0 si no hay ninguna).

  Ejemplo: 'Hello World  ' → 5. Los espacios del final se ignoran.

  Idea: recorrer el texto de derecha a izquierda en dos fases. Primero se saltan los
  espacios del final; luego se cuentan las letras hasta toparse con un espacio o con el
  inicio del texto. Por eso se evitan split y trim: se practica controlar los índices.

RESTRICCIONES
  Datos:
  - Un texto de letras y espacios (el espacio ' ' es el único separador). Puede estar vacío,
    tener solo espacios, y tener espacios al inicio, entre palabras y al final.
  Usa:
  - El texto recibido, leído por índice (texto[i]), bucles while y variables numéricas.
  No uses:
  - trim, split, lastIndexOf, slice, reverse, .at(), expresiones regulares ni arreglos
    auxiliares.

QUÉ DEBES HACER
  1. Declara la función longitudUltimaPalabra(texto). Recibe un texto y devuelve un número.
  2. Devuelve cuántos caracteres tiene la última palabra de texto. Una palabra es una
     secuencia de caracteres distintos de espacio; los espacios al final no cuentan.
  3. Si el texto está vacío o solo tiene espacios, devuelve 0.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(longitudUltimaPalabra('Hello World'));                  // 5
  console.log(longitudUltimaPalabra('   fly me   to   the moon  '));  // 4    (espacios al final)
  console.log(longitudUltimaPalabra('a '));                           // 1
  console.log(longitudUltimaPalabra('   '));                          // 0    (solo espacios)
  console.log(longitudUltimaPalabra(''));                             // 0    (vacío)

EXPLICA
  ¿Por qué recorrer de derecha a izquierda es más directo que de izquierda a derecha?
*/
// TU SOLUCIÓN


// EJERCICIO 12 — Subsecuencia
/*
SITUACIÓN
  Un buscador sugiere una palabra cuando las letras que escribiste aparecen en ella en el
  mismo orden, aunque no estén seguidas. A eso se le llama «subsecuencia». Recibes dos
  textos, «corta» y «larga», y devuelves true si las letras de corta aparecen en larga, en
  ese orden.

  Ejemplo: 'ace' sí es subsecuencia de 'abcde' (a… c… e), pero 'aec' no, porque en 'abcde'
  la e viene después de la c.

  Idea: recorrer «larga» una sola vez con un índice auxiliar que recuerda cuál letra de
  «corta» se busca ahora; ese índice avanza cada vez que se encuentra la letra buscada. Si
  al final se encontraron todas, es subsecuencia.

RESTRICCIONES
  Datos:
  - Dos textos, «corta» y «larga»; cualquiera puede estar vacío, y «corta» puede ser más
    larga que «larga».
  Usa:
  - El texto «larga» recorrido con un for con índice en UN solo recorrido, y variables
    numéricas (sin arreglos).
  No uses:
  - includes, indexOf, split, expresiones regulares, bucles anidados, recursión ni arreglos
    auxiliares.

QUÉ DEBES HACER
  1. Declara la función esSubsecuencia(corta, larga). Recibe dos textos y devuelve un
     booleano.
  2. Devuelve true si se puede obtener «corta» borrando cero o más caracteres de «larga»
     sin cambiar el orden de los que quedan. Cada carácter de «larga» se usa una sola vez
     ('aa' NO es subsecuencia de 'a'). Mayúsculas y minúsculas son distintas.
  3. Con «corta» vacía devuelve true. Con «larga» vacía y «corta» no vacía devuelve false.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(esSubsecuencia('ace', 'abcde'));   // true
  console.log(esSubsecuencia('aec', 'abcde'));   // false   (el orden importa)
  console.log(esSubsecuencia('', 'abc'));        // true    (no hay nada que buscar)
  console.log(esSubsecuencia('a', ''));          // false   («larga» vacía)
  console.log(esSubsecuencia('abc', 'abc'));     // true
  console.log(esSubsecuencia('abcd', 'abc'));    // false   («corta» más larga que «larga»)

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
  Un programa de geometría recibe tres longitudes y debe decir qué tipo de triángulo forman:
  equilátero (tres lados iguales), isósceles (dos iguales) o escaleno (los tres distintos).
  Pero no cualquier trío forma un triángulo: ninguna longitud puede ser 0 o negativa, y la
  suma de dos lados debe superar siempre al tercero. Recibes tres números y devuelves
  'equilatero', 'isosceles', 'escaleno' o 'invalido'.

  Ejemplo: con 1, 2 y 3, los dos lados cortos suman 3, igual que el largo: quedan alineados
  y no forman triángulo → 'invalido'.

  Idea: el orden de las condiciones. Lo inválido se descarta primero, porque 2, 2 y 4 tiene
  dos lados iguales pero no es un triángulo; si preguntaras por 'isosceles' antes,
  responderías mal.

RESTRICCIONES
  Datos:
  - Tres números que son las longitudes de los lados; pueden ser cero, negativos o
    decimales.
  Usa:
  - Solo variables y condicionales (if/else) con operadores de comparación y lógicos
    (===, <=, &&, ||).
  No uses:
  - sort, Math.max, Math.min, Set ni arreglos auxiliares.

QUÉ DEBES HACER
  1. Declara la función clasificarTriangulo(a, b, c). Recibe tres números y devuelve un texto.
  2. Devuelve 'invalido' si algún lado es menor o igual que 0, o si la suma de dos lados
     cualesquiera es menor o igual que el tercero. Un trío inválido da 'invalido' aunque
     tenga lados iguales (2, 2, 4).
  3. Si es válido, devuelve 'equilatero' con los tres lados iguales, 'isosceles' con
     exactamente dos lados iguales (estén en la posición que estén) y 'escaleno' con los
     tres lados distintos.
  4. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(clasificarTriangulo(3, 3, 3));    // 'equilatero'
  console.log(clasificarTriangulo(3, 3, 2));    // 'isosceles'
  console.log(clasificarTriangulo(3, 4, 5));    // 'escaleno'
  console.log(clasificarTriangulo(1, 2, 3));    // 'invalido'   (1 + 2 no supera a 3)
  console.log(clasificarTriangulo(2, 2, 4));    // 'invalido'   (2 + 2 no supera a 4)
  console.log(clasificarTriangulo(0, 1, 1));    // 'invalido'   (un lado es 0)
  console.log(clasificarTriangulo(-1, 2, 2));   // 'invalido'   (un lado es negativo)
  console.log(clasificarTriangulo(5, 5, 8));    // 'isosceles'
  console.log(clasificarTriangulo(8, 5, 5));    // 'isosceles'  (los iguales no están al inicio)

EXPLICA
  ¿Qué resultado errado obtendrías con (2, 2, 4) si comprobaras 'isosceles' antes que lo inválido?
*/
// TU SOLUCIÓN


// EJERCICIO 14 — Días de un mes
/*
SITUACIÓN
  Una aplicación de calendario necesita saber cuántos días tiene un mes de un año concreto.
  La mayoría de los meses siempre tiene los mismos días, pero febrero tiene 28 o 29 según el
  año sea bisiesto. Un año es bisiesto si es divisible entre 4, salvo los divisibles entre
  100, que solo lo son si también son divisibles entre 400 (el 2000 sí lo fue; el 1900 no).
  Recibes el mes (de 1 a 12) y el año, y devuelves el número de días, o -1 si el mes no
  existe.

  Ejemplo: diasDelMes(2, 2024) → 29, porque 2024 es divisible entre 4 y no entre 100.

  Idea: combinar condiciones con && y || para decidir el año bisiesto, y usar un switch para
  agrupar los meses que comparten el mismo resultado.

RESTRICCIONES
  Datos:
  - mes: un número que puede ser entero de 1 a 12, pero también 0, negativo, mayor que 12 o
    decimal. anio: un entero positivo.
  Usa:
  - Una función auxiliar esBisiesto(anio), un switch sobre el mes, Number.isInteger y el
    operador %.
  No uses:
  - Date, arreglos o tablas con los días de cada mes, ni objetos o Map.

QUÉ DEBES HACER
  1. Declara la función auxiliar esBisiesto(anio). Recibe un año y devuelve true si es
     bisiesto según la regla de SITUACIÓN, y false si no.
  2. Declara la función diasDelMes(mes, anio). «mes» va de 1 (enero) a 12 (diciembre).
     Devuelve un número.
  3. Devuelve 30 para abril, junio, septiembre y noviembre; 29 para febrero en año
     bisiesto y 28 en año no bisiesto; 31 para los demás meses.
  4. Si mes no es un entero entre 1 y 12 (0, negativos, mayores que 12, decimales),
     devuelve -1.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(diasDelMes(1, 2023));     // 31
  console.log(diasDelMes(4, 2023));     // 30
  console.log(diasDelMes(2, 2023));     // 28
  console.log(diasDelMes(2, 2024));     // 29   (2024 es divisible entre 4)
  console.log(diasDelMes(2, 1900));     // 28   (divisible entre 100, pero no entre 400)
  console.log(diasDelMes(2, 2000));     // 29   (divisible entre 400)
  console.log(diasDelMes(12, 2024));    // 31
  console.log(diasDelMes(13, 2024));    // -1   (mes mayor que 12)
  console.log(diasDelMes(0, 2024));     // -1   (mes menor que 1)
  console.log(diasDelMes(1.5, 2024));   // -1   (mes no entero)

EXPLICA
  ¿Por qué 1900 no es bisiesto aunque sea divisible entre 4?
*/
// TU SOLUCIÓN


// EJERCICIO 15 — Precio de un boleto
/*
SITUACIÓN
  Un cine calcula el precio de cada boleto con estas ideas: los menores de 5 años entran
  gratis; el precio base depende de la edad (niños, adultos y adultos mayores pagan
  distinto); y hay descuentos que dependen del día y de si la persona es estudiante. Si dos
  descuentos aplican a la vez, NO se suman: se aplica solo el mayor. Recibes la edad, si es
  estudiante y el día de la semana, y devuelves el precio final.

  Ejemplo: un estudiante de 20 años paga 80 un lunes (base 100 menos 20 %), pero 50 un
  miércoles, porque el descuento de miércoles (50 %) es mayor que el de estudiante (20 %).

  Idea: el orden de las reglas y los valores borde. Las condiciones cambian justo en 4 y 5,
  en 12 y 13, y en 64 y 65; ahí es donde se equivocan casi todas las soluciones.

RESTRICCIONES
  Datos:
  - edad: un entero (puede ser negativo). esEstudiante: un booleano. dia: un texto en
    minúsculas y sin tilde ('lunes', 'martes', 'miercoles'…).
  Usa:
  - Condicionales if/else con comparaciones y variables numéricas; los precios y
    porcentajes son enteros.
  No uses:
  - Math.max, Math.min, arreglos, objetos ni Map.

QUÉ DEBES HACER
  1. Declara la función precioBoleto(edad, esEstudiante, dia). Recibe un entero, un
     booleano y un texto, y devuelve un número.
  2. Si edad es menor que 0, devuelve -1 (dato inválido).
  3. Si edad es 0 a 4, el boleto es gratis: devuelve 0.
  4. Precio base según la edad: de 5 a 12 años, 50; de 13 a 64 años, 100; de 65 años o más, 60.
  5. Descuentos, como porcentaje del precio base:
     a) el día 'miercoles': 50 %, para cualquier edad;
     b) esEstudiante es true y edad de 13 a 64 inclusive: 20 %;
     c) cualquier otro caso: sin descuento.
     Si aplican a) y b) a la vez, NO se suman: se aplica solo el mayor.
  6. Devuelve el precio base menos el descuento que corresponda.
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(precioBoleto(-1, false, 'lunes'));      // -1    (edad inválida)
  console.log(precioBoleto(4, false, 'miercoles'));   // 0     (menor de 5)
  console.log(precioBoleto(12, false, 'lunes'));      // 50    (borde: 12)
  console.log(precioBoleto(10, true, 'lunes'));       // 50    (estudiante, pero menor de 13)
  console.log(precioBoleto(10, false, 'miercoles'));  // 25    (50% de 50)
  console.log(precioBoleto(13, false, 'lunes'));      // 100   (borde: 13)
  console.log(precioBoleto(20, true, 'lunes'));       // 80    (20% de descuento)
  console.log(precioBoleto(20, true, 'miercoles'));   // 50    (gana el 50%; no se suman)
  console.log(precioBoleto(20, false, 'miercoles'));  // 50
  console.log(precioBoleto(64, false, 'lunes'));      // 100   (borde: 64)
  console.log(precioBoleto(65, false, 'lunes'));      // 60    (borde: 65)
  console.log(precioBoleto(70, true, 'lunes'));       // 60    (estudiante, pero mayor de 64)
  console.log(precioBoleto(70, false, 'miercoles'));  // 30

EXPLICA
  Haz una lista de los valores borde de este ejercicio (4, 5, 12, 13, 64, 65...) y di qué
  condición cambia en cada uno.
*/
// TU SOLUCIÓN


// EJERCICIO 16 — Fortaleza de una clave
/*
SITUACIÓN
  Un formulario de registro evalúa la contraseña que escribe el usuario con cuatro
  criterios: tiene al menos 8 caracteres, tiene una mayúscula, tiene una minúscula y tiene
  un dígito. Cuantos más cumpla, más fuerte es: los cuatro la hacen 'fuerte', tres 'media' y
  menos de tres 'debil'. Recibes la contraseña y devuelves esa clasificación.

  Ejemplo: 'Abcdef12' cumple los cuatro criterios; 'abcdef12' cumple tres, porque no tiene
  mayúscula.

  Idea: recorrer la contraseña una sola vez, activando una bandera (true/false) por cada
  tipo de carácter que aparece. Al terminar, se cuentan cuántos criterios se cumplen y con
  eso se decide la clasificación.

RESTRICCIONES
  Datos:
  - Un texto cualquiera: puede estar vacío y contener símbolos, espacios y letras con tilde.
  Usa:
  - La clave recorrida con un for...of en UN solo recorrido, variables booleanas y
    numéricas, y comparaciones entre caracteres (por ejemplo c >= 'a').
  No uses:
  - Expresiones regulares (test, match), some, every, split, Set, Map ni arreglos auxiliares.

QUÉ DEBES HACER
  1. Declara la función clasificarClave(clave). Recibe un texto y devuelve un texto.
  2. Los criterios son cuatro: a) tiene 8 caracteres o más (cuentan todos, también los
     símbolos); b) tiene al menos una mayúscula de la A a la Z; c) tiene al menos una
     minúscula de la a a la z; d) tiene al menos un dígito del 0 al 9.
  3. Devuelve 'fuerte' si cumple los cuatro criterios, 'media' si cumple exactamente tres,
     y 'debil' si cumple dos o menos.
  4. Un carácter que no es letra de la A a la Z ni dígito (símbolos, espacios, la ñ) no
     cuenta para los criterios b), c) ni d).
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(clasificarClave('Abcdef12'));   // 'fuerte'   (cumple los 4)
  console.log(clasificarClave('abcdef12'));   // 'media'    (sin mayúscula)
  console.log(clasificarClave('Abc12'));      // 'media'    (corta, pero cumple los otros tres)
  console.log(clasificarClave('Abcdefgh'));   // 'media'    (sin dígito)
  console.log(clasificarClave('ABCDEFGH'));   // 'debil'    (solo longitud y mayúscula: 2)
  console.log(clasificarClave('12345678'));   // 'debil'    (solo longitud y dígito: 2)
  console.log(clasificarClave('abc'));        // 'debil'
  console.log(clasificarClave(''));           // 'debil'

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
  Una caja registradora debe devolver el cambio con el menor número de monedas posible. Hay
  monedas de 200, 100, 50, 20, 10, 5, 2 y 1. Recibes la cantidad a devolver y entregas un
  arreglo con las monedas usadas, de mayor a menor.

  Ejemplo: 289 → [200, 50, 20, 10, 5, 2, 2]. Cabe una de 200 (faltan 89), una de 50 (faltan
  39), una de 20 (faltan 19), una de 10 (faltan 9), una de 5 (faltan 4) y dos de 2 (faltan
  0).

  Idea: un algoritmo voraz. Se va de la moneda más grande a la más chica, usando cada una
  tantas veces como quepa en lo que todavía falta por devolver.

RESTRICCIONES
  Datos:
  - Un número monto: puede ser cero, negativo o decimal.
  Usa:
  - Un arreglo con las ocho monedas disponibles y un arreglo nuevo para el resultado (con
    .push()), un bucle for...of y un while, y variables numéricas.
  No uses:
  - Math.floor, Math.trunc, recursión, sort, reverse, map, reduce ni modificar el arreglo
    de monedas.

QUÉ DEBES HACER
  1. Declara la función cambioMinimo(monto). Recibe un número y devuelve un arreglo de
     números.
  2. Las monedas disponibles son 200, 100, 50, 20, 10, 5, 2 y 1, sin límite de existencias.
  3. Si monto es un entero positivo, devuelve las monedas que suman exactamente monto,
     usando el menor número posible de monedas, ordenadas de mayor a menor. Una moneda
     usada varias veces aparece repetida ([200, 200] para 400).
  4. Si monto no es un entero positivo (0, negativo o decimal), devuelve [].
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(cambioMinimo(289));   // [200, 50, 20, 10, 5, 2, 2]
  console.log(cambioMinimo(8));     // [5, 2, 1]
  console.log(cambioMinimo(400));   // [200, 200]    (la misma moneda dos veces)
  console.log(cambioMinimo(1));     // [1]
  console.log(cambioMinimo(0));     // []            (monto no positivo)
  console.log(cambioMinimo(-5));    // []            (negativo)
  console.log(cambioMinimo(3.5));   // []            (decimal)

EXPLICA
  ¿Por qué ir de la moneda más grande a la más chica produce menos monedas con este conjunto?
*/
// TU SOLUCIÓN


// EJERCICIO 18 — El segundo mayor
/*
SITUACIÓN
  Un ranking guarda las puntuaciones de una competencia, con repeticiones posibles, y
  quieres conocer la del subcampeón: el segundo valor DISTINTO más grande. Si dos personas
  empatan en el primer lugar, el segundo lugar es el siguiente valor diferente. Recibes un
  arreglo de números y devuelves ese valor, o undefined si no hay dos valores distintos.

  Ejemplo: en [3, 1, 4, 4, 2] el mayor es 4 y el segundo mayor es 3; el 4 repetido no cuenta
  como segundo.

  Idea: recorrer el arreglo UNA vez llevando dos acumuladores a la vez: el mayor visto y el
  segundo mayor visto. Cuando aparece un valor nuevo se actualizan juntos, porque el mayor
  anterior pasa a ser el segundo.

RESTRICCIONES
  Datos:
  - Un arreglo de números de cualquier longitud; puede estar vacío y tener negativos y
    valores repetidos.
  Usa:
  - El arreglo recibido, recorrido con un for...of en UN solo recorrido, y variables
    sueltas (sin arreglos auxiliares).
  No uses:
  - sort, Math.max, Math.min, Set, Map, reduce, filter, arreglos auxiliares ni modificar arr.

QUÉ DEBES HACER
  1. Declara la función segundoMayor(arr). Recibe un arreglo de números y devuelve un
     número o undefined.
  2. Devuelve el mayor de los valores que son estrictamente menores que el máximo de arr:
     el segundo valor DISTINTO más grande. Un valor repetido cuenta una sola vez.
  3. Si arr no tiene al menos dos valores distintos (vacío, un solo elemento o todos
     iguales), devuelve undefined.
  4. arr queda intacto.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(segundoMayor([3, 1, 4, 4, 2]));   // 3           (el 4 repetido cuenta una vez)
  console.log(segundoMayor([5, 5]));            // undefined   (no hay dos valores distintos)
  console.log(segundoMayor([2]));               // undefined   (un solo elemento)
  console.log(segundoMayor([]));                // undefined   (vacío)
  console.log(segundoMayor([-1, -2, -3]));      // -2          (negativos)
  console.log(segundoMayor([9, 9, 8]));         // 8
  console.log(segundoMayor([1, 2]));            // 1

EXPLICA
  ¿Qué le pregunta cada acumulador a los datos? ¿Por qué no basta con un solo acumulador?
COMPLEJIDAD
  ¿Cuál es el tiempo y el espacio extra? ¿Y si lo resolvieras ordenando?
*/
// TU SOLUCIÓN


// EJERCICIO 19 — Sumar uno a un número en dígitos
/*
SITUACIÓN
  Un número demasiado grande para JavaScript se guarda como un arreglo de dígitos, del más
  significativo al menos: [1, 2, 9] representa 129. Debes sumarle 1 y devolver el resultado
  también como arreglo de dígitos.

  Ejemplo: [1, 2, 9] → [1, 3, 0], porque 129 + 1 = 130. Al sumar a mano, un 9 se vuelve 0 y
  «llevas 1» al dígito de la izquierda; si todos son 9 (99 + 1 = 100), aparece un dígito
  nuevo al inicio.

  Idea: recorrer los dígitos de derecha a izquierda propagando ese acarreo, hasta encontrar
  un dígito menor que 9 al que sumarle 1.

RESTRICCIONES
  Datos:
  - Un arreglo no vacío de dígitos enteros entre 0 y 9, del más al menos significativo, sin
    ceros a la izquierda (salvo el número [0]). Puede tener decenas de dígitos.
  Usa:
  - Un arreglo nuevo (copia) donde trabajar, creado con spread (...), y un for con índice.
  No uses:
  - Number, parseInt, BigInt, String, toString, join ni ninguna conversión del arreglo a
    número o a texto; recursión; ni modificar el arreglo recibido.

QUÉ DEBES HACER
  1. Declara la función sumarUno(digitos). Recibe un arreglo de dígitos y devuelve un
     arreglo nuevo de dígitos.
  2. El resultado representa el número recibido más 1, con el mismo formato: del dígito
     más significativo al menos significativo, sin ceros a la izquierda.
  3. Si el resultado necesita un dígito más (99 + 1 = 100), el arreglo resultante es una
     posición más largo y empieza por 1.
  4. digitos queda intacto.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(sumarUno([1, 2, 3]));      // [1, 2, 4]
  console.log(sumarUno([1, 2, 9]));      // [1, 3, 0]      (acarreo de un 9)
  console.log(sumarUno([9, 9]));         // [1, 0, 0]      (todos 9: crece un dígito)
  console.log(sumarUno([0]));            // [1]
  console.log(sumarUno([9]));            // [1, 0]
  console.log(sumarUno([4, 9, 9, 9]));   // [5, 0, 0, 0]
  const original = [1, 2, 9];
  sumarUno(original);
  console.log(original);                 // [1, 2, 9]      (no se modificó)

EXPLICA
  ¿Por qué no sirve convertir el arreglo a un número normal cuando tiene 30 dígitos?
*/
// TU SOLUCIÓN


// EJERCICIO 20 — Arreglo en forma de montaña
/*
SITUACIÓN
  Un ingeniero revisa el perfil de altura de un sendero, registrado como un arreglo, y
  quiere saber si tiene forma de montaña: sube sin parar hasta una cima y después baja sin
  parar, con al menos un paso de subida y uno de bajada. Recibes el arreglo y devuelves true
  o false.

  Ejemplos: [0, 3, 2, 1] es montaña. [3, 5, 5] no, porque el 5 repetido es plano.
  [0, 1, 2, 3] no, porque nunca baja. [2, 1, 2] no, porque baja y vuelve a subir.

  Idea: «caminar» por el arreglo con un solo índice: primero subir mientras haya subida,
  comprobar que estás en una cima válida (ni al inicio ni al final), bajar mientras haya
  bajada y verificar que llegaste al último elemento.

RESTRICCIONES
  Datos:
  - Un arreglo de números; puede estar vacío, tener negativos y valores repetidos.
  Usa:
  - El arreglo recibido, leído por índice (arr[i], arr[i + 1]), bucles while y una variable
    numérica para la posición.
  No uses:
  - Math.max, Math.min, indexOf, sort, reverse, slice, recursión, arreglos auxiliares ni
    modificar arr.

QUÉ DEBES HACER
  1. Declara la función esMontana(arr). Recibe un arreglo de números y devuelve un booleano.
  2. Devuelve true si existe una cima tal que: desde el primer elemento hasta la cima cada
     elemento es ESTRICTAMENTE mayor que el anterior, y desde la cima hasta el último cada
     elemento es ESTRICTAMENTE menor que el anterior. La cima no puede ser el primero ni
     el último elemento: hay al menos un paso de subida y uno de bajada.
  3. Devuelve false en cualquier otro caso: arreglo vacío o con menos de 3 elementos, que
     solo suba o solo baje, con dos valores iguales seguidos, o que baje y vuelva a subir.
  4. arr queda intacto.
  5. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(esMontana([0, 3, 2, 1]));               // true
  console.log(esMontana([0, 2, 3, 4, 5, 2, 1, 0]));   // true
  console.log(esMontana([1, 3, 2]));                  // true    (el mínimo posible)
  console.log(esMontana([2, 1]));                     // false   (menos de 3 elementos)
  console.log(esMontana([3, 5, 5]));                  // false   (valores iguales seguidos)
  console.log(esMontana([0, 1, 2, 3]));               // false   (solo sube)
  console.log(esMontana([3, 2, 1]));                  // false   (solo baja)
  console.log(esMontana([2, 1, 2]));                  // false   (baja y vuelve a subir)
  console.log(esMontana([1, 2, 3, 2, 1, 2]));         // false   (sube de nuevo al final)
  console.log(esMontana([]));                         // false   (vacío)

EXPLICA
  ¿Por qué comprobar que «i» llegó al final es más seguro que comprobar que bajó al menos una vez?
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
