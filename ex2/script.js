//In this function we just want to check if the given argument is an array
//There is nothing more to explain, simple and efficient

const isPara = function (arg) {
    if (Array.isArray(arg)) {
        return true
    } else {
        return false
    }
}
console.log([1,2,3,4])