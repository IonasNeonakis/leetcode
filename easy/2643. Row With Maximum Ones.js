/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let numberOfOneOfTheBigestOne = 0
    let indexOfThebiggestOne = 0;

    mat.forEach((row,index) => {

        const count = row.reduce((a,b) => a+b, 0)
        if (count > numberOfOneOfTheBigestOne){
            numberOfOneOfTheBigestOne = count
            indexOfThebiggestOne = index
        }



    })






    return  [indexOfThebiggestOne, numberOfOneOfTheBigestOne]
};