const add = function(num1, num2) {
  const add = num1 + num2;
  return add;
};

const subtract = function(num1, num2) {
  const subtract = num1 - num2;
  return subtract;
};

const sum = function(arr) {
  const reduce = arr.reduce((partialSum, a) => partialSum + a, 0);
  return reduce;
};

const multiply = function(arr) {
  const multi = arr.reduce((a, b) => a * b);
  return multi;
};

const power = function(num, pwr) {
	const powerTo = Math.pow(num, pwr);
  return powerTo;
};

const factorial = function(n) {
	if(n === 0) return 1;
  let product = 1;
  for(let i = n; i > 0; i--){
    product *= i;
  }
  return product;
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
