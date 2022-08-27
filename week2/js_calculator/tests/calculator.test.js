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
