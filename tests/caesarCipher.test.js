#!/usr/bin/env node

import caesarCipher from "../src/caesarCipher";

test("Only letters", () => {
    const tests = [
        [["hello", 1], "IFMMP"],
        [["testing", 2], "VGUVKPI"],
        [["aaaaaa", 25], "ZZZZZZ"],
    ];

    tests.forEach((test) => {
        const [args, actualValue] = test;
        expect(caesarCipher(...args)).toMatch(actualValue);
    });
});

