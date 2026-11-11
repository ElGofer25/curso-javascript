/*
ETAPA 1 · FUNCIONES
declaración · flecha · parámetros · return · ámbito · closures · callbacks · mutar vs copiar

IDEA CLAVE
  Una función agrupa código reutilizable: recibe parámetros y DEVUELVE un resultado con
  return. En algoritmos, la regla de oro es devolver el resultado (no imprimirlo) y
  decidir explícitamente si la función modifica su entrada o no.

ÍNDICE
  1. Declaración y llamada       6. Ámbito (scope)
  2. return                      7. Closures
  3. Funciones flecha            8. Callbacks
  4. Parámetros                  9. Mutar vs no mutar la entrada
  5. Funciones como valores     10. Patrones
*/

//! ── 1. Declaración y llamada ──
{
    function sumar(a, b) {
        return a + b
    }
    console.log(sumar(2, 3))           // Resultado: 5
}
// Las declaraciones con `function` se "elevan" (hoisting): se pueden llamar antes de
// escribirlas. Las const/let con función flecha NO.

//! ── 2. return ──
//   return sale de la función de inmediato; lo que siga no se ejecuta.
//   Sin return (o `return;`) la función devuelve undefined.
{
    function sinReturn(x) { x * 2 }
    function conReturn(x) { return x * 2 }
    console.log(sinReturn(4), conReturn(4))    // Resultado: undefined 8
}
// Errores clásicos: console.log(...) en lugar de return · poner el return dentro de un
// bucle y salir en la primera vuelta · olvidar el return final.
{
    function primerPar(arr) {
        for (const n of arr) {
            if (n % 2 === 0) return n          // sale al encontrarlo
        }
        return null                            // si el bucle termina, no hubo ninguno
    }
    console.log(primerPar([3, 5, 6, 8]), primerPar([1, 3]))   // Resultado: 6 null
}
// Trampa: dentro de forEach/map el `return` solo termina ESA vuelta, no la función externa.
{
    function primerParMal(arr) {
        arr.forEach((n) => {
            if (n % 2 === 0) return n     // sale del callback; el resultado se pierde
        })
        return null                       // siempre llega aquí
    }
    console.log(primerParMal([3, 6]))     // Resultado: null   (con for...of daría 6)
}
// Una función devuelve UN valor. Para varios, devuelve un array u objeto:
{
    const minMax = (arr) => [Math.min(...arr), Math.max(...arr)]
    const [min, max] = minMax([4, 1, 9])
    console.log(min, max)                      // Resultado: 1 9
}

//! ── 3. Funciones flecha ──
{
    const doble = (x) => x * 2                 // una expresión: return implícito
    const suma = (a, b) => a + b
    const saludo = () => 'hola'
    const bloque = (x) => {                    // con llaves: return explícito
        const r = x + 1
        return r
    }
    console.log(doble(4), suma(1, 2), saludo(), bloque(1))   // Resultado: 8 3 hola 2
    const crearObjeto = (n) => ({ n })         // devolver un objeto: paréntesis alrededor de { }
    console.log(crearObjeto(1))                // Resultado: { n: 1 }
}

//! ── 4. Parámetros ──
{
    // Valor por defecto: se usa si el argumento es undefined
    function potencia(base, exp = 2) { return base ** exp }
    console.log(potencia(3), potencia(3, 3))   // Resultado: 9 27

    // Rest (...): reúne los argumentos sobrantes en un ARRAY
    function sumarTodos(...nums) {
        let total = 0
        for (const n of nums) total += n
        return total
    }
    console.log(sumarTodos(1, 2, 3), sumarTodos())   // Resultado: 6 0
}
// JavaScript no valida la cantidad de argumentos: los que faltan valen undefined y los
// que sobran se ignoran. Valida tú los casos inválidos al inicio (ver 03-condicionales.js).
{
    function f(a, b) { return [a, b] }
    console.log(f(1))                          // Resultado: [ 1, undefined ]
    console.log(f(1, 2, 3))                    // Resultado: [ 1, 2 ]
}

//! ── 5. Funciones como valores ──
// Una función es un valor: se guarda en variables, se pasa como argumento y se devuelve.
{
    const operaciones = {
        sumar: (a, b) => a + b,
        restar: (a, b) => a - b,
    }
    console.log(operaciones.restar(5, 2))      // Resultado: 3
}

//! ── 6. Ámbito (scope) ──
// Una variable existe solo dentro del bloque/función donde se declaró. Una función ve las
// variables de su alrededor (hacia afuera), pero el exterior no ve las de dentro.
{
    const exterior = 'afuera'
    function f() {
        const local = 'dentro'
        return exterior + ' ' + local
    }
    console.log(f())                           // Resultado: afuera dentro
    // console.log(local)                      // ReferenceError: local is not defined
}
// Los parámetros son variables locales: reasignarlos no afecta a la variable de fuera
// (pero modificar el CONTENIDO de un array u objeto recibido sí; sección 9).
{
    function cambia(x) { x = 99 }
    let n = 1
    cambia(n)
    console.log(n)                             // Resultado: 1
}

//! ── 7. Closures ──
// Una función "recuerda" las variables del lugar donde fue creada, aunque ese lugar
// ya haya terminado. Sirve para tener estado privado.
{
    function crearContador() {
        let cuenta = 0
        return () => ++cuenta                  // recuerda `cuenta`
    }
    const c1 = crearContador()
    const c2 = crearContador()
    console.log(c1(), c1(), c2())              // Resultado: 1 2 1   (cada contador tiene su propia cuenta)
}

//! ── 8. Callbacks ──
// Un callback es una función que se pasa a otra para que esta la llame.
{
    function repetir(veces, accion) {
        for (let i = 0; i < veces; i++) accion(i)
    }
    repetir(3, (i) => console.log('vuelta', i))   // Resultado: vuelta 0 · vuelta 1 · vuelta 2

    console.log([3, 1, 2].map((x) => x * 10))     // Resultado: [ 30, 10, 20 ]   (map, filter, sort… reciben callbacks)
}
// Pasa la función SIN paréntesis: accion(f) la entrega; accion(f()) entrega su resultado.

//! ── 9. Mutar vs no mutar la entrada ──
// Arrays y objetos llegan por referencia: modificar su contenido dentro de la función
// lo modifica también fuera. Decide cuál de los dos comportamientos quieres.
{
    function agregarMutando(arr, x) {
        arr.push(x)                            // cambia el original
        return arr
    }
    function agregarSinMutar(arr, x) {
        return [...arr, x]                     // devuelve uno nuevo
    }
    const original = [1, 2]
    agregarSinMutar(original, 3)
    console.log(original)                      // Resultado: [ 1, 2 ]
    agregarMutando(original, 3)
    console.log(original)                      // Resultado: [ 1, 2, 3 ]
}
// En ejercicios y entrevistas: si no se dice lo contrario, NO mutes la entrada.
// Si el enunciado pide hacerlo "in place", entonces sí (y suele pedir O(1) de espacio extra).

//! ── 10. Patrones ──
//   Casos inválidos o vacíos primero, con return temprano
//   Una función, una tarea: dale un nombre que diga qué devuelve
//   Devuelve el resultado; imprime solo fuera de la función
//   Parámetro opcional → valor por defecto · cantidad variable → ...rest
//   Si la función necesita cortar un recorrido → for...of + return (no forEach)
//   Copia antes de modificar: [...arr] · {...obj}
