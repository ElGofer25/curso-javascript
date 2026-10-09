/*
Ciclos anidados (nested loops): un ciclo dentro de otro ciclo.

Idea principal:
Por cada vuelta del ciclo externo, el ciclo interno ejecuta todas sus vueltas.
Cuando el interno termina, el externo avanza y el interno comienza de nuevo.

Sirven para recorrer filas y columnas, combinar elementos de dos arrays
o trabajar con arrays que contienen otros arrays (matrices).
*/

// Ejemplo 1: dos filas con tres columnas cada una.
// for (let fila = 1; fila <= 2; fila++) {
//   for (let columna = 1; columna <= 3; columna++) {
//     console.log(`Fila ${fila}, columna ${columna}`);
//   }
// }

/*
Salida, en este orden:
Fila 1, columna 1
Fila 1, columna 2
Fila 1, columna 3
Fila 2, columna 1
Fila 2, columna 2
Fila 2, columna 3

Paso a paso:
1. fila vale 1; columna recorre 1, 2 y 3.
2. Termina el ciclo interno y fila aumenta a 2.
3. Se ejecuta otra vez let columna = 1; columna recorre 1, 2 y 3.
4. fila aumenta a 3; como 3 <= 2 es falso, termina el ciclo externo.

fila++ y columna++ aumentan sus respectivas variables en 1.
El console.log se ejecuta 2 × 3 = 6 veces.
*/

// Ejemplo 2: recorrer una matriz (un array de arrays).
// const matriz = [
//   [10, 20, 30],
//   [40, 50, 60],
// ];

// for (const fila of matriz) {
//   // fila contiene un array completo: primero [10, 20, 30], luego [40, 50, 60].
//   for (const numero of fila) {
//     // numero contiene cada valor de la fila actual.
//     console.log(numero);
//   }
// }
// // Salida: 10, 20, 30, 40, 50 y 60, cada uno en una línea.

/*
Detalles para recordar:
- Usa nombres distintos para las variables del ciclo externo e interno.
- Las llaves indican qué instrucciones pertenecen a cada ciclo.
- Un break dentro del ciclo interno termina solamente ese ciclo interno.
- Un continue dentro del ciclo interno pasa a su siguiente vuelta.
- Si el externo da n vueltas y el interno siempre da m vueltas,
  el cuerpo interno se ejecuta n × m veces.
  Si ambos recorren n elementos, serán n² ejecuciones: complejidad O(n²).
  No todos los ciclos anidados son O(n²); depende de cuántas vueltas den.
*/



// Ejercicios
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
Tu tarea
Escribe únicamente un if dentro del ciclo interno que:
1. Sume los valores almacenados en las posiciones i y j.
2. Compruebe si la suma es igual a target.
3. Si la condición es verdadera, imprima ambos índices utilizando console.log(i, j).
Todavía no agregues la función ni return. Primero vamos a comprobar la lógica.    
    
*/}

const nums = [4, 2, 8, 5];
const target = 9;

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if((nums[i]+nums[j]) === target){
            console.log(i, j)
        }
    }
}
