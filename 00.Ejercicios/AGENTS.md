# Guía para generar ejercicios de práctica (JavaScript)

Este archivo indica cómo crear compendios de ejercicios en `00.Ejercicios/Repaso` y cómo se
relacionan con la ruta de aprendizaje. El formato es el del `Compendio03.ts` del curso de
TypeScript, adaptado a JavaScript: **cada ejercicio dice QUÉ HACER paso a paso**, no solo qué
características debe tener la solución.

## 1. Objetivo

Dominar estructuras de datos y algoritmos para resolver ejercicios difíciles de LeetCode y
desarrollar una buena lógica de programación. Prioridades, en orden:

1. Dominar los temas de la etapa en curso, para afrontar eventualmente ejercicios difíciles.
2. Ejercicios prácticos, sustentados en las etapas de la ruta.
3. Enfocarse en la etapa en curso (hoy, la **Etapa 1**).

Prioriza **aprender**: información precisa, breve y comprensible. Sé quirúrgico, sin relleno,
tanto en los apuntes como en los ejercicios.

## 2. Ruta de aprendizaje

Se avanza de forma progresiva, **sin introducir estructuras complejas antes de comprender sus
fundamentos**. Cada etapa se apoya en la anterior.

### Etapa 1 — Fundamentos y arrays · EN CURSO (punto de partida)
- **Temas:** arrays, strings, índices, iteraciones, condicionales, acumuladores, Big O y problemas
  con múltiples condiciones.
- **Se domina cuando:** recorres arrays y strings sin errores de borde, usas acumuladores
  (contador, suma, máximo, banderas), ordenas bien las condiciones y distingues O(n) de O(n²).
- **Teoría (`01.Bases`):** `06-strings`, `08-conditionals`, `10-array`, `14-loops`,
  `32-accumulators`, `33-big-o`.
- **Ejercicios:** `Repaso/Repaso01.js` (temático, nombres en español) y `Repaso/Arrays.js`
  (estilo LeetCode/HackerRank, nombres en inglés).

### Etapa 2 — Hash Maps y patrones · pendiente
- **Temas:** Sets, Maps, frecuencias, Two Pointers, Sliding Window, Stack, Queue y Binary Search.
- **Teoría que ya existe:** sintaxis de Set y Map (`11-set`, `12-map`) y operaciones avanzadas
  (`02.Intermedio/02-advanced-structures`).
- **Teoría que falta (crear al empezar la etapa):** frecuencias, Two Pointers, Sliding Window,
  Stack, Queue y Binary Search.

### Etapa 3 — Recursividad, árboles y heaps · pendiente
- **Temas:** recursividad, Binary Trees, Binary Search Trees, DFS, BFS, Priority Queues y Heaps.
- **Teoría que ya existe:** un apartado de recursividad en `02.Intermedio/00-advanced-functions`.
- **Teoría que falta:** todo lo demás.

### Etapa 4 — Grafos · pendiente
- **Temas:** representación de grafos, recorridos, caminos, ciclos y problemas combinados.
- **Teoría que falta:** todo.

### Etapa 5 — Programación dinámica · pendiente
- **Temas:** subproblemas, memoization, tabulation y reconocimiento de patrones de DP.
- **Teoría que falta:** todo.

### Etapa 6 — Entrevistas simuladas · pendiente
- **Temas:** problemas desconocidos que combinan estructuras y patrones, análisis de complejidad y
  explicación de soluciones **en inglés**.
- El formato de los ejercicios de esta etapa se define al llegar a ella.

### Reglas de alcance por etapa
- Un ejercicio solo exige lo que enseñan las etapas hasta la actual. No uses temas de etapas
  posteriores aunque existan en el repo.
- Cada etapa **relaja** solo lo que ella enseña (por ejemplo, `Set` y `Map` dejan de estar
  prohibidos en la Etapa 2).
- Si un tema de la etapa no está en el repo, **agrégalo** (ver sección 12): un archivo `.js` en
  `01.Bases` con teoría, código construido paso a paso y ejemplos ejecutados.

## 3. Dónde va cada cosa

| Ruta | Contenido |
| --- | --- |
| `00.Ejercicios/Repaso/RepasoNN.js` | Compendio temático: enunciados + código del alumno + pruebas automáticas. |
| `00.Ejercicios/Repaso/<Tema>.js` (p. ej. `Arrays.js`) | Compendio estilo LeetCode/HackerRank sobre un tema de la etapa. |
| `00.Ejercicios/Letcode/` | Problemas de LeetCode que el alumno resuelve por su cuenta. No se editan. |
| `01.Bases/` y `02.Intermedio/` | Teoría con código. |

