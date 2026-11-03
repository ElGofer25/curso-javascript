// ==== MAP ====
{/*
Las tres operaciones fundamentales

Método	            Qué hace	                    Ejemplo
.has(clave)	        Comprueba si existe una clave	frecuencia.has(2)
.get(clave)	        Obtiene el valor asociado	    frecuencia.get(2)
.set(clave, valor)	Guarda o actualiza una pareja	frecuencia.set(2, 1)
Ejemplo:    

const frecuencia = new Map();

frecuencia.set(2, 1);
frecuencia.set(3, 1);

console.log(frecuencia.get(2)); // 1
console.log(frecuencia.has(4)); // false
*/}


// ==== EJERCICIO ====

{/*
Ejercicio R1 — Contar apariciones con Map
No vamos a resolver Majority Element todavía.
Primero quiero que demuestres que puedes registrar y actualizar una frecuencia con Map.
Partimos de este código:
const nums = [2, 3, 2, 4, 3, 2];
const frecuencia = new Map();

for (let i = 0; i < nums.length; i++) {
    const numero = nums[i];

    if (frecuencia.has(numero)) {
        // A: El número ya existe
    } else {
        // B: Es la primera aparición
    }
}

console.log(Array.from(frecuencia));


Tu tarea
Completa solamente las dos instrucciones que faltan:
A. Si el número ya existe, obtén su frecuencia actual, súmale 1 y actualízala utilizando .set().
B. Si el número todavía no existe, guárdalo con frecuencia inicial 1.
El resultado esperado es:
[
    [2, 3],
    [3, 2],
    [4, 1]
]   
Mi solución:
const nums = [2, 3, 2, 4, 3, 2];
const frecuencia = new Map();

for (let i = 0; i < nums.length; i++) {
    const numero = nums[i];

    if (frecuencia.has(numero)) {// A: El número ya existe
    //Con set actualizamos el dato, damos: (clave, valor)
        frecuencia.set(numero, frecuencia.get(numero)+1)
    } else {// B: Es la primera aparición
     frecuencia.set(numero, 1)
        
    }
}

console.log(Array.from(frecuencia));

*/}


//      === Ejercicio ===

{/*
Repaso R2 — Contar frecuencias de forma independiente
Ahora vamos a retirar la estructura que te proporcioné en el ejercicio anterior. Quiero comprobar si puedes construirla por tu cuenta.
Enunciado
Dado el siguiente array:
const nums = [5, 2, 5, 3, 2, 5, 3, 3, 3];


Desarrolla una función:
function contarFrecuencias(nums) {
    // Tu implementación
}


La función debe devolver un Map donde cada clave sea un número del array y cada valor sea la cantidad de veces que aparece.

Puedes comprobarlo mediante:
const resultado = contarFrecuencias(nums);
console.log(Array.from(resultado));

Reglas
    - Utiliza un Map.
    - Recorre el array con for.
    - Utiliza .has(), .get() y .set() según corresponda.
    - Devuelve el Map mediante return.
    - No utilices otro array para guardar las frecuencias.
    - No se exige optimización adicional.


*/}

const nums = [5, 2, 5, 3, 2, 5, 3, 3, 3];

function contarFrecuencias(nums) {
    let newmap = new Map();

    for(let i = 0; i < nums.length; i++){
        if(newmap.has(nums[i])){
            newmap.set(nums[i], newmap.get(nums[i])+1)
        } else{
            newmap.set(nums[i], 1)
        }
    }
    return newmap;
}
//console.log(contarFrecuencias(nums)) Este log imprime el objeto Map tal cuál
//console.log(Array.from(contarFrecuencias(nums))); Si queremos imprimir el map como array, esta linea nos sirve

// ==== EJERCICIO ===
{/*
Frecuencias con negativos y ceros
Ahora vamos a comprobar que puedes utilizar Map con cualquier número entero, sin depender de que los valores sean positivos.
Enunciado
Dado el siguiente array:
const nums = [0, -2, 3, -2, 0, -2, 3, 0, 0];


Desarrolla una función:
function contarFrecuencias(nums) {
    // Tu implementación
}


Debe devolver un Map que indique cuántas veces aparece cada número    
El resultado, convertido con Array.from(), debe ser:
[
    [0, 4],
    [-2, 3],
    [3, 2]
]


Reglas
Puedes reutilizar la lógica de tu ejercicio anterior. En esta ocasión, además de contar, deberás comprobar que sabes consultar frecuencias individuales.
*/}

const first = [0, -2, 3, -2, 0, -2, 3, 0, 0];

function contarFrec(first){
    let newmap = new Map();

    for(let i = 0; i < first.length; i++){
        if(newmap.has(first[i])){
            newmap.set(first[i], newmap.get(first[i])+1)
        } else{
            newmap.set(first[i], 1)
        }

    }
    return newmap;
}
console.log(Array.from(contarFrec(first)))