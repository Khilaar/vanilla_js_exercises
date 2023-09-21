//This function should return a new String which combines both given strings, sorts them alphabetically and it should remove any duplicate elements.
const remDup = function (str1, str2) {
    //Add both strings and make them lowercase
    let bothStrings = (str1 + str2).toLowerCase()
    //This is the array we will return at the end
    let resultArray = [];
    //Here we loop the combined strings
    for (let i = 0; i < bothStrings.length; i++) {
        //We check if the current indexed element is already included in the result array
        if (!(resultArray.includes(bothStrings[i]))) {
            //If its not we push the current indexed element to the array we want to return
            resultArray.push(bothStrings[i])
        }
    }
    //Now we sort the new array and transform it to a string. In between every element there is a ",", we replace it with an empty string to get rid of it
    resultArray = resultArray.sort().toString().replaceAll(",", "")
    return resultArray
}

console.log(remDup("Hello", "World"))