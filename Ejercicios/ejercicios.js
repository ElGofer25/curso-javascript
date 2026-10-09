{/*
Enunciado
Dado un array de números enteros, escribe una función que devuelva el segundo número distinto más grande.
Ejemplo 1
const numeros = [4, 8, 2, 9, 5];

// Resultado esperado: 8


El número más grande es 9. El segundo más grande es 8.
Ejemplo 2 — Valores duplicados
const numeros = [10, 10, 8, 7];

// Resultado esperado: 8


Aunque el 10 aparece dos veces, no cuenta como dos valores diferentes.
Ejemplo 3 — Números negativos
const numeros = [-5, -2, -8, -1];

// Resultado esperado: -2


Ejemplo 4 — Sin segundo máximo
const numeros = [3, 3, 3];

// Resultado esperado: null


No existe un segundo número distinto.
Restricciones
- El array puede contener entre 0 y 100,000 elementos.
- Los valores son enteros entre -1,000,000 y 1,000,000.
- Puede contener números negativos y duplicados.
- Si no existen al menos dos valores distintos, devuelve null.
- Utiliza un for tradicional.
- No utilices sort(), Math.max() ni Math.min().
- Intenta encontrar el resultado recorriendo el array una sola vez.
    
*/}
const numeros = [4, 8, 2, 9, 5];

function myFunction(numeros){
    let first = numeros[0];
    // let second = 0; Debe ser null
    let second = null;

    for(let i = 0; i<numeros.length; i++){
        if (numeros[i] > first) {
            second = first; //Ponemos primero el second para no perder el segundo valor
            first = numeros[i];

        } else if (numeros[i] < first && (second === null || numeros[i] > second)) {
            second = numeros[i]
            {/*
            Significa:
            - El número actual debe ser menor que el máximo.
            - Y debe cumplirse al menos una condición: todavía no hay segundo máximo, o el número actual es mayor que el segundo máximo almacenado.
            */}
        }
    }
    return second;
}
console.log(myFunction(numeros))


{/*
Objetivo: escribe un programa que encuentre la temperatura más baja del array.
Salida esperada:
-9

Requisitos
1. Utiliza un for tradicional con índice i (no for...of).
2. Utiliza if para comprobar si debes actualizar el mínimo.
3. Declara una variable llamada minimo.
4. No utilices Math.min() ni sort().
5. Imprime el resultado una sola vez, después del ciclo.
6. Puedes asumir que el array contiene al menos un número.
Casos que debe superar tu solución
const temperaturas = [18, -4, 12, -9, 25, 0];
let minimo = temperaturas[0];

for(let i=0; i<temperaturas.length; i++){
    if(temperaturas[i]<minimo){
        minimo = temperaturas[i];
    }
}
console.log(minimo);
*/}

{/*
Objetivo: escribe un programa que encuentre e imprima el precio más alto sin utilizar Math.max() ni sort().
Salida esperada:
600

Requisitos
- Utiliza for y if.
- Declara una variable llamada maximo para conservar el mayor valor encontrado.
- Actualiza maximo únicamente cuando encuentres un valor superior.
- Utiliza un único console.log() fuera del ciclo.
- Puedes asumir que el array contiene al menos un elemento.
- Tu código también debe funcionar cuando todos los números son negativos.
Pista conceptual, sin solución: piensa qué valor inicial debe tener maximo para que el algoritmo funcione incluso si los elementos son [-8, -3, -10].

const precios = [120, 450, 80, 600, 250];
let maximo = precios[0];

for(let precio of precios){
    if (precio > maximo){
        maximo = precio;
    }
}
console.log(maximo);

Otra solución:
const precios = [120, 450, 80, 600, 250];
let maximo = precios[0];
for(let i = 0; i<precios.length; i++){
    if (precios[i] > maximo){
        maximo = precios[i];
    }
}
console.log(maximo);
*/}

