//In this function we need to check for the types in an array and check if all elements have the same type

const checkArr = function (arr) {
    //We obviously loop thru the array
    for (let i = 0; i < arr.length; i++) {
        //We save the types of the current indexed elements in their own variable for readability
        let type = typeof(arr[i])
        let newType = typeof(arr[i + 1])

        //If the current index is equal to the array length minus 1, we return true, since it will only reach that point if every element before was checked already and we did not find a non correspopnding type yet. So thats basically the last operation of the function.
        if (i === arr.length-1) {
            return true
        }
        //If the type of the current indexed element is the same as the next one, we just continue with the next element.
        if (type === newType) {
            continue
        //If the both checked types are not the same we return false.
        } else {
            return false
        }
    }
}

console.log(checkArr(["Hello","Hello","Lulatsch"]))