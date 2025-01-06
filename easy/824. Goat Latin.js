
const vowels = ['a', 'e', 'i', 'o','u', 'A', 'E', 'I', 'O','U']

/**
 * @return {string}
 * @param {string} word
 * @param {number} numberOfAs
 */

function toGoat(word, numberOfAs){

    const allAs = "a".repeat(numberOfAs)

    let res

    if (vowels.includes(word[0])){
        res = word
    }else {
        res = word.slice(1) + word[0]
    }
    return res + "ma" +  allAs


}

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const splittedWords = sentence.split(" ")

    const goated = splittedWords.map((word, index) => toGoat(word, index+1))

    return goated.join(" ")

};

