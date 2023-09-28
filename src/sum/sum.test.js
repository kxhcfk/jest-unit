const sum = require('./sum');

describe('sum', () => {
    test('1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })

    test('1 + "test string" to equal "1test string"', () => {
        expect(sum(1, "test string")).toBe("1test string");
    })

    test('"test string one" + "test string two" to equal "test string onetest string two"', () => {
        expect(sum("test string one", "test string two")).toBe("test string onetest string two");
    })
})