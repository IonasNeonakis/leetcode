/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let finalPosition = 0

    for (let i = 0; i < commands.length; i++){
        const command = commands[i];
        if (command === "RIGHT"){
            finalPosition++
        }else if (command === "LEFT"){
            finalPosition--
        }else if (command === "UP") {
            finalPosition-=n
        }else { // DOWN
            finalPosition+=n
        }
    }
    return finalPosition
};


console.log(finalPositionOfSnake(3, ["DOWN","RIGHT","UP"]))
