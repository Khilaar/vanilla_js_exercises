//This function should check if the string(first argument) end with the word(second argument)
const ending = function (str, search) {
    //Here we calculate the indexes we need to check and directly add them to the substring function to extract the part of the string we need
    let nono = (str.substring((str.length)-(search.length),str.length))
    
    //Then we check if the extracted string is equal to the argument 
    if (nono === search) {
        return true
    } else {
        return false
    }
}

console.log(ending("Florunurz", "urz"))