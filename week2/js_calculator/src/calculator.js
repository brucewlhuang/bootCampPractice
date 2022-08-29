function add(numbers) {
  return numbers
      .split(',')
      .map((x) => parseInt(x))
      .reduce((a, b) => a + b);
}

function subtract(numbers) {
  return numbers
      .split(',')
      .map((x) => parseInt(x))
      .reduce((a, b) => a - b);
}

function multiply(numbers) {
  return numbers
      .split(',')
      .map((x) => parseInt(x))
      .reduce((a, b) => a * b);
}

function divide(numbers) {
  return numbers
      .split(',')
      .map((x) => parseInt(x))
      .reduce((a, b) => a / b);
}

function maximum(numbers) {
  return numbers
      .split(',')
      .map((x) => parseInt(x))
      .reduce((a, b) => a > b ? a : b);
}

function minimum(numbers) {
  return numbers
      .split(',')
      .map((x) => parseInt(x))
      .reduce((a, b) => a > b ? b : a);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  maximum,
  minimum,
};
