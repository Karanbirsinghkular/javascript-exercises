const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
	let total = 0;
  if (arr.length == 0) {
    return 0;
  }
  for (let each of arr){
    total += each;
  }
  return total;
};

const multiply = function(arr) {
	let total = 1;
  if (arr.length == 0) {
    return 0;
  }
  for (let each of arr){
    total *= each;
  }
  return total;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	return x == 0 ? 1: x * factorial(x - 1);
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
