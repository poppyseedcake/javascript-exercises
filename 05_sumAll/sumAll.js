const sumAll = function(a, b) {
    if (a < 0 || b < 0 ) return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b) ) return "ERROR";

    // if (!(a instanceof Number) || !(b instanceof Number)) return "ERROR";
    
    let sum = 0;


    if (a > b) {
        let tempA = a;
        a = b;
        b = tempA;
    }

    for (a; a <= b; a++) {
        sum += a;
    }
    return sum;

};
// Do not edit below this line
module.exports = sumAll;
