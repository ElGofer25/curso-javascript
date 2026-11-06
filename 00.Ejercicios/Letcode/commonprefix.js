{/*
14. Longest Common Prefix
Easy
Topics
premium lock icon
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.    
    
*/}
function longestCommonPrefix(strs){
    let myMap = new Map()
    for(let i = 0; i<strs.length; i++){
        for(let j = 0; j<strs[i].length; j++){
            if(myMap.has(i[j])){
                myMap.set(i[j]) += 1 
            } else {
                myMap.set(i[j], 1)
            }
        }
    }

    return myMap
}
myVar = longestCommonPrefix(strs = ["flower","flow","flight"]
)
console.log(myVar)