{/*
Clase 25 — Majority Element
LeetCode 169
Easy · Arrays · Frecuencias

Este ejercicio retoma conceptos que ya has utilizado en Contains Duplicate, Valid Anagram y el conteo de ceros de Move Zeroes.
4. Enunciado
Desarrolla una función:
function majorityElement(nums) {
    // Tu código
}


Dado un array de números enteros, debes encontrar el elemento que aparece más de nums.length / 2 veces.
Se garantiza que siempre existe un elemento mayoritario.    
Reglas
- Devuelve el número mayoritario, no su frecuencia ni su índice.
- El elemento puede ser negativo, cero o positivo.
- El array siempre contiene al menos un elemento.
- Se garantiza que existe una respuesta válida.
- Puedes utilizar ciclos, contadores, Map o cualquier estrategia que domines.
- No se exige optimización.
*/}

const first = [2, 2, 1, 1, 1, 2, 2];

function majorityElement(first){
    let compare = (first.length / 2)
    let second = new Map()
    for (let i = 0; i < first.length; i++){
        if(second.has(first[i])){
            
        }
    }



}