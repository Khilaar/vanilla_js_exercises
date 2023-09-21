
//This function should take in a string of binary numbers and transform it to english
const unBinarify = function (input) {
    //We split up the binary numbers and add them to binaries as an array
    const binaries = input.split(" ");
    let utf16 = []
    //We loop thru the binaries array which we created
    for (let i = 0; i < binaries.length; i++) {
        //We push the binary numbers to the new array utf16 but first we use parseInt(x,2) to transform it to decimal numbers
        utf16.push(parseInt(binaries[i], 2))
    }
    //As a last step we transform the new array utf16 to a string but first we transform the numbers to letter with (UTF16). Dont forget to spread the elements from the array to create a string
    return String.fromCharCode(...utf16)
    
}

console.log(unBinarify("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))