{/*
Objetivo: calcular la suma de las compras cuyo valor sea estrictamente mayor a 200.
La salida esperada es:
1100


Requisitos
1. Utiliza un ciclo for tradicional.
2. Utiliza un if para comprobar qué compras son mayores a 200.
3. Declara e inicializa correctamente una variable total.
4. Acumula solamente los valores que cumplen la condición.
5. Imprime el total una sola vez, después de terminar el ciclo.
6. No utilices filter(), map() ni reduce().
Importante: esta vez no te proporcionaré el código inicial del acumulador. Quiero comprobar que recuerdas declararlo correctamente.
    
const compras = [150, 350, 100, 500, 250, 80];
let sumador = 0;
for(let i = 0; i<compras.length; i++){
    if(compras[i]>200){
        sumador += compras[i];
    };
};
console.log(sumador);
*/}

{/*
Objetivo: escribe un programa que recorra el array y calcule la suma de todos los precios.
La salida esperada es:
900


Requisitos
1. Utiliza un ciclo for tradicional.
2. Declara una variable total que comience en cero.
3. Acumula los precios durante cada iteración.
4. Imprime el resultado final una sola vez.
5. No utilices reduce(), map() ni otros métodos de arrays.
6. El código debe funcionar incluso si el array está vacío.
Esta vez no necesitas utilizar if, porque queremos sumar todos los elementos.

const precios = [120, 250, 80, 150, 300];
let sumador = 0;

for(let i = 0; i<precios.length; i++){
    sumador += precios[i]
}
console.log(sumador);
*/}


{/*
Objetivo: escribe un programa que cuente cuántas calificaciones son mayores o iguales a 70.
Esta vez no queremos imprimir las calificaciones, sino imprimir una sola vez la cantidad total de aprobados.
Salida esperada:
3


Requisitos
1. Utiliza for para recorrer el array.
2. Utiliza if para identificar las calificaciones aprobatorias.
3. Declara una variable contador que comience en cero.
4. Incrementa el contador cuando una calificación cumpla la condición.
5. Utiliza un único console.log() para imprimir el resultado final.
6. El código debe funcionar si cambia la cantidad de elementos del array.
No te proporcionaré la implementación. Quiero que intentes construirla utilizando lo aprendido.    
const calificaciones = [45, 80, 62, 95, 55, 70];
let counter = 0;


for(let i = 0; i < calificaciones.length; i++){
    if(calificaciones[i] >= 70){
        counter ++;
    }
}
console.log(counter);
*/}


// {Objetivo: escribe un programa que recorra el array e imprima únicamente las calificaciones mayores o iguales a 70.}

// {const calificaciones = [45, 80, 62, 95, 55, 70];

// for(let i=0; i<calificaciones.length; i++){
//     if(calificaciones[i] >= 70){
//         console.log(calificaciones[i])
//     }
// }} ----> Correcto


{/*
4. Ejercicio 12 — Contar apariciones
Escribe una función llamada countOccurrences que reciba un array de strings y devuelva un objeto con la cantidad de veces que aparece cada elemento.
Ejemplos
Entrada	Salida esperada
["a", "b", "a"]	{ a: 2, b: 1 }
["x", "x", "x"]	{ x: 3 }
["a"]	{ a: 1 }
[]	{}
Restricciones
- Utiliza un for tradicional.
- Utiliza un if para verificar si la propiedad ya existe.
- No utilices reduce() ni librerías externas.
- Devuelve el objeto mediante return.
- Para este primer ejercicio, considera únicamente strings simples como "apple", "banana" o "orange".
    
*/}
const frutas = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

function countOccurrences(frutas) {
    let frecuencias = {};

    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i] in frecuencias) {
            frecuencias[frutas[i]]++;
        } else {
            frecuencias[frutas[i]] = 1;
        }
    }

    return frecuencias;
}
console.log(countOccurrences(frutas))

