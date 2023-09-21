//This function should take an object as argument on which we can see, how much everyone paid at the restaurant.
const splitBill = function (bill) {
    //In this "total" variable we will store the total spent amount
    let total = 0;
    //We use this array to check the number of people that where at the restaurant togheter
    let peeps = [];

    //Here we loop thru the given object
    for (const [key, value] of Object.entries(bill)) {
        //We push the name of the person, which is the key in the given object. We just do that to store the amount of people involved
        peeps.push(key);
        //add the price the current person paid at the restaurant to the total bill value
        total += value; 
    }
    
    //Store the number of involved people inside of the "ppp"-variable
    let ppp = total / (peeps.length)
    //In the "debts"-variable we will create the new key-value pairs for the amount that people owe eachother (At least we can see who spent too much or not enough and how much)
    let debts = {}

    //Here now we assign the correct key value pair to eachother and add them to the object "depts"
    for (const [key, value] of Object.entries(bill)) {
        debts[key] = (ppp - value)
    }
    return debts  
}


//Argument
const group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

//function call
splitBill(group)