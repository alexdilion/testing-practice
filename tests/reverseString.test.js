#!/usr/bin/env node

import reverseString from "../src/reverseString";

test("Regular strings", () => {
    const tests = [
        ["hello", "olleh"],
        ["Reversed", "desreveR"],
        ["Kayak", "kayaK"],
        ["12345", "54321"],
    ];

    tests.forEach((test) => {
        expect(reverseString(test[0])).toMatch(test[1]);
    });
});

test("Empty string", () => {
    expect(reverseString("")).toMatch("");
});
