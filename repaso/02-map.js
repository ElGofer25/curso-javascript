/*
APUNTE: .map() Y Map EN JAVASCRIPT
================================
Aunque sus nombres se parecen, resuelven problemas diferentes:

- array.map(): transforma los elementos de un array en un nuevo array.
- new Map(): crea una colección que relaciona claves con valores.

Ruta de estudio:
1. Transformar arrays con .map().
2. Elegir entre map, filter y forEach.
3. Guardar y consultar datos con Map.
4. Aplicar Map para contar frecuencias.

Puedes ejecutar todos los ejemplos con:
node repaso/02-map.js
*/

// =====================================================================
// 1. ARRAY.MAP(): TRANSFORMAR CADA ELEMENTO
// =====================================================================

/*
Usa .map() cuando quieras obtener un array a partir de otro, aplicando
una transformación a cada elemento.

Sintaxis básica:
const resultado = array.map(callback);

El callback es la función que entregas a map. map la ejecuta por cada
elemento presente, en orden de índice. Lo que devuelve el callback se
guarda en la posición correspondiente del nuevo array.
*/

const numeros = [2, 4, 6];

const dobles = numeros.map((numero) => {
  return numero * 2;
});

console.log(dobles); // [4, 8, 12]
console.log(numeros); // [2, 4, 6]

/*
Paso a paso:
Índice    Elemento recibido    Valor retornado
0         2                    4
1         4                    8
2         6                    12

- numero es un parámetro: tú eliges su nombre.
- return entrega el resultado de UNA ejecución del callback.
- map reúne esos resultados y devuelve el array COMPLETO.

Con una función flecha de una sola expresión puedes omitir las llaves
 y return. Esto se llama retorno implícito:
*/

const triples = numeros.map((numero) => numero * 3);
console.log(triples); // [6, 12, 18]

// ---------------------------------------------------------------------
// 1.1. Los parámetros del callback
// ---------------------------------------------------------------------

/*
El callback puede recibir (elemento, indice, arrayOriginal).
Normalmente basta con elemento; declara los demás solo si los necesitas.
El índice empieza en 0.
*/

const nombres = ["Ana", "Luis"];
const listaNumerada = nombres.map((nombre, indice) => {
  return `${indice + 1}. ${nombre}`;
});

console.log(listaNumerada); // ["1. Ana", "2. Luis"]

// ---------------------------------------------------------------------
// 1.2. Transformar objetos y extraer propiedades
// ---------------------------------------------------------------------

const productos = [
  { nombre: "Cuaderno", precio: 50 },
  { nombre: "Lápiz", precio: 10 },
];

const nombresProductos = productos.map((producto) => producto.nombre);
console.log(nombresProductos); // ["Cuaderno", "Lápiz"]

// Los paréntesis de ({ ... }) permiten retornar un objeto directamente.
// ...producto copia sus propiedades en un nuevo objeto.
const productosConDescuento = productos.map((producto) => ({
  ...producto,
  precio: producto.precio * 0.9,
}));

console.log(productosConDescuento);
// [{ nombre: "Cuaderno", precio: 45 }, { nombre: "Lápiz", precio: 9 }]
console.log(productos[0].precio); // 50: el objeto original sigue igual.

/*
map crea un array nuevo, pero NO copia profundamente sus elementos.
Si devuelves el mismo objeto, ambos arrays comparten ese objeto.
Si modificas producto.precio dentro del callback, modificas el original.
La copia con ... también es superficial: los objetos anidados se comparten.
*/

const mismosProductos = productos.map((producto) => producto);
console.log(mismosProductos === productos); // false: arrays diferentes.
console.log(mismosProductos[0] === productos[0]); // true: mismo objeto.

// ---------------------------------------------------------------------
// 1.3. Errores comunes y elección del método
// ---------------------------------------------------------------------

// ERROR: con llaves, olvidar return produce undefined en cada posición.
const sinRetorno = numeros.map((numero) => {
  numero * 2;
});
console.log(sinRetorno); // [undefined, undefined, undefined]

/*
map conserva la longitud: no elimina elementos.
Un callback que retorna una condición produce booleanos, no un filtro.
*/

console.log(numeros.map((numero) => numero > 2)); // [false, true, true]
console.log(numeros.filter((numero) => numero > 2)); // [4, 6]

/*
Elige según tu intención:
- map: transformar elementos y usar el nuevo array.
- filter: conservar solo los elementos que cumplen una condición.
- forEach: realizar una acción por elemento, sin construir un array resultado.
- reduce: acumular los elementos en un resultado, por ejemplo una suma.

Detalle: si un array tiene posiciones vacías, map no ejecuta el callback
para ellas y las conserva vacías. Una posición vacía no es lo mismo que
una posición cuyo valor es undefined: esta última sí se procesa.
*/

// =====================================================================
// 2. MAP: RELACIONAR CLAVES CON VALORES
// =====================================================================

