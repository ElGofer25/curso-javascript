/*
PRÁCTICA PROGRESIVA: .map() Y Map
===============================

Objetivo: practicar dos herramientas diferentes:
- array.map(): transformar cada elemento de un array.
- new Map(): asociar claves con valores para consultar y actualizar datos.

Cómo trabajar:
1. Resuelve los ejercicios en orden, debajo de cada enunciado.
2. Antes de ejecutar, predice el resultado y explica por qué.
3. Comprueba los resultados esperados y los casos adicionales.
4. Usa nombres distintos o bloques { ... } para evitar redeclarar constantes.
5. Ejecuta este archivo con: node "Ejercicios/Bloque 3/map.js"

No se incluyen soluciones para que puedas construirlas tú.
Los resultados esperados describen valores; el formato de consola puede variar.
*/

// =====================================================================
// PARTE A: TRANSFORMAR ARRAYS CON .map()
// =====================================================================

/*
01. CUADRADOS — transformación básica

Entrada: [1, 2, 3, 4]
Usa map para obtener el cuadrado de cada número.
Esperado: [1, 4, 9, 16]

Comprueba también:
- [-2, 0, 5] → [4, 0, 25]
- [] → []

Condición: el array original debe conservar sus valores.
Pregunta: ¿qué devuelve el callback y qué devuelve map?
*/

// Tu solución:
{
    const input = [1, 2, 3, 4]

    //Primer solución: bien, pero errónea según la instrucción
    {/*
    let squared = []

    for(let i = 0; i < input.length; i++){
        square = input[i] * input [i]
        squared.push(square)
    }
    // console.log(squared)    
    */}
    const squared = input.map((number) => {
        return number * number
    })
    // console.log(squared)


}

/*
02. TEMPERATURAS — aplicar una fórmula

Entrada en grados Celsius: [0, 20, 30, -10]
Convierte cada temperatura a Fahrenheit usando F = C * 9 / 5 + 32.
Esperado: [32, 68, 86, 14]

Escribe una versión con return explícito y otra con retorno implícito.
Pregunta: ¿qué ocurriría si usaras llaves y olvidaras return?
*/

// Tu solución:

{
const temperature = [0, 20, 30, -10]
const fahrenheit = temperature.map((Celsius)=>{
    return (32 + (Celsius*9)/5)
})
// console.log(fahrenheit)

}

/*
03. LISTA NUMERADA — usar el índice

Entrada: ["Ana", "Luis", "Eva"]
Crea etiquetas con el formato "posición. nombre" empezando por 1.
Esperado: ["1. Ana", "2. Luis", "3. Eva"]

Condición: usa el índice que recibe el callback, sin contador externo.
Pregunta: ¿por qué necesitas sumar 1 al índice? R: Porque inicia en cero
*/

// Tu solución:
{
const names = ["Ana", "Luis", "Eva"]
const lista = names.map((name, index) =>{
    return `${index + 1}. ${name}`
})
// console.log(lista)

}


/*
04. EXTRAER DATOS — pasar de objetos a valores

Entrada:
[
  { id: 1, nombre: "Teclado", precio: 400 },
  { id: 2, nombre: "Mouse", precio: 200 },
  { id: 3, nombre: "Monitor", precio: 3000 }
]

Obtén dos arrays independientes usando map:
- Nombres: ["Teclado", "Mouse", "Monitor"]
- Precios: [400, 200, 3000]

Pregunta: ¿map tiene que devolver elementos del mismo tipo que los originales?
*/

// Tu solución:


{
const productos = [
  { id: 1, nombre: "Teclado", precio: 400 },
  { id: 2, nombre: "Mouse", precio: 200 },
  { id: 3, nombre: "Monitor", precio: 3000 }
]

const prices = productos.map((producto) => {
    return producto.precio
})
const names = productos.map((producto) => {
    return producto.nombre
})
// console.log(prices)
// console.log(names)


}

/*
05. DESCUENTOS — crear objetos sin modificar los originales

Entrada:
[
  { id: 1, nombre: "Cuaderno", precio: 100 },
  { id: 2, nombre: "Lápiz", precio: 20 }
]

Aplica un descuento del 15 % y conserva las demás propiedades.
Esperado:
[
  { id: 1, nombre: "Cuaderno", precio: 85 },
  { id: 2, nombre: "Lápiz", precio: 17 }
]

Condiciones:
- Devuelve un objeto nuevo por producto.
- Los precios originales deben seguir siendo 100 y 20.
- Comprueba con === que el primer objeto nuevo es distinto del original.

Pregunta: ¿qué paréntesis necesitas para retornar un objeto de forma implícita?
*/

// Tu solución:
{
const Productos = [
  { id: 1, nombre: "Cuaderno", precio: 100 },
  { id: 2, nombre: "Lápiz", precio: 20 }
]

{/*Mi solución (está mal):
    
    const descuento = Productos.map((producto)=>{
    newPrice = precio - ((precio*15)/100)
    Productos[precio] =
    return Productos.precio[newPrice]
})*/}

const descuento = Productos.map((producto) => {
  const newPrice = producto.precio - (producto.precio * 15 / 100);

  return {
    ...producto,
    precio: newPrice
  };
});

// console.log(descuento);

}

