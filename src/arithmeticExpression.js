function solution(a, b, c) {
    return a + b === c || a - b === c || a * b === c || a / b === c;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test arithmeticExpression

// alternative solution
