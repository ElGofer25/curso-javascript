{/*
Recibes un array prices, donde cada elemento representa el precio de una acción en un día determinado.
Debes encontrar la máxima ganancia posible comprando la acción un día y vendiéndola en un día posterior.
La función se llamará maxProfit(prices) y deberá devolver un número.
2. Reglas del problema

1. Puedes comprar una sola vez y vender una sola vez.
2. La venta debe ocurrir después de la compra, nunca antes ni el mismo día.
3. Si no existe ninguna operación rentable, devuelve 0.
4. No debes devolver los índices ni los precios: solamente la ganancia máxima.
5. Puedes utilizar uno o varios ciclos for, condicionales y variables auxiliares.    
*/}
const prices = [7, 1, 5, 3, 6, 4];
function mayorGanancia(prices){
let mayorGanancia = 0;

    for (let i = 0; i < prices.length; i++) {//Dia de compra
        for (let j = i + 1; j < prices.length; j++) {//Dia de venta
            let ganancia = prices[j] - prices[i];
            if (ganancia > mayorGanancia) {
                mayorGanancia = ganancia
            }
        }
    }
    return mayorGanancia
}
console.log(mayorGanancia(prices))


{/*
Instrucciones exactas:
1. Declara una variable mayorGanancia e inicialízala en 0.
2. Utiliza un if para comprobar si gananciaA es mayor que mayorGanancia. Si lo es, actualiza mayorGanancia.
3. Utiliza un segundo if para hacer lo mismo con gananciaB.
4. Al finalizar ambos if, imprime mayorGanancia mediante console.log().
El resultado esperado es 5.
    
const prices = [7, 1, 5, 3, 6, 4];

const gananciaA = prices[2] - prices[1]; // 4
const gananciaB = prices[4] - prices[1]; // 5

let mayorGanancia = 0;
if(gananciaA > mayorGanancia){
    mayorGanancia = gananciaA
}
if(gananciaB > mayorGanancia){
    mayorGanancia = gananciaB
}
console.log(mayorGanancia)
*/}


{/*
Comparar varias ganancias con un for
Ahora aplicaremos la misma lógica a un recorrido.
Imagina que ya compramos la acción en el día 1, cuyo precio es 1.
Queremos calcular cuánto ganaríamos si vendiéramos en cada día posterior y conservar la mayor ganancia.
const prices = [7, 1, 5, 3, 6, 4];
const diaCompra = 1;
let mayorGanancia = 0;
for(let i = diaCompra +1; i <prices.length; i++){
    let ganancia = prices[i]-prices[diaCompra];
    if(ganancia > mayorGanancia){
        mayorGanancia = ganancia
    }
}
console.log(mayorGanancia)
*/}
{/*
Instrucciones precisas
Para este ejercicio, utiliza dos ciclos for anidados:
1. El ciclo externo utilizará i para representar el índice del día de compra. Debe comenzar en 0 y recorrer las posiciones del array.
2. El ciclo interno utilizará j para representar el índice del día de venta. Debe comenzar en i + 1, de manera que la venta siempre sea posterior a la compra.
3. Dentro del ciclo interno, declara ganancia y calcula el precio de venta menos el de compra, accediendo a ambos mediante prices.
4. Si ganancia supera mayorGanancia, actualiza esta última.
5. Después de terminar los dos ciclos, imprime mayorGanancia con console.log().
No declares todavía una función ni utilices return. No es necesario optimizar. 
    
const prices = [7, 1, 5, 3, 6, 4];
let mayorGanancia = 0;
for(let i = 0; i < prices.length; i++){ //Dia de compra
    for(let j= i+1; j<prices.length; j++){ // Dia de venta
        let ganancia = prices[j]-prices[i]; 
        if(ganancia > mayorGanancia ){
            mayorGanancia = ganancia
        }
    }
}
console.log(mayorGanancia)
*/}


