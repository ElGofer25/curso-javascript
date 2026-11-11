/*
ETAPA 1 · OBJETOS
literales · acceso · claves y valores · desestructuración · spread · copia

IDEA CLAVE
  Un objeto guarda datos como pares clave → valor. Se accede por nombre (no por
  posición) y, como los arrays, se comparte por referencia.

ÍNDICE
  1. Crear y acceder             5. Desestructuración
  2. Añadir, cambiar, borrar     6. Spread y copia
  3. Comprobar existencia        7. Objetos anidados y ?.
  4. Recorrer un objeto          8. Patrones
*/

//! ── 1. Crear y acceder ──
{
    const persona = { nombre: 'Ana', edad: 30, 'codigo-postal': 1000 }
    console.log(persona.nombre)               // Resultado: Ana       (notación de punto)
    console.log(persona['edad'])              // Resultado: 30        (corchetes)
    console.log(persona['codigo-postal'])     // Resultado: 1000      (necesarios si la clave no es un nombre válido)
    const campo = 'nombre'
    console.log(persona[campo])               // Resultado: Ana       (corchetes con una VARIABLE)
    console.log(persona.campo)                // Resultado: undefined (busca una clave llamada «campo»)
    console.log(persona.telefono)             // Resultado: undefined (no existe, sin error)
}
// Atajo: si la variable se llama igual que la clave
{
    const nombre = 'Ana'
    const edad = 30
    console.log({ nombre, edad })             // Resultado: { nombre: 'Ana', edad: 30 }
}

//! ── 2. Añadir, cambiar, borrar ──
{
    const o = { a: 1 }
    o.b = 2                                   // añadir
    o.a = 10                                  // cambiar
    delete o.b                                // borrar
    console.log(o)                            // Resultado: { a: 10 }
}
// (const no impide modificar las propiedades; solo impide reasignar la variable.)

//! ── 3. Comprobar existencia ──
{
    const o = { a: 0, b: undefined }
    console.log('a' in o, 'z' in o)           // Resultado: true false
    console.log('toString' in o)              // Resultado: true     (`in` también ve lo heredado)
    console.log(Object.hasOwn(o, 'b'))        // Resultado: true     (existe aunque valga undefined)
    console.log(o.b === undefined)            // Resultado: true     (no distingue «no existe» de «vale undefined»)
    console.log(o.a ? 'sí' : 'no')            // Resultado: no       (0 es falsy: cuidado)
}

//! ── 4. Recorrer un objeto ──
{
    const stock = { manzanas: 3, peras: 0 }
    console.log(Object.keys(stock))           // Resultado: [ 'manzanas', 'peras' ]
    console.log(Object.values(stock))         // Resultado: [ 3, 0 ]
    console.log(Object.entries(stock))        // Resultado: [ [ 'manzanas', 3 ], [ 'peras', 0 ] ]
    for (const [fruta, cantidad] of Object.entries(stock)) {
        console.log(fruta, cantidad)          // Resultado: manzanas 3 · peras 0
    }
    for (const clave in stock) console.log(clave)   // Resultado: manzanas · peras
}
// Orden de las claves: números enteros ascendentes primero, luego strings por orden de creación.
{
    console.log(Object.keys({ b: 1, 2: 1, a: 1, 1: 1 }))   // Resultado: [ '1', '2', 'b', 'a' ]
}
// Nota: un objeto común no es iterable: `for (x of obj)` lanza TypeError (ver 04-bucles.js).
// Un objeto sirve como contador cuando las claves son texto:
{
    const conteo = {}
    for (const letra of 'hola mundo') {
        conteo[letra] = (conteo[letra] ?? 0) + 1      // si no existe, parte de 0
    }
    console.log(conteo.o, conteo.z)           // Resultado: 2 undefined
}

//! ── 5. Desestructuración ──
// Extrae varias propiedades (u elementos) en variables de una sola vez.
{
    const { nombre, edad } = { nombre: 'Ana', edad: 30, ciudad: 'Lima' }
    console.log(nombre, edad)                 // Resultado: Ana 30

    const { nombre: n, pais = 'Perú' } = { nombre: 'Luis' }   // renombrar y valor por defecto
    console.log(n, pais)                      // Resultado: Luis Perú

    const [primero, segundo, ...resto] = [10, 20, 30, 40]
    console.log(primero, segundo, resto)      // Resultado: 10 20 [ 30, 40 ]

    let a = 1, b = 2
    ;[a, b] = [b, a]                          // intercambio sin variable temporal
    console.log(a, b)                         // Resultado: 2 1
    // El `;` inicial evita que JavaScript una esta línea con la anterior cuando no
    // terminas tus líneas con punto y coma.
}
// Muy usada en parámetros y en for...of:
{
    const mostrar = ({ nombre, edad }) => `${nombre} (${edad})`
    console.log(mostrar({ nombre: 'Ana', edad: 30 }))      // Resultado: Ana (30)
}

//! ── 6. Spread y copia ──
{
    const base = { a: 1, b: 2 }
    const copia = { ...base }                 // copia SUPERFICIAL
    const ampliado = { ...base, b: 20, c: 3 } // lo último escrito gana
    console.log(copia, ampliado)              // Resultado: { a: 1, b: 2 } { a: 1, b: 20, c: 3 }
    console.log(base === copia)               // Resultado: false
}
// Nota: copia superficial → los objetos/arrays ANIDADOS se siguen compartiendo.
{
    const base = { dentro: { n: 1 } }
    const copia = { ...base }
    copia.dentro.n = 99
    console.log(base.dentro.n)                // Resultado: 99
    const profunda = structuredClone(base)    // copia profunda
    profunda.dentro.n = 5
    console.log(base.dentro.n)                // Resultado: 99
}
// Comparación: {} === {} es false (referencias distintas). Para comparar contenido
// de forma sencilla: JSON.stringify(a) === JSON.stringify(b) (depende del orden de claves).

//! ── 7. Objetos anidados y ?. ──
{
    const usuario = { nombre: 'Ana', direccion: { ciudad: 'Lima' } }
    console.log(usuario.direccion.ciudad)     // Resultado: Lima
    console.log(usuario.contacto?.telefono)   // Resultado: undefined   (contacto no existe: ?. evita el error)
    // console.log(usuario.contacto.telefono) // TypeError: Cannot read properties of undefined
    console.log(usuario.contacto?.telefono ?? 'sin dato')  // Resultado: sin dato
}

//! ── 8. Patrones ──
//   Acceder con una variable → obj[variable]  (no obj.variable)
//   Recorrer clave y valor → for (const [k, v] of Object.entries(obj))
//   ¿Existe la clave? → 'k' in obj  ·  Object.hasOwn(obj, 'k')
//   Contar/agrupar → obj[k] = (obj[k] ?? 0) + 1  (o Map; ver 07-set-map.js)
//   Copiar → {...obj}; si hay anidados → structuredClone(obj)
//   Intercambiar dos variables → [a, b] = [b, a]
