//In this function I want to count how many times the same string appears in a array
let countabra = function (arr) {
    //This is the object we want to return at the end. Here we will store the elements of the given array and the number of times this element exists in the given array.
    let counter = {}

    //The good old for loop to loop thru the given array
    for (let i = 0; i < arr.length; i++) {
        //If the currently indexed element of the given array does not exist inside of the "counter"-object, we create a new key-value pair with the value 1 and the name of the element as the key.
        if (!(arr[i] in counter)) {
            counter[arr[i]] = 1;
            //Else if there is already the element as a key inside of the "counter" - object, we just add 1 to the value of it.
        } else if (arr[i] in counter) {
            counter[arr[i]] += 1;
        }
    }
    //Return it to show dominance
    return counter
}

console.log(countabra(['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']))


