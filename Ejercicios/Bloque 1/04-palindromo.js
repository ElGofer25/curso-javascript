{/*
Valid Palindrome
LeetCode 125
Dificultad Easy · Strings

2. Enunciado
Desarrolla una función llamada isPalindrome(s) que reciba una cadena de texto y devuelva:
- true si el texto se lee igual de izquierda a derecha que de derecha a izquierda.
- false en caso contrario.
Reglas específicas:
1. Ignora las diferencias entre mayúsculas y minúsculas.
2. Ignora espacios, comas, puntos y otros caracteres que no sean letras o números.
3. El resultado debe ser un booleano.
4. Puedes utilizar cualquier método estándar de JavaScript. No exigiremos optimización.
5. Una cadena vacía se considera un palíndromo.
    
const palabra = 'RaceCar';
const validate = palabra.toLowerCase();

function isPalindrome(validate){
    for(let i = 0; i < validate.length; i++){
        let j = validate.length-1-i;
            if(validate[i] !== validate[j]){
                return false
            }
    }
    return true
}

console.log(isPalindrome(validate))
*/}
