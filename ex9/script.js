//In this function should return the value of b raised to the power n
const exponentation = function (b,n) {
    //If the exponent is 0 we return 1, cause anything to the power of 0 is 1
    if (n === 0) {
        return 1
        //If the exponent is 1 we return b, cause everything to the power of 1 is itself
    } else if (n === 1) {
        return b
    } else {
        debugger
        return b * exponentation(b,n -1)
    }

}

console.log(exponentation(2,3))