Cada compendio tiene **20 ejercicios** salvo que se pida otra cantidad, en bloques de dificultad
creciente. Numera los temáticos en orden (`Repaso01.js`, `Repaso02.js`…).

## 4. Tipos de compendio

| | Temático (`RepasoNN.js`) | Estilo LeetCode/HackerRank (`<Tema>.js`) |
| --- | --- | --- |
| Problemas | Diseñados para practicar los temas de la etapa | Reescritura en español de problemas reales de nivel fácil |
| Nombres de función | Español | **Inglés**, como en la plataforma (se practica el idioma de la Etapa 6) |
| Título | `EJERCICIO NN — Título corto` | `EJERCICIO NN — Título (LC 1480 · Running Sum of 1d Array)` o `(HR · Mini-Max Sum)` |
| Sección extra | — | **RESTRICCIONES** (qué datos se pueden esperar) |

Reglas del estilo LeetCode/HackerRank:
- Solo problemas **reales** y de nivel fácil (o fáciles-medios) que puedan resolverse con lo que
  enseña la etapa. Cita el número de LeetCode o «HR» y el nombre original; **no inventes números**:
  si no estás seguro de uno, omítelo y deja solo el nombre.
- Mantén el comportamiento del problema original. Si lo adaptas (por ejemplo, permitir el arreglo
  vacío), dilo en RESTRICCIONES.
- **No repitas problemas que el alumno ya resolvió:** Two Sum, Best Time to Buy and Sell Stock,
  Maximum Subarray, Move Zeroes, Merge Sorted Array, Majority Element, Longest Common Prefix,
  Roman to Integer, FizzBuzz, Valid Palindrome, contar letras. Revisa también `Letcode/`.
- Cuando el problema original exija modificar el arreglo «en el sitio», dilo y comprueba el
  resultado en las pruebas (por ejemplo, las primeras `k` posiciones).

## 5. Antes de escribir

1. Lee la teoría de la etapa y los compendios existentes.
2. No repitas ejercicios de compendios anteriores ni problemas ya resueltos por el alumno.
3. **Nunca modifiques el código que el alumno haya escrito** en sus soluciones, ni lo
   corrijas, ni borres sus respuestas de EXPLICA y COMPLEJIDAD. Si hay errores, señálalos en tu
   respuesta. Si el alumno ya resolvió ejercicios, edita solo los comentarios de enunciado.
4. No incluyas soluciones en el compendio. Cada ejercicio termina con `// TU SOLUCIÓN`.
5. Si la petición no dice cuántos ejercicios ni qué tema, usa 20 y la etapa en curso; pregunta
   solo si el tema es ambiguo.

## 6. Estructura del archivo

1. **Cabecera** (comentario de bloque): título, teoría de apoyo, organización por bloques,
   cómo trabajar, vocabulario y reglas generales.
2. **Bloques** con un separador visible, de menor a mayor dificultad.
3. **Ejercicios** con la plantilla de la sección 7.
4. **Pruebas automáticas** al final, bajo un separador «NO EDITAR DE AQUÍ HACIA ABAJO».

### Cabecera: lo que debe incluir

- **Cómo trabajar cada ejercicio** (siete pasos): leer SITUACIÓN → seguir QUÉ DEBES HACER → escribir
  la función → predecir a mano → ejecutar `node Archivo.js` → si falla, tabla de seguimiento →
  responder EXPLICA.
- Qué significan ✔ / ✘ / … y que COMPRUEBA se puede copiar debajo de la función para ver valores.
- **Vocabulario** («devuelve», «recorre», «índice válido», «arreglo nuevo», «en el sitio»…).
- Las funciones **devuelven** el resultado; no lo imprimen.
- No se modifican los argumentos, salvo que el ejercicio diga «en el sitio» (las pruebas lo verifican).
- Métodos **prohibidos** salvo permiso explícito del ejercicio: `map`, `filter`, `reduce`,
  `forEach`, `find`, `some`, `every`, `sort`, `reverse`, `Math.max`, `Math.min`, regex, y
  `Set`/`Map` en la etapa 1. Al avanzar de etapa, relaja solo lo que la etapa enseña.
  Si el compendio prohíbe `slice`/`splice`, aclara que COMPRUEBA puede usarlos solo para mirar resultados.

## 7. Plantilla de ejercicio

