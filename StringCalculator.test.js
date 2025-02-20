const StringCalculator = require("./StringCalculator");

function test(actual, expected, description) {
  if (actual === expected) {
    console.log(`PASS: ${description}`);
  } else {
    console.error(
      `FAIL: ${description} | Expected: ${expected}, Got: ${actual}`
    );
  }
}

function testException(fn, expectedMessage, description) {
  try {
    fn();
    console.error(
      `FAIL: ${description} | Expected an exception but none was thrown`
    );
  } catch (error) {
    if (error.message === expectedMessage) {
      console.log(`PASS: ${description}`);
    } else {
      console.error(
        `FAIL: ${description} | Expected: '${expectedMessage}', Got: '${error.message}'`
      );
    }
  }
}

// Run Tests
const calculator = new StringCalculator();

test(calculator.add(""), 0, "Returns 0 for an empty string");
test(
  calculator.add("1"),
  1,
  "Returns the number itself when given a single number"
);
test(calculator.add("1,5"), 6, "Returns the sum of two numbers");
test(calculator.add("1\n2,3"), 6, "Handles new lines between numbers");
test(calculator.add("//;\n1;2"), 3, "Supports different delimiters");

testException(
  () => calculator.add("-1,2,-3"),
  "negative numbers not allowed -1,-3",
  "Throws error for negative numbers"
);
