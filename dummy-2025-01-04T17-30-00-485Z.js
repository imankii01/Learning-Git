
// filepath: /Users/ankit/development/simple-git/repo/Learning-Git/dummy-2025-01-04T17-30-00-485Z.js
function helloWorld() {
      console.log('Hello, world!');
    }

function add(a, b) {
      return a + b;
    }

function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }

module.exports = { helloWorld, add, subtract, multiply, divide };
