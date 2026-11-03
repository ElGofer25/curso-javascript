{/*
Variable de seguimiento (tracking variable): guarda un dato que
actualizamos mientras recorremos valores, como el mayor encontrado.
No es un tipo especial de variable: el nombre describe su función.
*/}


{/*     === Explicación ===
const numero of numeros significa: por cada elemento de numeros, guárdalo en numero durante esa vuelta.
const numeros = [12, 5, 20, 8];

for (const numero of numeros) {
  console.log(numero);
}
- numeros: el array que recorremos.
- numero: el elemento de la vuelta actual: primero 12, luego 5, después 20 y finalmente 8.
- of: indica que recorremos los valores.
- const: en cada vuelta se crea una nueva variable que no podemos reasignar.

*/}
const numeros = [12, 5, 20, 8];
let mayor = numeros[0]; // Comenzamos con el primer valor.

for (const numero of numeros) {
  if (numero > mayor) {
    mayor = numero; // Actualizamos al encontrar uno mayor.
  }
}

console.log(mayor); // 20
{/*
¿Por qué const y no let?
Porque en ese ejemplo no necesitas cambiar numero dentro de la vuelta. const deja clara esa intención.
Cada vuelta crea una variable nueva, así que puede contener 12, luego 5, etc., sin reasignar la anterior.

    let también funciona; úsalo si necesitas reasignarla:
    for (let numero of numeros) {
    numero = numero * 2;
    console.log(numero);
    }
Eso cambia la variable numero, pero no modifica el array.
*/}