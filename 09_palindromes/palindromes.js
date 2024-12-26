const palindromes = function (str) {
    str = str.toLowerCase();
    const arrStr = str.split("");

    for (let i = arrStr.length - 1; i >= 0; i--) {
        if (arrStr[i] === " " || arrStr[i] === "," || arrStr[i] === "." || arrStr[i] === "!" || arrStr[i] === "?") {
            arrStr.splice(i, 1);
        };
    }

    const arrStrReversed = arrStr.slice().reverse();
    return (arrStr.join("") === arrStrReversed.join("")) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
