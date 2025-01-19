
function sumArray(a) {
    return a.reduce((prev, curr) => prev + curr, 0)
}

function splitArray(array, middle){
    const left = []
    const right = []

    for (let i = 0; i < array.length; i++) {
        if (i < middle){
            left[i] = array[i]
        }else {
            right[i-middle] = array[i]
        }
    }
    return [left, right]

}

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function (nums) {
    let total = 0

    const totalSum = sumArray(nums)

    for (let i = 1; i < nums.length; i++) {
        const [temp , right] = splitArray(nums, i)

        for (let j = 1; j < i; j++) {
            const left = temp.slice(0, j)

            if (isGoodArray(left, right, totalSum)){
                total++
            }
        }
    }
    return total % (10e9 + 7)
};



function isGoodArray(left, right, totalSum) {
    const sumLeft = sumArray(left)
    const sumRight = sumArray(right)
    const sumMid = totalSum - sumLeft - sumRight

    return (sumLeft <= sumMid && sumMid <= sumRight)
}