/*
06. MAP Y FILTER — transformar y seleccionar

Entrada:
[
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Eva", edad: 18 }
]

Obtén los nombres en mayúsculas de quienes tengan 18 años o más.
Esperado: ["LUIS", "EVA"]

Condiciones: combina filter y map; no modifiques la entrada.
Caso adicional: si nadie cumple la condición, el resultado debe ser [].
Pregunta: ¿por qué retornar false desde map no elimina un elemento?
*/

// Tu solución:
{
const input = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Eva", edad: 18 }
]

const adultos = input.filter((persona) => {
    return persona.edad >= 18;
})

//Aquí se hace un mapeo de los datos de retorno del primer map
.map((persona) => {
    return persona.nombre.toUpperCase();
})
{/*
filter recibe cada persona y devuelve una condición para decidir si conservarla.
map recibe las personas conservadas y devuelve sus nombres en mayúsculas.    
*/}

// console.log(adultos); // ["LUIS", "EVA"]
}


/*
07. MATRIZ — transformar arrays anidados

Entrada: [[1, 2], [3, 4], [5, 6]]
Multiplica cada número por 10 usando un map dentro de otro.
Esperado: [[10, 20], [30, 40], [50, 60]]

Condiciones:
- Conserva la estructura de filas; no aplanes el resultado.
- Cada fila del resultado debe ser un array nuevo.
- La matriz original debe conservar sus valores.

Comprueba también: [[1], [], [2, 3]] → [[10], [], [20, 30]]
Pregunta: ¿qué recibe y qué devuelve cada uno de los dos callbacks?
*/

// Tu solución:
{
    const input = [[1, 2], [3, 4], [5, 6]]

    {/*
        Mi solución: 
    const multiply = input.map((value) => {
        return value * 10
    })
    // console.log(multiply)    
    */}
    const multiply = input.map((fila)=> {
        // Este map recorre los valores de tupla
        return fila.map((numero)=>{
            return numero * 10
        })
    })

    // console.log(multiply);
}

/*
08. DIAGNÓSTICO — return y referencias compartidas

A. Predice el resultado y después corrige el código para obtener [4, 8]:

const resultado = [2, 4].map((numero) => {
  numero * 2;
});
Esto imprime lo siguiente: [ undefined, undefined ]. No hay un return

B. Predice qué imprime y explica por qué:

const originales = [{ puntos: 10 }];
const copia = originales.map((elemento) => elemento);
copia[0].puntos = 99;
// console.log(originales[0].puntos);

R: Imprime 99, como se relaciona con el valor orginal pues lo modifica. 

Reescribe B para que cambiar copia[0].puntos no cambie originales[0].puntos.
Pregunta: 
¿crear un array nuevo implica copiar los objetos que contiene?R: No, solo se copian las referencias a los objetos, no los objetos en sí.
*/

// Tu solución:
{
const input = [2, 4]
const resultado = input.map((numero) => {
  return numero * 2;
});
// console.log(resultado)


const originales = [{ puntos: 10 }];
const copia = originales.map((elemento) => elemento);
copia[0].puntos = 99;
// console.log(originales[0].puntos);

}


// =====================================================================
// PARTE B: GUARDAR Y CONSULTAR DATOS CON Map
// =====================================================================

/*
09. INVENTARIO — operaciones básicas

Crea un Map con estas entradas, en este orden:
"cuaderno" → 8
"lápiz" → 15

Después:
1. Agrega "borrador" con 5 unidades.
2. Actualiza "cuaderno" a 10 unidades.
3. Consulta la cantidad de "cuaderno": debe ser 10.
4. Comprueba si existe "regla": debe ser false.
5. Elimina "lápiz".
6. Comprueba size: debe ser 2.
7. Recorre las entradas con for...of.

Orden final esperado: "cuaderno" → 10, "borrador" → 5.
Pregunta: ¿actualizar una clave agrega otra entrada o reemplaza su valor?
*/

// Tu solución:

{
const inventario = new Map([
  ["cuaderno", 8],
  ["lápiz", 15],
]);
inventario.set('borrador', 5)
inventario.set('cuaderno', 10)

// console.log(inventario.get('cuaderno'))
// console.log(inventario.has('regla'))

}

/*
10. CLAVES — tipos, identidad y valores ausentes

A. Guarda estas dos entradas en un Map:
2 → "número"
"2" → "texto"
Comprueba que size es 2 y recupera ambos valores.

B. Usar un objeto como clave de un Map
1. Crea la variable const usuario = { id: 1 }.
2. Crea un nuevo Map llamado roles.
3. Usa set para agregar una entrada a roles: la clave será el objeto guardado en usuario y el valor será el texto "editor".
4. Imprime roles.get(usuario).
5. Imprime roles.get({ id: 1 }).
Resultado esperado: la primera consulta devuelve "editor" y la segunda devuelve undefined.

Pregunta: ambos objetos contienen id: 1, pero ¿son el mismo objeto?

C. Distinguir una clave ausente de una clave cuyo valor es undefined
1. Crea un nuevo Map llamado estados.
2. Usa set para guardar la clave "pendiente" con el valor undefined (sin comillas).
3. No agregues ninguna entrada con la clave "inexistente".
4. Imprime el resultado de estas cuatro consultas:
   - estados.get("pendiente")
   - estados.get("inexistente")
   - estados.has("pendiente")
   - estados.has("inexistente")
Resultados esperados, en ese orden: undefined, undefined, true, false.

Pregunta: si ambas consultas con get devuelven undefined, ¿qué método permite distinguir cuál de las dos claves existe?

Pregunta: ¿por qué get por sí solo no siempre permite saber si existe una clave?
*/

