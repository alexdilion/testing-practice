#!/usr/bin/env node

import analyzeArray from "../src/analyzeArray";

describe("Returns object with properties", () => {
    test.each(["average", "min", "max", "length"])(
        "Has %s property",
        (property) => {
            expect(analyzeArray([1, 2, 3])).toHaveProperty(property);
        }
    );
});

describe("Returns correct average value", () => {
    test.each([
        [[1, 2, 3], 2],
        [[1, 1, 1, 1], 1],
        [[3, 10, 20, 7], 10],
        [[-1, -2, -3], -2],
        [[], null],
    ])("%p", (arr, expected) => {
        expect(analyzeArray(arr)).toHaveProperty("average", expected);
    });
});

describe("Returns correct minimum value", () => {
    test.each([
        [[1, 2, 3], 1],
        [[1, 1, 1, 1], 1],
        [[3, 10, 20, 7], 3],
        [[-1, -2, -3], -3],
        [[], null],
    ])("%p", (arr, expected) => {
        expect(analyzeArray(arr)).toHaveProperty("min", expected);
    });
});

describe("Returns correct maximum value", () => {
    test.each([
        [[1, 2, 3], 3],
        [[1, 1, 1, 1], 1],
        [[3, 10, 20, 7], 20],
        [[-1, -2, -3], -1],
        [[], null],
    ])("%p", (arr, expected) => {
        expect(analyzeArray(arr)).toHaveProperty("max", expected);
    });
});

describe("Returns correct length", () => {
    test.each([
        [[1, 2, 3], 3],
        [[1, 1, 1, 1], 4],
        [[3, 10, 20, 7], 4],
        [[-1, -2, -3], 3],
        [[], 0],
    ])("%p", (arr, expected) => {
        expect(analyzeArray(arr)).toHaveProperty("length", expected);
    });
});
