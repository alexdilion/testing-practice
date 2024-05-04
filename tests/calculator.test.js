#!/usr/bin/env node

import calculator from "../src/calculator";

const calc = new calculator();

test("Addition", () => {
    const tests = [
        [[1, 2], 3],
        [[-1, 1], 0],
        [[-1, -1], -2],
        [[0, 0], 0],
    ];

    tests.forEach((test) => {
        expect(calc.add(...test[0])).toEqual(test[1]);
    });
});

test("Subtraction", () => {
    const tests = [
        [[5, 2], 3],
        [[100, 50], 50],
        [[0, 0], 0],
        [[-5, -5], 0],
        [[-5, 5], -10],
    ];

    tests.forEach((test) => {
        expect(calc.subtract(...test[0])).toEqual(test[1]);
    });
});

test("Multiplication", () => {
    const tests = [
        [[3, 2], 6],
        [[10, 10], 100],
        [[10, 0], 0],
        [[-1, 1], -1],
        [[-1, -1], 1],
    ];

    tests.forEach((test) => {
        expect(calc.multiply(...test[0])).toEqual(test[1]);
    });
});

test("Division", () => {
    const tests = [
        [[1, 1], 1],
        [[50, 10], 5],
        [[200, 0.5], 400],
        [[-5, -5], 1],
        [[100, -10], -10],
    ];

    tests.forEach((test) => {
        expect(calc.divide(...test[0])).toEqual(test[1]);
    });
});

test("Invalid arguments", () => {
    expect(() => calc.add(1, null)).toThrow("Invalid arguments provided");
    expect(() => calc.subtract(1, null)).toThrow("Invalid arguments provided");
    expect(() => calc.multiply(1, null)).toThrow("Invalid arguments provided");
    expect(() => calc.divide(1, null)).toThrow("Invalid arguments provided");
});

test("Division by zero", () => {
    expect(() => calc.divide(1, 0)).toThrow("D'oh! Division by zero!");
});
