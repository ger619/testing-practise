import { Calculator, rString, sLength, capitalize } from './challenge.js';

const calc = new Calculator();

test('slength makes a string into a char', () => {
    expect(sLength("0")).toBe(1);
});

test('adds 1 + 2 to equal 3', () => {
    expect(calc.sum(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
    expect(calc.minus(2, 1)).toBe(1);
});

test("Reverse String", () => {
    expect(rString("hello")).toBe("olleh");
});

test("Capitalize String", () => {
    expect(capitalize("hello")).toBe("Hello");
});