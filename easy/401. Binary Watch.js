function isValidHour(string) {
    return parseInt(string, 2) <= 11

}

function isValidMinute(string) {
    return parseInt(string, 2) <= 59
}

function numberOf1(string) {
    return string.split('').reduce((a,b) => Number(a)+ Number(b), 0)
}


/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    const res = []

    for (let i = 0; i <= 11; i++) {
        for (let j = 0; j <= 59; j++) {

            if (numberOf1(i.toString(2)) + numberOf1(j.toString(2)) === turnedOn) {

                if (isValidHour(i.toString(2)) && isValidMinute(j.toString(2))) {
                    res.push(`${i.toString()}:${j.toString().padStart(2,'0')}`)

                }

            }

        }

    }

    return res


};

//console.log(numberOf1("00001"))
console.log(readBinaryWatch(1))