// Tu solución:

{
  //Solución A:
const data = new Map([
  ['numero', 2],
  ['texto', '2']
])
console.log(data.size)

  //Solución B:
  const usuario = {id: 1}
  const roles = new Map()

  
  console.log(roles.set(usuario, 'editor'))
  console.log(roles.get({id:1}))

  //Solución C:
  const estados = new Map([
    ['pendiente', undefined],
  ])
console.log(estados.get("pendiente"))
console.log(estados.get("inexistente"))
console.log(estados.has("pendiente"))
console.log(estados.has("inexistente"))

}



/*
11. FRECUENCIAS — contar apariciones

Entrada: [2, 3, 2, 4, 3, 2]
Construye un Map donde cada número sea la clave y su frecuencia sea el valor.
Entradas esperadas, en orden: [[2, 3], [3, 2], [4, 1]]

Condiciones:
- Usa get y set para actualizar el contador.
- Cuando un número aparezca por primera vez, su contador debe partir de 0.
- No escribas manualmente las claves del resultado.

Comprueba también:
- [] → Map vacío.
- [7, 7, 7] → [[7, 3]]
- [0, -1, 0] → [[0, 2], [-1, 1]]

Pregunta: ¿qué problema resuelve usar ?? 0 al consultar el contador anterior?
*/

// Tu solución:

/*
12. PRIMER VALOR ÚNICO — contar y luego buscar

Entrada: [4, 5, 4, 6, 5, 8]
Encuentra el primer número que aparezca exactamente una vez.
Esperado: 6.

Estrategia que debes implementar:
1. Construye un Map de frecuencias.
2. Recorre la entrada en su orden original y busca la primera frecuencia 1.

Comprueba también:
- [9, 9, 2] → 2
- [0, 1, 1] → 0
- [3, 3] → undefined
- [] → undefined

Pregunta: ¿por qué no puedes decidir que un número es único al verlo por primera vez?
*/

// Tu solución:

/*
13. AGRUPAR — un Map cuyos valores son arrays

Entrada:
[
  { nombre: "Ana", equipo: "rojo" },
  { nombre: "Luis", equipo: "azul" },
  { nombre: "Eva", equipo: "rojo" }
]

Agrupa los nombres por equipo usando un Map.
Entradas esperadas:
[
  ["rojo", ["Ana", "Eva"]],
  ["azul", ["Luis"]]
]

Condiciones:
- Cada equipo debe tener su propio array.
- Conserva el orden en que aparecen los nombres.
- Debe funcionar con equipos que no conoces de antemano y con una entrada vacía.

Pregunta: ¿qué error ocurriría si todos los equipos compartieran el mismo array?
*/

// Tu solución:

// =====================================================================
// PARTE C: INTEGRAR AMBAS HERRAMIENTAS
// =====================================================================

/*
14. RESUMEN DE VENTAS — acumular con Map y transformar con .map()

Entrada:
[
  { producto: "cuaderno", cantidad: 2, precioUnitario: 50 },
  { producto: "lápiz", cantidad: 3, precioUnitario: 10 },
  { producto: "cuaderno", cantidad: 1, precioUnitario: 60 }
]

Primero acumula el importe vendido por producto en un Map.
El importe de cada venta es cantidad * precioUnitario.
Después convierte las entradas a un array y usa map para crear objetos.

Resultado esperado:
[
  { producto: "cuaderno", total: 160 },
  { producto: "lápiz", total: 30 }
]

Condiciones:
- Conserva el orden de primera aparición de cada producto.
- Usa el precio de cada venta: un producto puede venderse a precios distintos.
- No modifiques la entrada.
- Una entrada vacía debe producir [].

Pregunta: ¿qué responsabilidad tiene Map y cuál tiene .map() en tu solución?
*/

// Tu solución:

/*
AUTOEVALUACIÓN
==============
Antes de dar por dominada esta práctica, comprueba que puedes:
- Elegir entre map, filter y un recorrido según el resultado que necesitas.
- Explicar el retorno del callback y el retorno del método map.
- Transformar objetos sin modificar los originales.
- Distinguir un array nuevo de una copia profunda.
- Guardar, consultar, actualizar, eliminar y recorrer entradas de un Map.
- Explicar cómo se distinguen claves numéricas, strings y objetos.
- Resolver conteos y agrupaciones con entradas nuevas, sin memorizar la solución.

Repite los ejercicios que te cuesten cambiando los datos de entrada.
*/
