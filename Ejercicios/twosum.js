{/* 
    
    const nums = [9, 2, 7, 3, 6, 4, 8, 9];
const target = 9;

function twoSum(nums, target){
    let array = [];

    for(let i = 0; i < nums.length; i++){
        
      if (((nums[i] + nums[i+1]) === target) && !(i in array)){
            array.push(i, (i+1))
        }
    }
       
    return array;
}
console.log(twoSum(nums, target));
    */}

const nums = [4, 2, 8, 5];
const target = 9;


function twoSum(nums, target){
    let intervals = [];
      for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if((nums[i]+nums[j]) === target){
                 intervals.push(i,j)
            }
        }
   } 
   return intervals
}
console.log(twoSum(nums, target))