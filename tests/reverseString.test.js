#!/usr/bin/env node

import reverseString from "../src/reverseString";

test("Regular strings", () => {
    const tests = [
        ["hello", "olleh"],
        ["Reversed", "desreveR"],
        ["Kayak", "kayaK"],
    ];

    tests.forEach((test) => {
        expect(reverseString(test[0])).toMatch(test[1]);
    });
});
