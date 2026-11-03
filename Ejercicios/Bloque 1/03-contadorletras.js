//=====   PRIMER INTENTO  ====


{/*

Escribe un ciclo for que:
1. Recorra todos los caracteres de s.
2. En cada iteración, guarde el carácter actual en una variable llamada letraActual.
3. Utilice contarLetra() para contar las apariciones de letraActual en s.
4. Repita el conteo de esa misma letra en t.
5. Imprima ambas cantidades con console.log().
Por ahora no escribas ningún if, return ni una función nueva. Solamente queremos recorrer y contar.
El resultado esperado para "aab" y "aba" es:

function contarLetra(palabra, letra){
    let contador = 0;

    for (let i = 0; i < palabra.length; i++){
        if(palabra[i] === letra){
            contador ++;
        }
    }
    return contador;
}

const s = "ab";
const t = "aba";
let letra = null;

for(let i = 0; i < s.length; i++){
    letra = s[i];

    let cantidadS = contarLetra(s, letra)
    let cantidadT = contarLetra(t, letra)
    
    console.log(cantidadS)
    console.log(cantidadT)
    console.log(letra)

    if(cantidadS != cantidadT){
        console.log('Diferencia encontrada')
    }
}
*/}



// Segundo intento

{/*
Construir isAnagram() con retorno booleano
Ahora vamos a incorporar lo que construiste dentro de una función.
Objetivo: que isAnagram(s, t) devuelva un booleano, en lugar de imprimir mensajes.
Tu función contarLetra(palabra, letra) permanece exactamente igual y se declara fuera de isAnagram().
Instrucciones precisas
1. Declara una función llamada isAnagram que reciba s y t.
2. Al comenzar, comprueba si ambas cadenas tienen longitudes diferentes. Si las tienen, devuelve false.
3. Dentro de la función, utiliza tu ciclo for para recorrer los caracteres de s.
4. Para cada carácter, utiliza contarLetra() para obtener cantidadS y cantidadT, igual que en tu último ejercicio.
5. Si cantidadS y cantidadT son diferentes, devuelve false inmediatamente.
6. Si terminas de recorrer toda la cadena sin encontrar diferencias, devuelve true.
No es necesario optimizar ni utilizar Map. Puedes reutilizar tu código anterior.
    
function contarLetra(palabra, letra){
    let contador = 0;
    
    for(let i = 0; i < palabra.length; i++){
        if(letra === palabra[i]){
            contador ++
        }
    }
    return contador;
}

const s = 'aab';
const t = 'aba';
let letra = null;

function isAnagram(s, t){
    if(s.length != t.length){
        return false
    }
    for(let j = 0; j < s.length; j++){
        let letra = s[j]
        let cantidadS = contarLetra(s, letra)
        let cantidadT = contarLetra(t, letra)


        if(cantidadS != cantidadT){
            return false
        }
    }
    return true
}

console.log(isAnagram(s, t));
*/}

