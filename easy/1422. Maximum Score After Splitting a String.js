function countFor(string, char) {
    return string.split("").reduce((prev, cur) => {
        if (cur === char) {
            return prev + 1
        }
        return prev
    }, 0);
}

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let result = 0;

    for (let i = 1; i < s.length; i++) {
        const left = s.substring(0, i)
        const right = s.substring(i, s.length)

        const leftCount  = countFor(left, "0")
        const rightCount = countFor(right, "1")

        result = Math.max(result, rightCount + leftCount)
    }
    return result
};

console.log(maxScore("011101"))