```js
//! EJERCICIO NN — Título corto
/*
SITUACIÓN
  Contexto: qué problema real se resuelve, quién lo necesita y qué recibe/devuelve la función.

  Ejemplo: un caso resuelto en palabras, con sus datos concretos.

  Idea: la técnica o el concepto que entrena el ejercicio (y la trampa, si la hay).

RESTRICCIONES            (obligatoria en el estilo LeetCode/HackerRank; opcional en el temático)
  - qué datos se pueden esperar: rangos, si puede estar vacío, si hay negativos, repetidos…

QUÉ DEBES HACER
  1. Declara la función nombre(parámetros). Recibe ... y devuelve ...
  2. Caso especial o inválido primero: qué devolver y terminar.
  3. Crea la variable «acumulador» con valor inicial X, ANTES del bucle.
  4. Recorre ... con un for: i empieza en ..., continúa mientras ... y avanza ...
  5. En cada vuelta, si ..., entonces ...
  6. Al terminar el bucle, devuelve ... Qué NO usar (métodos prohibidos, mutar la entrada).
  7. Ejecuta las líneas de COMPRUEBA y compara con lo esperado.

COMPRUEBA
  console.log(nombre(entrada));   // resultado   (a qué caso corresponde)

EXPLICA
  1 pregunta concreta ligada a una decisión del ejercicio.
COMPLEJIDAD
  (solo si el ejercicio la merece) ¿Cuál es el tiempo y el espacio extra de tu solución?
*/
// TU SOLUCIÓN
```

Es el formato del `Compendio03.ts` (SITUACIÓN · QUÉ DEBES HACER · COMPRUEBA · EXPLICA). En JavaScript
no existe «ESTO DEBE FALLAR» (no hay errores de tipos): los casos límite van como líneas de
COMPRUEBA anotadas con el caso que cubren. Los comentarios no pueden contener `*/`.

## 8. Cómo redactar el enunciado

El criterio central: **quien solo lee el enunciado sabe qué se pide, qué escribir primero, qué
después y cuándo terminó.** Una descripción de características sin acciones es incorrecta.

- **SITUACIÓN completa, no una frase de contexto.** Tres partes, separadas por una línea en
  blanco: (1) *contexto*: el problema real, qué recibe y qué devuelve la función, y la definición
  de cualquier término que use («rotar», «subsecuencia», «palíndromo»); (2) *Ejemplo*: un caso
  resuelto en palabras que muestre qué pasa con los datos; (3) *Idea*: la técnica que entrena
  (contador, dos índices, bandera…) y la trampa más común. Prueba: quien lee solo la SITUACIÓN
  sabe qué se pide y por qué, antes de ver los pasos.
- **Máxima claridad en todos los ejercicios.** No reduzcas los pasos en los difíciles: cada paso
  debe poder teclearse sin deducir nada. La dificultad está en el problema, no en adivinar qué se pide.
- **Pasos en orden de construcción** y como acciones: «Declara…», «Crea…», «Recorre…», «Devuelve…».
- **Todo nombrado**: función, parámetros con su tipo, variables auxiliares (con su valor inicial),
  valor de retorno y qué devolver en cada caso especial.
- **Bucles descritos por completo**: dónde empieza el índice, mientras qué condición continúa y
  cómo avanza («i empieza en 0, continúa mientras i < arr.length y avanza de 1 en 1»). Cuando el
  límite sea `arr.length - 1` como último índice, distínguelo de la condición del bucle.
- **Reglas con valores exactos**: «5 o menos / más de 5», nunca «pocos». Cada borde aparece escrito.
- **Qué NO hacer** donde haya tentación evidente: usar un método prohibido, mutar la entrada,
  inicializar el máximo en 0, olvidar el último grupo tras el bucle.
- **Casos límite dentro de los pasos** («si arr está vacío, devuelve [] y termina») y dentro de
  COMPRUEBA, una línea por caso, anotada con lo que cubre.
- **COMPRUEBA ejecutable**: cada línea es un `console.log` con su resultado tras `//`. Los textos
  se anotan con comillas. Si hay preparación (`const a = [...]`), va en líneas previas.
- **Sin verbos vagos** (maneja, procesa, gestiona). Si algo admite dos lecturas, reescríbelo.
- **Prueba de lectura**: lee solo SITUACIÓN y QUÉ DEBES HACER, sin COMPRUEBA. ¿Sabes qué teclear
  en cada paso? Si no, reescríbelo.

## 9. Progresión y variedad

- Bloques típicos de la etapa 1: arrays e índices → strings y recorridos → condicionales y
  reglas múltiples → integración. En el estilo LeetCode/HackerRank: recorridos y acumuladores →
  estado y condiciones → índices (en el sitio, circular) → matrices. Cada etapa define los suyos.
