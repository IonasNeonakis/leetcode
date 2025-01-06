/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let r = 0
    return nums.map((bit) => {
        r = (r * 2) + bit

        r %= 5

        return r ===0
    })
};






