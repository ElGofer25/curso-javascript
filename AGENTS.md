# Guía para generar ejercicios de práctica (JavaScript)

Este archivo indica cómo crear nuevos compendios de ejercicios en `00.Ejercicios/Repaso`.
El formato es el del `Compendio03.ts` del curso de TypeScript, adaptado a JavaScript:
**cada ejercicio dice QUÉ HACER paso a paso**, no solo qué características debe tener la solución.

## 1. Objetivo

Dominar la ruta de estructuras de datos y algoritmos para resolver ejercicios de LeetCode y
desarrollar lógica de programación. Prioridades, en orden:

1. Dominar los temas de la etapa trabajada para afrontar ejercicios difíciles.
2. Ejercicios prácticos, sustentados en las etapas de la ruta.
3. Enfocarse en la etapa en curso (hoy, la Etapa 1).

Prioriza **aprender**: información precisa y breve; nada de relleno.

## 2. Ruta de aprendizaje

| Etapa | Temas |
| --- | --- |
| 1 · Fundamentos y arrays | arrays, strings, índices, iteraciones, condicionales, acumuladores, Big O, problemas con múltiples condiciones |
| 2 · Hash maps y patrones | Sets, Maps, frecuencias, Two Pointers, Sliding Window, Stack, Queue, Binary Search |
| 3 · Recursividad, árboles y heaps | recursividad, Binary Trees, BST, DFS, BFS, Priority Queues, Heaps |
| 4 · Grafos | representación, recorridos, caminos, ciclos, problemas combinados |
| 5 · Programación dinámica | subproblemas, memoization, tabulation, patrones de DP |
| 6 · Entrevistas simuladas | problemas desconocidos que combinan estructuras y patrones, complejidad, explicar soluciones en inglés |

Un ejercicio solo puede exigir lo que enseñan las etapas hasta la actual. Si un tema de la
etapa no está en el repo, **agrégalo**: un archivo `.js` en `01.Bases` con teoría, código
construido paso a paso y ejemplos ejecutados (ver sección 9).

## 3. Dónde va cada cosa

| Ruta | Contenido |
| --- | --- |
| `00.Ejercicios/Repaso/RepasoNN.js` | Un compendio de ejercicios: enunciados + código del alumno + pruebas automáticas. |
| `00.Ejercicios/Letcode/` | Problemas de LeetCode que el alumno resuelve por su cuenta. No se editan. |
| `01.Bases/` y `02.Intermedio/` | Teoría con código. La etapa 1 usa: `06-strings`, `08-conditionals`, `10-array`, `14-loops`, `32-accumulators`, `33-big-o`. |

Numera los compendios en orden (`Repaso01.js`, `Repaso02.js`…). Un compendio tiene **20
ejercicios** salvo que se pida otra cantidad, agrupados en bloques de dificultad creciente.

## 4. Antes de escribir

1. Lee la teoría de las etapas que el compendio cubre y los compendios existentes.
2. No repitas problemas ya resueltos por el alumno ni ejercicios de compendios anteriores.
   Revisa `00.Ejercicios/Letcode/` y los `Repaso` previos.
3. **Nunca modifiques el código que el alumno haya escrito** en sus soluciones, ni lo
   corrijas. Si hay errores, señálalos en tu respuesta.
4. No incluyas soluciones en el compendio. Cada ejercicio termina con `// TU SOLUCIÓN`.

## 5. Estructura del archivo

1. **Cabecera** (comentario de bloque): título, teoría de apoyo, organización por bloques,
   cómo trabajar, y reglas generales.
2. **Bloques** con un separador visible, de menor a mayor dificultad.
3. **Ejercicios** con la plantilla de la sección 6.
4. **Pruebas automáticas** al final, bajo un separador «NO EDITAR DE AQUÍ HACIA ABAJO».

### Cabecera: reglas generales que debe incluir

- Las funciones **devuelven** el resultado; no lo imprimen.
- No se modifican los argumentos, salvo que el ejercicio lo pida (las pruebas lo verifican).
- Métodos **prohibidos** salvo permiso explícito del ejercicio: `map`, `filter`, `reduce`,
  `forEach`, `find`, `some`, `every`, `sort`, `reverse`, `Math.max`, `Math.min`, regex, y
  `Set`/`Map` en la etapa 1. Al avanzar de etapa, relaja solo lo que la etapa enseña.
- Cómo ejecutar el archivo y qué significan ✔ / ✘ / ….
- Que el alumno predice a mano los resultados (tabla de seguimiento) antes de ejecutar.

## 6. Plantilla de ejercicio

```js
// EJERCICIO NN — Título corto
/*
SITUACIÓN
  2–3 frases: qué problema real se resuelve y por qué importa cada parte.

QUÉ DEBES HACER
  1. Declara la función nombre(parámetros).
  2. Caso especial o inválido primero: qué devolver.
  3. Crea el acumulador / los índices (con su valor inicial).
  4. Recorre ... Si ..., entonces ...
  5. Qué devuelve al terminar. Qué NO debe hacer (métodos prohibidos, mutar entradas).

CASOS LÍMITE
  - vacío, un elemento, repetidos, negativos, extremos, límites exactos.

EJEMPLOS
  nombre(entrada)   → resultado

EXPLICA
  1 pregunta concreta ligada a una decisión del ejercicio.
COMPLEJIDAD
  (solo si el ejercicio la merece) ¿tiempo y espacio extra?
*/
// TU SOLUCIÓN
```

