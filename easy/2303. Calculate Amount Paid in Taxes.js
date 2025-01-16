/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let prev = 0
    let total = 0

    let remaining = income
    for(let i = 0; i < brackets.length; i++){
        const [upper, percentage] = brackets[i]
        const valueInRate = upper - prev
        const min = Math.min(remaining, valueInRate)

        const tax = min * (percentage / 100)

        if (min > 0){
            total+= tax;
            remaining-= min
        }
        prev = upper
    }

    return  total
};

console.log(calculateTax([[3,50],[7,10],[12,25]], 10))