{/*
3. Tu siguiente ejercicio: construir una condición
Ahora te toca escribir código, pero solo un if, no el algoritmo completo.
Partimos de:
    let maximo = 20;
    let segundo = 12;
    let numero = 15;


Objetivo: escribe una condición que actualice segundo cuando numero sea mayor que segundo, pero menor que maximo.
No modifiques maximo, no utilices ciclos y no uses Math.max().
Recuerda que JavaScript permite combinar dos comparaciones con &&, que significa AND (y): ambas deben ser verdaderas.
    
let maximo = 20;
let segundo = 12;
let numero = 15;

if(numero > segundo && maximo > numero ){
    segundo = numero;
}
    */}


{/*
Construir la condición de inicialización
Partimos de estas variables:
let maximo = 5;
let segundo = null;
let numero = 3;


Sabemos que numero es menor que maximo, pero todavía no tenemos un segundo máximo.
Objetivo: escribe únicamente un if que asigne numero a segundo cuando se cumplan ambas condiciones:
1. segundo todavía sea null.
2. numero sea menor que maximo.
No utilices ciclos ni construyas el algoritmo completo.
let maximo = 5;
let segundo = null;
let numero = 3;
if(segundo === null && numero < maximo){
    segundo = numero
}
*/}


{/* 
Tu tarea
Completa una función que:
1. Reciba el array numeros.
2. Declare maximo utilizando el primer elemento del array.
3. Declare segundo con el valor null.
4. Recorra el array utilizando un for tradicional.
5. Declare dentro del recorrido una variable numero que represente el elemento actual.
6. No implemente todavía las condiciones para actualizar los máximos.
Para esta etapa puedes asumir que el array tiene al menos un elemento. Después agregaremos el manejo del array vacío.
Ejemplo del array
const numeros = [4, 8, 2, 9, 5];

const numeros = [4, 8, 2, 9, 5];

function myFunction(numeros){
    let maximo = numeros[0];
    let segundo = null;
    
    for(let i = 0; i<numeros.length; i++){
        let numero = numeros[i];
    }
};
console.log(myFunction(numeros));
*/}

{/* 
Dentro del for, escribe un if que haga lo siguiente:
1. Compruebe si numero es mayor que maximo.
2. Si lo es, guarde el máximo anterior en segundo.
3. Después actualice maximo con el número nuevo.
Importante: el orden de las dos asignaciones importa.
No implementes todavía el else if, los duplicados ni el return. Estamos construyendo el algoritmo progresivamente.
    
function secondLargest(numeros) {
    let maximo = numeros[0];
    let segundo = null;

    for (let i = 1; i < numeros.length; i++) {
        let numero = numeros[i];
        if(numero > maximo){
            segundo = maximo;
            maximo = numero
        }
        
    }
}
*/}

{/*
Tu ejercicio
Completa el siguiente código agregando únicamente un bloque else if después del if existente.
Tu condición deberá comprobar que:
1. numero sea menor que maximo.
2. Se cumpla al menos una de estas dos situaciones:
   - segundo todavía sea null.
   - numero sea mayor que segundo.
Recuerda los operadores:
- &&: ambas condiciones deben cumplirse.
- ||: basta con que una condición se cumpla.
- ===: igualdad estricta.
No agregues todavía el return ni el manejo del array vacío.    
    
function secondLargest(numeros) {
    let maximo = numeros[0];
    let segundo = null;

    for (let i = 1; i < numeros.length; i++) {
        let numero = numeros[i];

        if (numero > maximo) {
            segundo = maximo;
            maximo = numero;
        }
        else if(numero < maximo &&(segundo === null || numero > segundo)){
            
        }
    }
}
*/}

{/* 
Pregunta 3 — Escribe código
Tenemos:
const mapa = new Map();


Escribe las instrucciones necesarias para:
1. Guardar la clave "Mexico" con valor 100.
2. Incrementar ese valor en 50, utilizando get() y set().
3. Imprimir el valor final.
    
const mapa = new Map();

mapa.set('Mexico', 100)
mapa.set('Mexico', mapa.get('Mexico')+50)

console.log(mapa.get('Mexico'))
*/}


{/*
Tenemos:
const nums = [4, 2, 8, 5];


Quiero que construyas dos ciclos for anidados que impriman parejas de índices sin repetir posiciones ni comparar la misma pareja dos veces.
La salida esperada es:
        0 1
        0 2
        0 3
        1 2
        1 3
        2 3

Observa que no aparecen 0 0, 1 1, 2 2 ni 3 3.
Tampoco aparece 1 0, porque la pareja 0 1 ya fue examinada.
    
*/}
// const nums = [4, 2, 8, 5];

// for(let i =0; i<nums.length; i++){
//     for(let j = i + 1; j< nums.length; j++){
//         console.log(i, j)
//     }
// }

{/*
Repaso 1 — Second Largest Distinct Number
Ejercicio 1 de 2
Enunciado: Dado un array de números enteros, desarrolla una función que devuelva el segundo número distinto más grande.

Ejemplos
Entrada	Resultado esperado
    [4, 8, 2, 9, 5]	8
    [10, 10, 8, 7]	8
    [-5, -2, -8, -1]	-2
    [5, 5, 5]	null
    [9]	null
    []	null

Restricciones
- Utiliza JavaScript.
- No utilices sort(), Set ni Math.max().
- Intenta resolverlo con un solo recorrido.
- Devuelve null si no existe un segundo número distinto.
- No consultes el código que construimos anteriormente.
const nums = [-1, -2, -3];

function secondLargest(nums) {
    let first = nums[0];
    let second = null;

    if(2 > nums.length){
        return null
    }
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] > first){
           second = first
           first = nums[i] 
        } else if(nums[i] < first && (second === null || nums[i] > second)){
            second = nums[i]
        }
    }
    return second
}
console.log(secondLargest(nums))
*/}