# String Calculator TDD

This project implements a **String Calculator** using the principles of **Test-Driven Development (TDD)**.

## Features

- Add numbers from a string input.
- Handle an unknown amount of numbers.
- Support custom delimiters.
- Validate input and handle edge cases.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (or your preferred runtime)
- A testing framework like [Jest](https://jestjs.io/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/manoj-kumar-vst-au4/string-calculator-tdd
    cd string-calculator-tdd
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running Tests

Run the test suite to ensure all functionality works as expected:
```bash
npm test
```


## Project Structure

```
string-calculator-tdd/
├── src/            # Source code
├── tests/          # Unit tests
├── README.md       # Project documentation
└── package.json    # Project metadata
```

##  Features Implemented

1. Return 0 for an empty string.
2. Return the number itself if only one number is provided.
3. Return the sum of two or more numbers.
4. Handle newline characters (\n) as delimiters.
5. Support custom delimiters defined in the format:
    //[delimiter]\n[numbers]
6. Throw an exception if negative numbers are provided, listing all negative numbers.

## License

This project is licensed under the [MIT License](LICENSE).