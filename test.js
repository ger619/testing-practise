import Calculator, { rString } from './challenge.js';
//import { reverseString } from './challenge.js';

const calc = new Calculator();

test('adds 1 + 2 to equal 3', () => {
    expect(calc.sum(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
    expect(calc.minus(2, 1)).toBe(1);
});

test("Reverse String", () => {
    expect(rString("hello")).toEqual("olleh");
});