{/*
Merge Sorted Array
LeetCode 88
Easy · Arrays · Two Pointers

Este ejercicio es una continuación natural de Move Zeroes: trabajarás nuevamente con posiciones de arrays, pero ahora deberás combinar elementos de dos arrays ordenados.
4. Enunciado
Desarrolla una función:
function merge(nums1, m, nums2, n) {
    // Tu implementación
}


Recibirás dos arrays ordenados de menor a mayor.
- nums1 contiene m elementos válidos y n posiciones adicionales, representadas inicialmente por ceros.
- nums2 contiene n elementos válidos.
Tu objetivo es combinar todos los elementos y dejar el resultado ordenado dentro de nums1.    


*/}
const first = [0,0,3,0,0,0];
const second = [-1,0,2];
const n = 3;
const m = 3;


function merge(first, m, second, n){

    //Este bucle agrega los elementos de second en first
    for(let i = 0; i < n; i++){
        first[m+i] = second[i]
    }
    //Este bucle ordena de menor a mayor, los elementos de first
    for(let i = 0; i < first.length -1; i++){
        for(let j = 0; j < first.length-1; j++){
            let aux = 0;
            if(first[j]>first[j+1]){
                aux = first[j]
                first[j] = first[j+1]
                first[j+1] = aux
            }
            
        }
    
    }
    return first
}
console.log(merge(first, m, second, n))
{/*
    
Tu siguiente ejercicio
Todavía no necesitamos realizar intercambios.
Quiero que escribas un código que imprima únicamente los elementos válidos de nums1, utilizando m.
Datos:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
    
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;

for(let i = 0; i < m; i++){
    console.log(nums1[i], i)
}
*/}

{/*
    
    
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    const m = 3;
    const n = 3;
    
    for(let j = 0; j<n; j++){
        nums1[m+j] = nums2[j]
    }
    console.log(nums1)
*/}

{/*
Tu siguiente ejercicio
Objetivo: recorrer las parejas consecutivas y realizar un intercambio cuando el elemento izquierdo sea mayor que el derecho.
    
const nums1 = [1, 2, 3, 2, 5, 6];
// La regla general es: cuando utilizas array[i + 1], debes asegurarte de que i + 1 no supere el último índice.
for (let i = 0; i < nums1.length - 1; i++) {
    let aux = 0;
    if(nums1[i] > nums1[i+1]){
      aux = nums1[i]
      nums1[i] = nums1[i+1]
      nums1[i+1]=aux
    }
}

console.log(nums1);
*/}

{/*
Tu siguiente ejercicio
Ahora vas a agregar un segundo ciclo a tu código, sin modificar tu lógica de intercambio.
    
const nums1 = [5, 1, 4, 2, 8];

for (let j = 0; j < nums1.length-1; j++) {
    for (let i = 0; i < nums1.length - 1; i++) {
        let aux = 0;

        if (nums1[i] > nums1[i + 1]) {
            aux = nums1[i];
            nums1[i] = nums1[i + 1];
            nums1[i + 1] = aux;
        }
    }
}

console.log(nums1);
*/}

{/*
Requisitos
1. Primero utiliza un ciclo para copiar los n elementos válidos de nums2 en nums1, comenzando en el índice m.
2. Después utiliza tu implementación de Bubble Sort para ordenar nums1.
3. Modifica directamente nums1.
4. No crees arrays auxiliares ni necesitas devolver un valor.
5. No se exige optimización.
    
const first = [0,0,3,0,0,0];
const second = [-1,0,2];
const n = 3;
const m = 3;


function merge(first, m, second, n){
    for(let i = 0; i < n; i++){
        first[m+i] = second[i]
    }

    for(let i = 0; i < first.length -1; i++){
        for(let j = 0; j < first.length-1; j++){
            let aux = 0;
            if(first[j]>first[j+1]){
                aux = first[j]
                first[j] = first[j+1]
                first[j+1] = aux
            }
            
        }
    
    }
    return first
}
console.log(merge(first, m, second, n))
*/}