Los comentarios no pueden contener `*/`.

## 7. Cómo redactar «QUÉ DEBES HACER»

El criterio central: **quien solo lee el enunciado sabe qué escribir primero, qué después y
cuándo terminó.** Una descripción de propiedades sin acciones es incorrecta.

- **Pasos en orden de construcción** y como acciones: «Declara…», «Crea…», «Recorre…», «Devuelve…».
- **Todo nombrado**: función, parámetros, variables auxiliares (con su valor inicial), valor de
  retorno y qué devolver en cada caso especial.
- **Reglas con valores exactos**: «5 o menos / más de 5», nunca «pocos». Cada borde aparece escrito.
- **Qué NO hacer** donde haya tentación evidente: usar un método prohibido, mutar la entrada,
  inicializar el máximo en 0, olvidar el último grupo tras el bucle.
- **Casos límite explícitos** antes de los ejemplos. Los ejemplos incluyen cada caso límite.
- **Dificultad creciente en el nivel de guía**: los primeros ejercicios dan casi el algoritmo;
  los últimos dan reglas, límites y el enfoque («usa dos índices», «una sola pasada»), pero no
  cada línea. Siempre debe quedar claro **qué** se pide y **qué** debe cumplir la salida.
- **Sin verbos vagos** (maneja, procesa, gestiona). Si algo admite dos lecturas, reescríbelo.
- **Prueba de lectura**: lee solo «QUÉ DEBES HACER» de un ejercicio, sin los ejemplos. ¿Sabes
  qué teclear en cada paso? Si no, reescríbelo.

## 8. Progresión y variedad

- Bloques típicos de la etapa 1: arrays e índices → strings y recorridos → condicionales y
  reglas múltiples → integración estilo LeetCode. Cada etapa define sus propios bloques.
- Cada ejercicio trabaja **una** idea principal; los últimos bloques combinan varias.
- Los ejercicios deben cubrir los **patrones** de la etapa: contar, acumular, máximo/mínimo,
  banderas, construir resultado, dos índices, recorrer al revés, bucles anidados…
- Varía el contexto (cine, almacén, calendario, claves) y evita repetir dominios.
- Incluye algunos ejercicios con casos límite que revienten una solución ingenua (arreglo
  vacío, negativos, texto vacío, valores repetidos, el último elemento).
- Añade `COMPLEJIDAD` en los ejercicios donde cambie la respuesta de tiempo o espacio.

## 9. Pruebas automáticas (obligatorias)

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
- Cada `probar` reúne **todos los ejemplos del enunciado** más pruebas extra de bordes.
  Si el ejercicio pide no mutar la entrada o devolver un arreglo nuevo, hay una prueba para eso.
- Los ejemplos del enunciado y las pruebas deben coincidir exactamente.

## 10. Verificación obligatoria antes de entregar

Realiza todo esto en el directorio temporal de la sesión, **nunca** dentro del repo:

1. **Solución de referencia**: escribe una solución para cada ejercicio siguiendo literalmente
   los pasos del enunciado y respetando sus prohibiciones. Copia el compendio, inserta las
   soluciones antes del separador de pruebas y ejecútalo con `node`. Los N ejercicios deben dar ✔.
2. **Compendio sin soluciones**: ejecuta el archivo original; los N deben salir «pendiente».
   Si alguno sale ✘ o falla la ejecución, hay un error en la cabecera o en las pruebas.
3. **Detección de errores típicos**: por cada ejercicio con una trampa conocida (máximo en 0,
   falta el último grupo, olvidar `%`, mutar la entrada, condiciones en orden equivocado…),
   introduce ese error en la referencia y confirma que alguna prueba marca ✘. Si no lo
   detecta, añade una prueba.
4. **Aritmética**: revisa a mano al menos los ejemplos con cálculo (precios, porcentajes,
   acarreos). Evita decimales binarios; si hay porcentajes, usa enteros.
5. **Alcance**: la referencia solo usa lo permitido por la etapa y por el ejercicio.
6. **Lectura final**: relee el compendio completo con la prueba de lectura (sección 7) y
   revisa que no haya contradicciones entre cabecera, pasos y ejemplos.

## 11. Teoría de apoyo (`01.Bases`)

Cuando un tema de la etapa falte o sea insuficiente, crea o amplía su `.js`:

- Comienza con un comentario: etapa, tema e **idea clave** en una o dos frases.
- Secciones numeradas con «── Título ──»: se construye el código, no se listan conceptos
  aislados. Cada sección muestra código ejecutable con el resultado en un comentario.
- Añade **Notas** donde haya una trampa o un por qué («Nota: …»).
- Termina con los **patrones** que se repetirán en LeetCode.
- Sé quirúrgico: solo lo necesario para practicar. Sin teoría decorativa.
- Verifica con `node archivo.js` que cada comentario de resultado coincide con la salida real.

## 12. Respuesta final

Enlaza los archivos creados o modificados, resume qué contiene cada bloque, indica qué verificaste
(referencia, pendientes, errores detectados) y reporta cualquier error en el código del alumno
sin haberlo tocado.
