#!/usr/bin/env node

function getShiftedChar(char, shiftFactor) {
    const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (key.indexOf(char) === -1) return char;

    const shiftIndex = key.indexOf(char) + shiftFactor;
    return key[shiftIndex];
}

export default function caesarCipher(message, shiftFactor) {
    let output = message
        .toUpperCase()
        .split("")
        .map((char) => getShiftedChar(char, shiftFactor));

    return output.join("");
}
