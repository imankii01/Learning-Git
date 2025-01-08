
// filepath: /Users/ankit/development/simple-git/repo/Learning-Git/dummy-2025-01-08T16-30-00-331Z.js
function subtract(a, b) {
      return a - b;
    }

function multiply(a, b) {
      return a * b;
    }

function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }

module.exports = { helloWorld, add, subtract, multiply, divide };
