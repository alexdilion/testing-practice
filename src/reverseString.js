#!/usr/bin/env node

export default function reverseString(string) {
    return [...string].toReversed().join("");
}
