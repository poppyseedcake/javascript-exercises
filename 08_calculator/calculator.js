const add = function(a, b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
	return parseInt(a) - parseInt(b);
};

const sum = function(arr) {
	return arr.reduce((sum, item) => {
    return sum += item;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, item) => {
    return sum *= item;
  }, 1);
};

const power = function(a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    // console.log(`i = $[i]`);
    // console.log(arr[0], arr[1]);
    result *= a;
    // console.log({result});
  }
	return result;
};

const factorial = function(number) {
	let factorial = 1;
  
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
