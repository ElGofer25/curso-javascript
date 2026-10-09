// Contador: cuenta cuántas veces ocurre algo; aumenta una cantidad fija.
// Ejemplo: contador++ o contador += 2.
// Acumulador: suma valores que pueden ser diferentes en cada paso.
// Ejemplo: total += precio.

let contador = 0;
let acumulador = 0;

for (const numero of [10, 20, 30]) {
  contador++; // Cuenta un número más.
  acumulador += numero; // Suma el valor del número.
}

console.log(contador); // 3
console.log(acumulador); // 60
