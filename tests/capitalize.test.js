#!/usr/bin/env node

import capitalize from "../src/capitalize";

test("All lowercase", () => {
    const tests = [
        ["hello", "Hello"],
        ["apples and oranges", "Apples and oranges"],
        ["aaaaaaaa", "Aaaaaaa"],
    ];

    tests.forEach((test) => {
        expect(capitalize(test[0])).toMatch(test[1]);
    });
});

test("All uppercase", () => {
    expect(capitalize("AAAA")).toMatch("AAAA");
});

test("Single character", () => {
    expect(capitalize("a")).toMatch("A");
});

test("Empty string", () => {
    expect(capitalize("")).toMatch("");
});
