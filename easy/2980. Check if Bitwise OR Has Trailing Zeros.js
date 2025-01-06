/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1 ; j < nums.length; j++) {
            if ((nums[i] | nums[j]) % 2 === 0)
                return true
        }
    }
    return false
};


var hasTrailingZeros2 = function(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            count++;
        }
    }
    return count>1;
};

console.log(hasTrailingZeros([1,2,3,4,5]))
console.log(hasTrailingZeros([2,4,8,16]))
console.log(hasTrailingZeros([1,3,5,7,9]))