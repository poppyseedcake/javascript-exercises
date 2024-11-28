const reverseString = function(string) {
    let splited = string.split("");
    let reversed = "";

    while (splited.length > 0) {
        reversed += splited.pop();
    }
    return reversed;
};


// Do not edit below this line
module.exports = reverseString;
