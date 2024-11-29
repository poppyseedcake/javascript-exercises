const removeFromArray = function(arr, ...toRemove) {
    for (let i = 1; i < arguments.length; i++) {
        let position;
        do {
            position = arr.indexOf(arguments[i]);
            if (position != -1) arr.splice(position, 1);
        } while (position != -1);
    }
    console.log(arr);
    return arr;
};
removeFromArray([2, 3, 4, 4], 2, 4);
// Do not edit below this line
module.exports = removeFromArray;
