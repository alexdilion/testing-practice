#!/usr/bin/env node

import calculator from "../src/calculator";

test("Addition", () => {
    const tests = [
        [[1, 2], 3],
        [[-1, 1], 0],
        [[-1, -1], -2],
        [[0, 0], 0],
    ];
    const calc = new calculator();

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
    const calc = new calculator();

    tests.forEach((test) => {
        expect(calc.subtract(...test[0])).toEqual(test[1]);
    });
});
