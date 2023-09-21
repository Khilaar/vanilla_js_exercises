//In this function we want to check if the given argument is a string
//Nothing more to explain, simple and efficient

const isString = function (arg) {
    if (typeof(arg) === "string") {
        return true
    } else {
        return false
    }
}

isString("Argument")