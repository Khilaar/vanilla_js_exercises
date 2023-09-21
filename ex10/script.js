//This function should translate every given string into pig latin

const pigLatin = function (str) {
    const vowels = "aeiou";
    //Here we will save all consonants, that before the first vowel
    let consos = "";
    //Here we save the new string wich should be returned at the end
    let newString = "";
    //Loop thru the given string 
    for (let i = 0; i < str.length; i++) {
        //Here we check if the actually indexed element in the given string is a vowel
        if (vowels.includes(str[i])) {
            //If it is AND there was already a consonant before then we take the current element (vowel) put it at the beginning (slice from the vowel to end of the string), then we put the consonants at the end of the sliced part and then we add an "ay"
            if (consos.length > 0) {
                newString = str.slice(i) + consos + "ay";
                //this else only applies, if the first element already was a vowel
            } else {
                newString = str + "way"
            }
            //We need to break since we already know the solution and dont need to check the other letters, we found the first vowel and placed it at the right place
            break;
        // This is how we saved the consonants in the consos variable 
        } else {
            consos += str[i]
        }
    }
    //Return the solution
    return newString;
}

console.log(pigLatin("hello"))