- Cada ejercicio trabaja **una** idea principal; los últimos bloques combinan varias.
- Cubre los **patrones** de la etapa: contar, acumular, máximo/mínimo, banderas, construir
  resultado, dos índices, recorrer al revés, bucles anidados…
- Varía el contexto (cine, almacén, calendario, claves) y evita repetir dominios.
- Incluye casos límite que revienten una solución ingenua (arreglo vacío, negativos, texto vacío,
  repetidos, el último elemento, un valor que aparece después de empates).
- Añade `COMPLEJIDAD` donde cambie la respuesta de tiempo o espacio.

## 10. Pruebas automáticas (obligatorias)

Al final del compendio van estas funciones y una llamada `probar` por ejercicio:

```js
function igual(obtenido, esperado) {
    const a = JSON.stringify(obtenido)
    const b = JSON.stringify(esperado)
    if (a !== b) throw new Error(`obtuviste ${a} pero se esperaba ${b}`)
}
function noMuta(fn, entrada, ...args) {            // verifica que la entrada no cambia
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
            console.log(`… ${id} ${titulo} (pendiente)`)    // el alumno aún no escribe la función
        } else {
            console.log(`✘ ${id} ${titulo}: ${e.message}`)
        }
    }
}
```

- El enunciado **no** incluye funciones vacías: así un ejercicio sin resolver aparece como
  «pendiente» y no como fallo.
- Cada `probar` reúne **todas las líneas de COMPRUEBA** más pruebas extra de bordes. Si el
  ejercicio pide no mutar la entrada o devolver un arreglo nuevo, hay una prueba para eso; si
  pide modificar «en el sitio», se comprueba que el arreglo recibido cambió.
- Las líneas de COMPRUEBA del enunciado y las pruebas automáticas deben coincidir exactamente.

## 11. Verificación obligatoria antes de entregar

Realiza todo esto en el directorio temporal de la sesión, **nunca** dentro del repo:

1. **Solución de referencia**: escribe una solución para cada ejercicio siguiendo literalmente
   los pasos del enunciado y respetando sus prohibiciones. Copia el compendio, inserta las
   soluciones antes del separador de pruebas y ejecútalo con `node`. Los N ejercicios deben dar ✔.
   Si algo falla, averigua si el error es de la referencia o de la prueba (revisa a mano la cuenta).
2. **Compendio sin soluciones**: ejecuta el archivo original; los N deben salir «pendiente».
   Si alguno sale ✘ o falla la ejecución, hay un error en la cabecera o en las pruebas.
3. **COMPRUEBA**: ejecuta cada línea `console.log` de COMPRUEBA con la referencia y confirma que
   la salida coincide con el resultado anotado.
4. **Detección de errores típicos**: por cada ejercicio con una trampa conocida (máximo en 0,
   falta el último grupo, olvidar `%`, mutar la entrada, condiciones en orden equivocado, no
   reiniciar un contador…), introduce ese error en la referencia y confirma que alguna prueba
   marca ✘. Si no lo detecta, añade un caso que lo exponga (en pruebas **y** en COMPRUEBA).
5. **Aritmética**: revisa a mano al menos los ejemplos con cálculo (precios, porcentajes,
   acarreos, diagonales). Evita decimales binarios; si hay porcentajes, usa enteros.
6. **Alcance**: la referencia solo usa lo permitido por la etapa y por el ejercicio.
7. **Lectura final**: relee el compendio completo con la prueba de lectura (sección 8) y
   revisa que no haya contradicciones entre cabecera, pasos y ejemplos.

## 12. Teoría de apoyo (`01.Bases`)

Cuando un tema de la etapa falte o sea insuficiente, crea o amplía su `.js`:

- Comienza con un comentario: etapa, tema e **idea clave** en una o dos frases.
- Secciones numeradas con «── Título ──»: se construye el código, no se listan conceptos
  aislados. Cada sección muestra código ejecutable con el resultado en un comentario.
- Añade **Notas** donde haya una trampa o un por qué («Nota: …»).
- Termina con los **patrones** que se repetirán en LeetCode.
- Sé quirúrgico: solo lo necesario para practicar. Sin teoría decorativa.
- Verifica con `node archivo.js` que cada comentario de resultado coincide con la salida real.

## 13. Respuesta final

Enlaza los archivos creados o modificados, resume qué contiene cada bloque, indica qué verificaste
(referencia, pendientes, errores detectados) y reporta cualquier error en el código del alumno
sin haberlo tocado.
