#!/usr/bin/env node

import capitalize from "./capitalize";

test("Regular strings", () => {
    const tests = [
        ["hello", "Hello"],
        ["apples and oranges", "Apples and oranges"],
        ["aaaaaaaa", "Aaaaaaa"],
    ];

    tests.forEach((test) => {
        expect(capitalize(test[0])).toMatch(test[1]);
    });
});
