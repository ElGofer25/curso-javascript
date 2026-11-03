{/*
. Enunciado
Escribe una función en JavaScript llamada twoSum que reciba dos parámetros:
- nums: un array de números enteros.
- target: un número entero que representa la suma objetivo.
La función debe devolver un array con los índices de dos elementos distintos de nums cuya suma sea igual a target.
Ejemplo
const nums = [4, 2, 8, 5];
const target = 9;


Resultado esperado:
[0, 3]


Porque nums[0] + nums[3] equivale a 4 + 5 = 9.
2. Requisitos obligatorios
1. Declara function twoSum(nums, target).
2. Utiliza exactamente un ciclo for para recorrer nums.
3. Utiliza un Map como estructura auxiliar.
4. Puedes utilizar has(), get() y set().
5. Devuelve los dos índices en un array utilizando return.
6. No utilices dos ciclos anidados, sort(), indexOf() ni findIndex().
7. No puedes utilizar dos veces el mismo índice.
8. Puedes asumir que cada entrada tiene exactamente una pareja válida.
Importante: el Map debe servir para localizar la pareja, no únicamente para almacenar el resultado después de encontrarla.
3. Casos de prueba
Tu misma función debe superar los siguientes casos, sin modificar su lógica entre pruebas.
Prueba	nums	target	Resultado esperado
A	[4, 2, 8, 5]	9	[0, 3]
B	[2, 7, 11, 15]	9	[0, 1]
C	[3, 3]	6	[0, 1]
D	[-3, 4, 3, 90]	0	[0, 2]
E	[3, 2, 4]	6	[1, 2]
F	[5, 1, 8, 5]	10	[0, 3]
El caso F comprueba que puedes encontrar dos elementos con el mismo valor en índices diferentes.
    
const nums = [4, 2, 8, 5];
const target = 9;
let mapa = new Map()

function twoSum(nums, target){
    if(nums.length < 2){
        return null
    }
    for(let i = 0; i < nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if((nums[i] + nums[j] === target)){
                mapa.set(i)
                mapa.set(j)
            }
        }
    }
    return mapa.get()
}
console.log(twoSum(nums, target))
*/}

{/*
Desarrolla una función llamada containsDuplicate(nums) que reciba un array de números enteros.
La función debe devolver:
- true si al menos un número aparece dos o más veces.
- false si todos los números son distintos.
Ejemplos
Entrada	Resultado esperado
[1, 2, 3, 1]	true
[1, 2, 3, 4]	false
[5, 5]	true
[-1, 0, -1]	true
[7]	false
[]	false
2. Requisitos
- Lenguaje: JavaScript.
- Nombre de la función: containsDuplicate.
- Parámetro: nums.
- Retorno: un booleano (true o false).
- Puedes utilizar ciclos, condicionales, arrays, objetos, Map o cualquier otra herramienta estándar de JavaScript.
- No es necesario optimizar en este ejercicio.
No te daré código base ni pistas sobre la estrategia. Quiero observar cómo razonas desde cero.


const nums = [1, 2, 3, 1];

function containsDuplicate(nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = i +1; j<nums.length; j++){ 
            if(nums[i] === nums[j]){
                return true
            }

        }
    }
    return false
}
console.log(containsDuplicate(nums))
*/}

{/*
Siguiente ejercicio — Función contarLetra()
Ahora vamos a generalizar lo que acabas de aprender.
Objetivo: escribe una función contarLetra(palabra, letra) que cuente cuántas veces aparece un carácter determinado dentro de una cadena.
Casos de prueba:
Llamada	Resultado esperado
contarLetra("banana", "a")	3
contarLetra("banana", "n")	2
contarLetra("hola", "z")	0
contarLetra("", "a")	0
    
*/}
// const palabra = "aba";
// const letra = 'a';


// function contarLetra(palabra, letra){
//     let contador = 0;

//     for (let i = 0; i < palabra.length; i++){
//         if(palabra[i] === letra){
//             contador ++;
//         }
//     }
//     return contador;
// }
// let cantidadS = (contarLetra('aab', 'a'))
// let cantidadT = (contarLetra('aba', 'a'))

// if (cantidadS === cantidadT){
//     console.log('Sí coinciden')

// }else{
//     console.log('No coinciden')
// }



{/*
    
Enunciado

Desarrolla una función llamada isAnagram(s, t) que reciba dos cadenas de texto.
La función debe devolver:
- true si ambas cadenas contienen exactamente las mismas letras, con la misma cantidad de apariciones, aunque estén en diferente orden.
- false en caso contrario.
Por ejemplo, "listen" y "silent" son anagramas porque contienen las mismas letras.
    
*/}


  