#!/usr/bin/env node

import caesarCipher from "../src/caesarCipher";

test("Only letters", () => {
    const tests = [
        [["hello", 1], "IFMMP"],
        [["testing", 2], "VGUVKPI"],
        [["aaaaaa", 25], "ZZZZZZ"],
    ];

    tests.forEach((test) => {
        const [args, expected] = test;
        expect(caesarCipher(...args)).toMatch(expected);
    });
});

test("Multiple words", () => {
    const tests = [
        [["Hello world", 1], "IFMMP.XPSME"],
        [["Julius Caesar", 3], "MXOLXV?FDHVDU"],
        [["AAAAAA AAAAAA", 25], "ZZZZZZKZZZZZZ"],
    ];

    tests.forEach((test) => {
        const [args, expected] = test;
        expect(caesarCipher(...args)).toMatch(expected);
    });
});

test("Wrapping", () => {
    const tests = [
        [["Hello world", 50], "QNUUX40X UM"],
        [["AAAA AAAA", 41], "AAAA AAAA"],
        [["ZZZZ ZZZZ", 41], "ZZZZ ZZZZ"],
        [["ZZZZ ZZZZ", 1], "    .    "],
    ];

    tests.forEach((test) => {
        const [args, expected] = test;
        expect(caesarCipher(...args)).toMatch(expected);
    });
});

test("Numbers", () => {
    const tests = [
        [["123", 1], "234"],
        [["44 BC", 25], "TTK ."],
    ];

    tests.forEach((test) => {
        const [args, expected] = test;
        expect(caesarCipher(...args)).toMatch(expected);
    });
});

test("Punctuation", () => {
    const tests = [
        [["Et tu, Brute?", 14], "S2923B9P032SC"],
        [["Isn't it nice today?", 9], "R.W',4R,4WRLN4,XMJ27"],
        [[".,", 2], "?!"]
    ];

    tests.forEach((test) => {
        const [args, expected] = test;
        expect(caesarCipher(...args)).toMatch(expected);
    });
});

test("Empty string", () => {
    expect(caesarCipher("", 1)).toMatch("");
});
