/*
ETAPA 2 (adelanto) · SET Y MAP
estructuras de búsqueda rápida · frecuencias · duplicados

IDEA CLAVE
  Set y Map guardan y buscan en O(1) promedio. Son la herramienta que convierte muchos
  O(n²) (un includes dentro de un bucle) en O(n).
    Set → colección de valores ÚNICOS.            Pregunta: «¿ya lo vi?»
    Map → pares clave → valor.                    Pregunta: «¿cuántas veces / qué guardé?»

  Nota: en Repaso01 (Etapa 1) están prohibidos; aquí quedan para cuando los necesites.

ÍNDICE
  1. Set                     5. Frecuencias, Two Sum y agrupar con Map
  2. Map                     6. Map vs objeto
  3. Iterar                  7. Claves por referencia
  4. Duplicados con Set      8. Patrones
*/

//! ── 1. Set ──
//   new Set(iterable)   add(x)   has(x)   delete(x)   size   clear()
{
    const s = new Set([3, 1, 3, 2, 1])
    console.log(s)                     // Resultado: Set(3) { 3, 1, 2 }   (sin repetidos, orden de inserción)
    console.log(s.size)                // Resultado: 3          (size es propiedad, no método)
    s.add(9)
    s.add(9)                           // no hace nada: ya existe
    console.log(s.has(9), s.has(5))    // Resultado: true false
    s.delete(9)
    console.log(s.size)                // Resultado: 3
}

//! ── 2. Map ──
//   new Map()   set(k, v)   get(k)   has(k)   delete(k)   size
{
    const m = new Map()
    m.set('a', 1)
    m.set('b', 2)
    m.set('a', 10)                     // misma clave: se SOBRESCRIBE el valor
    console.log(m.get('a'))            // Resultado: 10
    console.log(m.get('z'))            // Resultado: undefined   (clave inexistente)
    console.log(m.has('b'), m.size)    // Resultado: true 2
    m.delete('b')
    console.log(m.size)                // Resultado: 1
}
// Inicializar desde pares:  new Map([['a', 1], ['b', 2]])

//! ── 3. Iterar ──
{
    // Set con for...of: cada vuelta entrega UN valor (igual que con un array).
    const s = new Set(['x', 'y'])
    for (const v of s) console.log(v)                  // Resultado: x · y

    // Map con for...of: cada vuelta entrega UN PAR [clave, valor].
    // `const [clave, valor]` lo separa en dos variables (desestructuración).
    const m = new Map([['a', 1], ['b', 2]])
    for (const par of m) console.log(par)              // Resultado: [ 'a', 1 ] · [ 'b', 2 ]
    for (const [clave, valor] of m) console.log(clave, valor)    // Resultado: a 1 · b 2

    // Solo claves o solo valores:
    for (const clave of m.keys()) console.log(clave)             // Resultado: a · b
    for (const valor of m.values()) console.log(valor)           // Resultado: 1 · 2

    // Convertir a array con spread:
    console.log([...m.keys()], [...m.values()])        // Resultado: [ 'a', 'b' ] [ 1, 2 ]
    console.log([...new Set([1, 1, 2])])               // Resultado: [ 1, 2 ]   (Set → array)
}
// Nota: Set y Map NO tienen índices (s[0] es undefined); recorren en orden de inserción.
// Detalle completo de for...of en 04-bucles.js, sección 4.

//! ── 4. Duplicados con Set ──
{
    // ¿Hay algún repetido? Al ver un valor ya guardado, hay duplicado.
    function hayDuplicados(arr) {
        const vistos = new Set()
        for (const x of arr) {
            if (vistos.has(x)) return true
            vistos.add(x)
        }
        return false
    }
    console.log(hayDuplicados([1, 2, 3, 1]), hayDuplicados([1, 2, 3]))   // Resultado: true false

    // Quitar repetidos: new Set(arr). Contar distintos: new Set(arr).size
    console.log(new Set([1, 2, 2, 3, 3]).size)         // Resultado: 3
}

//! ── 5. Frecuencias con Map ──
// Patrón más repetido en LeetCode: contar apariciones.
{
    const frecuencia = new Map()
    for (const c of 'banana') {
        frecuencia.set(c, (frecuencia.get(c) ?? 0) + 1)    // si no existe, parte de 0
    }
    console.log(frecuencia)            // Resultado: Map(3) { 'b' => 1, 'a' => 3, 'n' => 2 }
}
// Segundo patrón típico (Two Sum): guardar lo visto y buscar el complemento.
{
    function dosSuma(nums, objetivo) {
        const visto = new Map()                  // valor → posición
        for (let i = 0; i < nums.length; i++) {
            const falta = objetivo - nums[i]
            if (visto.has(falta)) return [visto.get(falta), i]
            visto.set(nums[i], i)
        }
        return []
    }
    console.log(dosSuma([2, 7, 11, 15], 9))      // Resultado: [ 0, 1 ]
}
// Tercer patrón: agrupar. Cada clave guarda un ARRAY; si no existe aún, se crea vacío.
{
    const palabras = ['sol', 'luna', 'mar', 'casa', 'pez']
    const porLargo = new Map()
    for (const p of palabras) {
        if (!porLargo.has(p.length)) porLargo.set(p.length, [])   // primera vez: array vacío
        porLargo.get(p.length).push(p)                            // get devuelve ese array: se modifica
    }
    console.log(porLargo)      // Resultado: Map(2) { 3 => [ 'sol', 'mar', 'pez' ], 4 => [ 'luna', 'casa' ] }
    // Anagramas: usa como clave las letras ordenadas ('eat' y 'tea' → 'aet').
}

//! ── 6. Map vs objeto ──
//   Map: claves de CUALQUIER tipo, size directo, mantiene orden, sin claves heredadas.
//   Objeto {}: claves siempre string/symbol (el número 1 pasa a '1'); más cómodo para
//   datos fijos con forma conocida (persona = { nombre, edad }).
// Para contar o indexar datos dinámicos, prefiere Map.
{
    const o = {}
    o[1] = 'a'
    console.log(Object.keys(o))        // Resultado: [ '1' ]   (la clave numérica pasó a string)
    const m = new Map([[1, 'a']])
    console.log([...m.keys()])         // Resultado: [ 1 ]     (se conserva el número)
}

//! ── 7. Claves por referencia ──
// Con objetos y arrays se compara por REFERENCIA, no por contenido.
{
    const s = new Set([[1, 2]])
    console.log(s.has([1, 2]))         // Resultado: false   (es otro array)
}
// Solución habitual: convertir a una clave primitiva, p. ej. [1,2].join(',') o JSON.stringify.
// Casos curiosos: NaN sí se encuentra (Set([NaN]).has(NaN) → true); 0 y -0 son el mismo valor.

//! ── 8. Patrones ──
//   ¿Ya vi este valor? .......... Set: has / add               → O(1) por consulta
//   Contar apariciones .......... Map: set(k, (get(k) ?? 0) + 1)
//   Buscar complemento .......... Map valor → índice (Two Sum)
//   Quitar repetidos ............ [...new Set(arr)]
//   Agrupar ..................... Map clave → array; si no existe, crear [] y hacer push
//   Anagramas ................... mismas frecuencias de caracteres (o clave = letras ordenadas)
//   Has vs includes ............. set.has → O(1);  arr.includes → O(n)
