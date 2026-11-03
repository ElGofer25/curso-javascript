const nums = [4, -1, 2, 1];

function maxSubArray(nums) {
    let mayorSuma = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let suma = 0;

        for (let j = i; j < nums.length; j++) {
            suma += nums[j]
            if (suma > mayorSuma) {
                mayorSuma = suma
            }
        }
    }
    return mayorSuma
}

console.log(maxSubArray(nums))