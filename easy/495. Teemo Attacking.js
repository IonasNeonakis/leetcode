/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let total = duration;

    for (let i = 0; i < timeSeries.length - 1; i++) {
        const diff = timeSeries[i + 1] - timeSeries[i]
        if (diff >= duration){
            total+= duration
        }else {
            total+= diff
        }

    }

    return total
};

console.log(findPoisonedDuration([1,4], 2))
console.log(findPoisonedDuration([1,2], 2))
console.log(findPoisonedDuration([1], 2))