{/*
13. Roman to Integer
Easy
Topics
premium lock icon
Companies
Hint
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.    
    
*/}

// {const romantoint = function(s) {
//     const myNumbers = new Map([
//         ['I', 1],
//         ['V', 5],
//         ['X', 10],
//         ['L', 50],
//         ['C', 100],
//         ['D', 500],
//         ['M', 1000]
//     ]);

//     let total = 0;

//     for (let i = 0; i < s.length; i++) {
//         const actual = myNumbers.get(s[i]);
//         const siguiente = myNumbers.get(s[i + 1]) ?? 0;

//         if (actual < siguiente) {
//             total -= actual;
//         } else {
//             total += actual;
//         }
//     }

//     return total;
// };

// // console.log(romantoint('XIV'));
// } // 14

{function romanNumber(s){
    const romanNumbers = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ])
    
    let total = 0;
    for(let i = 0; i<s.length; i++){
        
        const actual = romanNumbers.get(s[i]);
        const siguiente = romanNumbers.get(s[i+1] ?? 0);
        
        if(actual < siguiente ){
            total -= actual;
        } else {
            total += actual;
        }
    }
    return total
}
console.log(romanNumber('XIV'))
}