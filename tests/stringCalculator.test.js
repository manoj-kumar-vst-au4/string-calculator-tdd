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
  
  test('should ignore empty values between delimiters', () => {
    expect(calculator.add('1,,2')).toBe(3); // treating empty between commas as 0
  });

  test('should throw an exception when a negative number is provided', () => {
    expect(() => calculator.add('1,-2')).toThrow('negative numbers not allowed: -2');
  });

  test('should list all negative numbers in the exception message', () => {
    expect(() => calculator.add('1,-2,-5,3')).toThrow('negative numbers not allowed: -2, -5');
  });

  test('should handle newlines between numbers along with commas', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
    expect(calculator.add('4\n5\n6')).toBe(15);
  });

});