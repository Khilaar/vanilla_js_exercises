//This function should find a certain word and replace it with another word. The word that needs to be changed and the new one are both parameters
const searchNreplace = function (str, replace, newWord) {
    let replaceWord = "";
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        //Check if the string is the same from current index until the length of the word we need to replace it with. If it matches it means, that this is the word we need to replace
        if (str.slice(i, i + replace.length) === replace) {
            //We save the slice of letters we were searching for in the variable replaceWord
            replaceWord = str.slice(i, i + replace.length)
            //Then we use the variable we just assigned and replace the word with the new word
            newString = str.replace(replaceWord, newWord)
        }
    }
    return newString
}

console.log(searchNreplace("I live in zurich", "zurich", "tokyo"))

//This was fun