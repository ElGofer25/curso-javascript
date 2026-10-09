/*
Las variables nos permiten almacenar valores en memoria
En JS tenemos tres formas de definir una variable usando una de tres palabras reservadas: let, var y const
Usamos el lowerCamelCase, es lower porque la primera letra es minúscula.

    - var: permite cambiar el valor y tiene alcance de función.
    - let: permite cambiar el valor y solo existe dentro de su bloque {}.
    - const: solo existe dentro de su bloque y no permite reasignar el valor, aunque sí modificar el contenido de objetos o arrays.

    Usa const por defecto y let si el valor cambiará. Evita var en código nuevo.
*/

// Var
var helloWorld = 'Hello, world'
console.log(helloWorld)

helloWorld = 'Hola de nuevo, Diego' // <--- Reasignamos el valor
console.log(helloWorld)


// let

let myVar = 'New memory space'
console.log(myVar)


// const

const myName = 'Diego'
console.log(myName)