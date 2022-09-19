const solution = require('./arithmeticExpression.js');

test('test 1', () => {
    expect(solution(2, 3, 5)).toBe(true);
});

test('test 2', () => {
    expect(solution(8, 2, 4)).toBe(true);
});

test('test 3', () => {
    expect(solution(8, 3, 2)).toBe(false);
});

test('test 4', () => {
    expect(solution(6, 3, 3)).toBe(true);
});

test('test 5', () => {
    expect(solution(18, 2, 9)).toBe(true);
});

test('test 6', () => {
    expect(solution(2, 3, 6)).toBe(true);
});

test('test 7', () => {
    expect(solution(5, 2, 0)).toBe(false);
});

test('test 8', () => {
    expect(solution(10, 2, 2)).toBe(false);
});

test('test 9', () => {
    expect(solution(5, 2, 2)).toBe(false);
});

test('test 10', () => {
    expect(solution(1, 2, 1)).toBe(false);
});

test('test 11', () => {
    expect(solution(1, 2, 2)).toBe(true);
});
