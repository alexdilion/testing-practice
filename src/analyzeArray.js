#!/usr/bin/env node

export default function analyzeArray(arr) {
    if (arr.length === 0) {
        return { average: null, min: null, max: null, length: 0 };
    }

    const average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return { average, min, max, length };
}