/*
Map es una colección de pares clave → valor.
Úsalo cuando quieras buscar, guardar o actualizar un dato por una clave.
Por ejemplo: nombre → edad, producto → stock, número → frecuencia.

Una clave es única. Guardar otra vez la misma clave actualiza su valor.
Las claves y los valores pueden ser de cualquier tipo.

Operaciones principales:
new Map()          Crea una colección vacía.
set(clave, valor)  Guarda o actualiza una entrada; devuelve el propio Map.
get(clave)         Obtiene el valor; devuelve undefined si la clave no existe.
has(clave)         Indica si existe la clave, con true o false.
delete(clave)      Elimina una entrada; devuelve true si existía.
clear()           Elimina todas las entradas.
size              Propiedad con la cantidad de entradas; se usa sin ().

Usa get y set para las entradas: mapa[clave] no equivale a mapa.get(clave).
*/

const edades = new Map();
edades.set("Ana", 20);
edades.set("Luis", 25);
edades.set("Ana", 21);

console.log(edades.get("Ana")); // 21
console.log(edades.has("Luis")); // true
console.log(edades.size); // 2
console.log(edades.get("Eva")); // undefined

edades.delete("Luis");
console.log(edades.has("Luis")); // false

// También puedes crear un Map a partir de pares [clave, valor].
const stock = new Map([
  ["cuaderno", 8],
  ["lápiz", 15],
]);

// ---------------------------------------------------------------------
// 2.1. Recorrer un Map
// ---------------------------------------------------------------------

/*
Map conserva el orden de inserción. Actualizar una clave existente
no cambia su posición. No se accede a sus entradas por índices.
En cada vuelta, [producto, cantidad] extrae la clave y el valor del par.
*/

for (const [producto, cantidad] of stock) {
  console.log(`${producto}: ${cantidad}`);
}
// cuaderno: 8
// lápiz: 15

// Convertir las entradas en array permite usar el método .map().
const etiquetas = Array.from(stock).map(([producto, cantidad]) => {
  return `${producto} (${cantidad})`;
});
console.log(etiquetas); // ["cuaderno (8)", "lápiz (15)"]

// ---------------------------------------------------------------------
// 2.2. Cómo se distinguen las claves
// ---------------------------------------------------------------------

const claves = new Map();
claves.set(2, "clave numérica");
claves.set("2", "clave de texto");
console.log(claves.size); // 2: el número 2 y el string "2" son diferentes.

// Los objetos se comparan por identidad, no por su contenido.
const usuario = { id: 1 };
const permisos = new Map([[usuario, "editor"]]);
console.log(permisos.get(usuario)); // "editor"
console.log(permisos.get({ id: 1 })); // undefined: es otro objeto.

/*
Si guardas undefined como valor, get devuelve undefined tanto para esa
entrada como para una clave ausente. Usa has para distinguir ambos casos.

¿Map u objeto?
- Un objeto suele encajar para un registro de propiedades conocidas,
  como { nombre: "Ana", edad: 21 }.
- Map encaja para una colección de entradas que agregas, consultas y
  eliminas por clave, especialmente si las claves no son solo strings.
*/

// =====================================================================
// 3. EJEMPLO PRÁCTICO: CONTAR FRECUENCIAS CON MAP
// =====================================================================

/*
Objetivo: saber cuántas veces aparece cada número.
La clave será el número y el valor será su cantidad de apariciones.
*/

const datos = [2, 3, 2, 4, 3, 2];
const frecuencias = new Map();

for (const numero of datos) {
  const cantidadAnterior = frecuencias.get(numero) ?? 0;
  frecuencias.set(numero, cantidadAnterior + 1);
}

console.log(Array.from(frecuencias)); // [[2, 3], [3, 2], [4, 1]]
console.log(frecuencias.get(2)); // 3

/*
Cómo funciona:
1. get(numero) busca cuántas veces habíamos visto ese número.
2. Si aún no existe, get devuelve undefined y ?? usa 0.
3. Sumamos 1 y set guarda la nueva cantidad.

?? usa el valor de la derecha solo si el de la izquierda es null o undefined.

Para la clave 2:
Primera aparición: 0 + 1 → guarda 1.
Segunda aparición: 1 + 1 → guarda 2.
Tercera aparición: 2 + 1 → guarda 3.
*/

// =====================================================================
// 4. REPASO Y PRÁCTICA
// =====================================================================

/*
¿Y el término hash map?
Una tabla hash es una posible implementación de una colección de claves
 y valores. JavaScript no exige que Map se implemente como tabla hash.
Para usarlo, primero domina sus claves, valores y operaciones.

Ideas que debes poder explicar:
- .map() devuelve un array con el resultado de cada llamada al callback.
- El callback necesita devolver el valor que quieres guardar.
- Un array nuevo puede seguir compartiendo objetos con el original.
- Map guarda pares clave → valor; usa get/set/has y la propiedad size.

Ejercicios (intenta resolverlos antes de ejecutar tu solución):
1. Usa map para convertir [1, 2, 3] en [1, 4, 9].
2. Usa map para extraer los precios del array productos.
3. Crea un Map de producto → stock y actualiza una cantidad usando get y set.
4. Adapta el contador para ["sol", "luna", "sol"].
   Resultado esperado: "sol" → 2, "luna" → 1.
*/
