const calculator = require('../src/calculator');

describe('Test add', ()=>{
  test('test 1 plus 1 should be 2', () => {
    expect(calculator.add('1, 1')).toBe(2);
  });

  test('test 1 plus -1 should be 0', () => {
    expect(calculator.add('1, -1')).toBe(0);
  });

  test('test 1 plus -2 should be -1', () => {
    expect(calculator.add('1, -2')).toBe(-1);
  });
});

describe('Test subtract', ()=>{
  test('test 2 subtract 1 should be 1', () => {
    expect(calculator.subtract('2, 1')).toBe(1);
  });

  test('test 1 subtract 2 should be -1', () => {
    expect(calculator.subtract('1, 2')).toBe(-1);
  });
});

describe('Test multiply', ()=>{
  test('test 2 multiply 2 should be 4', () => {
    expect(calculator.multiply('2, 2')).toBe(4);
  });

  test('test 2 multiply -1 should be -2', () => {
    expect(calculator.multiply('2, -1')).toBe(-2);
  });

  test('test 2 multiply 0 should be 0', () => {
    expect(calculator.multiply('2, 0')).toBe(0);
  });
});

describe('Test divide', ()=>{
  test('test 2 divide 2 should be 1', () => {
    expect(calculator.divide('2, 2')).toBe(1);
  });

  test('test 4 divide -2 should be -2', () => {
    expect(calculator.divide('4, -2')).toBe(-2);
  });

  test('test 0 divide 2 should be 0', () => {
    expect(calculator.divide('0, 2')).toBe(0);
  });

  test('test 2 divide 0 should be infinity', () => {
    expect(calculator.divide('2, 0')).toBe(Infinity);
  });

  test('test -2 divide 0 should be negative infinity', () => {
    expect(calculator.divide('-2, 0')).toBe(-Infinity);
  });

  test('test 0 divide 0 should be NaN', () => {
    expect(calculator.divide('0, 0')).toBe(NaN);
  });
});

describe('Test maximum', ()=>{
  test('test 2, 4 maximum should be 4', () => {
    expect(calculator.maximum('2, 4')).toBe(4);
  });

  test('test 2, 0 maximum should be 2', () => {
    expect(calculator.maximum('2, 0')).toBe(2);
  });

  test('test 2, -2 maximum should be 2', () => {
    expect(calculator.maximum('2, -2')).toBe(2);
  });

  test('test -1, -2 maximum should be -1', () => {
    expect(calculator.maximum('-1, -2')).toBe(-1);
  });
});

describe('Test minimum', ()=>{
  test('test 2, 4 minimum should be 2', () => {
    expect(calculator.minimum('2, 4')).toBe(2);
  });

  test('test 2, 0 minimum should be 0', () => {
    expect(calculator.minimum('2, 0')).toBe(0);
  });

  test('test 2, -2 minimum should be 2', () => {
    expect(calculator.minimum('2, -2')).toBe(-2);
  });

  test('test -1, -2 minimum should be -2', () => {
    expect(calculator.minimum('-1, -2')).toBe(-2);
  });
});
