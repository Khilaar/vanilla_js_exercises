//This is the last exercise

//The function should return an array of the elements of both arrays we used as arguments, but only the ones, that are in both arrays
const differentialis = function (arr1, arr2) {
    //This is the array we will return
    let newArray = [];
    //loop thru first argument
    for (let i = 0; i < arr1.length; i++) {
        //Loop thru second argument
        for (let j = 0; j < arr2.length; j++) {
            //If both checked elements are same push them to the new Array
            if (arr1[i] === arr2[j]) {
                newArray.push(arr1[i])
            }
        }
    }
    //return that 
    return newArray
}

console.log(differentialis(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
["diorite", "andesite", "grass", "dirt", "dead shrub"]))