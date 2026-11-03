{/* 
    
    const nums = [9, 2, 7, 3, 6, 4, 8, 9];
const target = 9;

function twoSum(nums, target){
    let array = [];

    for(let i = 0; i < nums.length; i++){
        
      if (((nums[i] + nums[i+1]) === target) && !(i in array)){
            array.push(i, (i+1))
        }
    }
       
    return array;
}
console.log(twoSum(nums, target));
    */}

// const nums = [4, 2, 8, 5];
// const target = 9;


// function twoSum(nums, target){
//     let intervals = [];
//       for(let i = 0; i<nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//             if((nums[i]+nums[j]) === target){
//                  intervals.push(i,j)
//             }
//         }
//    } 
//    return intervals
// }
// console.log(twoSum(nums, target))

{/*
    
Construir operaciones de Map
Todavía no escribiremos la función completa.
Partimos de:
const mapa = new Map();

const numero = 4;
const indice = 0;
const target = 9;


Quiero que escribas solamente las operaciones necesarias para:
1. Calcular el complemento de numero respecto a target, guardándolo en una variable llamada complemento.
2. Comprobar con un if si el complemento existe dentro de mapa.
3. Guardar el número 4 como clave y su índice 0 como valor mediante set().
No utilices ciclos ni return todavía.    
    
*/}
// const mapa = new Map();

// const numero = 4;
// const indice = 0;
// const target = 9;

// let complemento = target - numero;
// if(mapa.has(complemento)){
//     console.log('El valor ya existe dentro de map')
// }else{
//     mapa.set(numero, indice)
// }
// console.log(mapa)

{/*
Integrar un for con Map
Ahora vamos a construir el recorrido, pero todavía no la solución completa.

Tu objetivo es escribir un solo ciclo for que:
1. Recorra todos los elementos de nums.
2. Guarde el valor actual en una variable numero.
3. Calcule su complemento.
4. Compruebe con mapa.has() si ese complemento ya existe.
5. Si existe, imprima "Complemento encontrado".
6. Si no existe, guarde numero como clave y su índice como valor.
Todavía no utilices return ni construyas una función. Estamos comprobando que puedes integrar las operaciones dentro de un recorrido.    
    
*/}
// const nums = [4, 2, 8, 5];
// const target = 9;
// const mapa = new Map();

// for(let i = 0; i < nums.length; i++){
//     let numero = nums[i];
//     let complemento = target - numero;

//     if(mapa.has(complemento)){
//         console.log('Complemento encontrado')
//     } else{
//         mapa.set(numero, i)
//     }

// }
// console.log(mapa);




{/*
Tu ejercicio
Completa únicamente el interior del if:

Objetivos:
1. Recuperar mediante get() el índice asociado a complemento.
2. Guardarlo en una variable llamada indiceAnterior.
3. Devolver con return un array que contenga primero indiceAnterior y después i.
El resultado esperado es:
[0, 3]    
    
*/}

// const mapa = new Map();

// mapa.set(4, 0);
// mapa.set(2, 1);
// mapa.set(8, 2);

// const complemento = 4;
// const i = 3;

// function obtenerIndices(mapa, complemento, i) {
//     let indiceAnterior = null;
//     if (mapa.has(complemento)) {
//         indiceAnterior = mapa.get(complemento)
//     }
//     return [indiceAnterior, i]
// }

// console.log(obtenerIndices(mapa, complemento, i));


{/*
No vamos a reescribir todavía toda la función.
Primero quiero que identifiques cómo sustituir la búsqueda que hacía j utilizando lo que ya aprendiste de Map.
Ya tenemos el único ciclo que necesitamos. Tu trabajo es completar su interior con tres operaciones, en este orden:
1. Comprobar mediante has() si el complemento se encuentra entre los números visitados.
2. Si existe, recuperar su índice mediante get() y devolverlo junto con i. Como todavía no estamos dentro de una función, por ahora utiliza console.log() para mostrar ambos índices.
3. Si no existe, guardar el número actual y su índice mediante set().
No agregues un segundo for, ni una función, ni return. Esta vez vamos a concentrarnos exclusivamente en que el Map haga la búsqueda.


*/}
// const nums = [4, 2, 8, 5, 4];
// const target = 9;
// const values = new Map();


// for (let i = 0; i < nums.length; i++) {
//     let numero = nums[i];
//     let complemento = target - numero;
//     if (values.has(complemento)){
//         console.log(values.get(complemento)) //Indice del número
//         console.log(i)
        
//     }else{
//         values.set(nums[i], i)
//     }
// }

