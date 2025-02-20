# String Calculator TDD Kata

This project implements a simple **String Calculator** following **Test-Driven Development (TDD)**.  
It includes a separate test file for manual testing without using any external libraries.

---

## **Problem Statement**
The `add()` method takes a string of comma-separated numbers and returns their sum.  
It supports:
1. **Empty String** → Returns `0`
2. **Single Number** → Returns the number itself
3. **Two Numbers** → Returns their sum
4. **Multiple Numbers** → Returns sum of all numbers
5. **Newline (`\n`) as a delimiter** → `"1\n2,3"` → Returns `6`
6. **Custom Delimiters** → `"//;\n1;2"` → Returns `3`
7. **Negative Numbers** → Throws an error: `"negative numbers not allowed -1,-3"`

---

## **Project Structure**
├── StringCalculator.js        # Main implementation
├── StringCalculator.test.js   # Test cases
├── README.md                  # Project documentation

---

