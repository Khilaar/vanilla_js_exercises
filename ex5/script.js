//In this function we want to take a number as parameter and convert it to an array and reverse it (Sounds simple)
//Revertebra sounds like magic spell straight out of harry potter
const revertebra = function (num) {
    let str = num.toString()
    let arr = str.split("").reverse()
    return arr
}

console.log(revertebra(123456))