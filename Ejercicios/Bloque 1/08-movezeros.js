{/*
Desarrolla una función llamada moveZeroes(nums) que reciba un array de números enteros.
Tu objetivo es mover todos los ceros al final del array, manteniendo el orden original de los números distintos de cero.    

. Reglas del problema
1. Debes modificar directamente el array recibido (nums).
2. No debes devolver un nuevo array; la función puede terminar sin return.
3. Debes conservar el orden relativo de los números distintos de cero.
4. No puedes crear otro array para guardar el resultado. Puedes utilizar variables auxiliares.
5. No se exige una complejidad temporal específica ni una técnica de optimización.
*/}

const nums = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
    let posicion = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let aux = nums[posicion]
            nums[posicion] = nums[i]
            nums[i] = aux
            posicion++
        }
    }
    return nums
}
console.log(moveZeroes(nums))

{/*
Práctica

Antes de mover todos los ceros, vamos a practicar una sola operación.
Partimos de:
const nums = [0, 1, 0, 3, 12];


Tu objetivo: intercambiar el valor de la posición 0 con el de la posición 1, sin modificar los demás elementos.
Resultado esperado:
[1, 0, 0, 3, 12]


Instrucciones:
1. Declara una variable auxiliar para conservar temporalmente nums[0].
2. Asigna a nums[0] el valor que está en nums[1].
3. Asigna a nums[1] el valor que guardaste en la variable auxiliar.
4. Imprime el array final.

const nums = [0, 1, 0, 3, 12];

let aux = nums[0] // Var temporal igual a cero
nums[0] = nums[1] // Copia el 1 en la posición 0.
// nums ahora es [1, 1, 0, 3, 12]

nums[1] = aux// Coloca el 0 guardado en la posición 1.
// nums ahora es [1, 0, 0, 3, 12]

console.log(nums)
*/}

{/*
Intercambiar posiciones variables
Ahora vamos a aplicar ese conocimiento a posiciones que no conocemos de antemano.
Anteriormente escribiste:
let aux = nums[0];
nums[0] = nums[1];
nums[1] = aux;


Pero en Move Zeroes los ceros pueden aparecer en diferentes posiciones. Por eso necesitamos que los índices sean variables.
Tu siguiente ejercicio
Partimos de:
const nums = [0, 1, 0, 3, 12];

const izquierda = 2;
const derecha = 3;

Instrucciones precisas
1. Declara una variable auxiliar aux que almacene el valor de nums[izquierda].
2. Copia el valor de nums[derecha] a nums[izquierda].
3. Copia el valor de aux a nums[derecha].
4. Imprime el array resultante.
No utilices números fijos como índices en las tres asignaciones. Utiliza las variables izquierda y derecha.
No agregues ciclos, funciones ni otras operaciones.    
    
const nums = [0, 1, 0, 3, 12];

const izquierda = 2;
const derecha = 3;
let aux = nums[izquierda];
nums[izquierda] = nums[derecha];
nums[derecha] = aux

console.log(nums)
*/}


{/*
Identificar posiciones automáticamente
Considera nuevamente:
const nums = [0, 1, 0, 3, 12];


Queremos recorrer el array para encontrar los números distintos de cero.
La idea será utilizar dos índices con responsabilidades diferentes:
- i: recorre los elementos del array.
- posicion: señala dónde debería colocarse el siguiente número distinto de cero. 
    
const nums = [0, 1, 0, 3, 12];
for(let i = 0; i<nums.length; i++){
    if(nums[i] != 0){
        console.log(i)
}}
*/}

{/*
    ===== IMPRIME EL VALOR Y SU INDICE
    const nums = [0, 1, 0, 3, 12];
    let posicion = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            console.log(i, posicion )
            posicion ++
        }
    }
*/}


{/*
    
    
    const nums = [0, 1, 0, 3, 12];
    
    function moveZeroes(nums) {
        let posicion = 0;
    
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                let aux = nums[posicion]
                nums[posicion] = nums[i]
                nums[i] = aux
                posicion++
            }
        }
    }
    console.log(moveZeroes(nums))
*/}
