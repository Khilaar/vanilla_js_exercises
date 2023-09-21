const catAndMouse = function (str) {
    for (let i = 0; i < str.length; i += 3) {
        if (str[i] === "C") {
            if (str[i + 3] === "m" || str[i + 2] === "m" || str[i + 1] === "m") {
                console.log("You catched the mouse")
                return true
            } else {
                console.log("You missed the mouse")
                return false
            }
        }
    }
}

catAndMouse(".........C.m")