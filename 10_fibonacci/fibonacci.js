const fibonacci = function(num) {
    num = +num;
    let prev = 1;
    let curr = 1;
    if (num <= 0) return 0;

    for (let i = 3; i <= num; i++) {
        [prev, curr] = [curr, prev + curr];        
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
