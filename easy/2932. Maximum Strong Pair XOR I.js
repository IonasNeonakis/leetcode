function isStrongPair(x, y) {

    return Math.abs(x - y) <= Math.min(x, y)
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const x = nums[i]
            const y = nums[j]
            if (isStrongPair(x, y)) {
                const xor = x ^ y
                if (xor > res) {
                    res = xor
                }


            }

        }
    }
    return res
};