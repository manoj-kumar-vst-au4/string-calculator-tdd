const StringCalculator = require('../src/stringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  test('should return the number itself when only one number is provided', () => {
    expect(calculator.add('1')).toBe(1);
    expect(calculator.add('5')).toBe(5);
  });
  test('should return sum of two comma-separated numbers', () => {
    expect(calculator.add('1,2')).toBe(3);
    expect(calculator.add('10,20')).toBe(30);
  });

  test('should return sum of multiple comma-separated numbers', () => {
    expect(calculator.add('1,2,3,4,5')).toBe(15);
  });
  
});