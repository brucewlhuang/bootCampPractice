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

module.exports = {
  add,
  subtract,
  multiply,
};
