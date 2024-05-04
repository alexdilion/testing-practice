#!/usr/bin/env node

export default class calculator {
    #isNumber(value) {
        return !isNaN(value) && typeof value === "number" && isFinite(value);
    }

    #checkArguments(a, b) {
        if (!this.#isNumber(a) || !this.#isNumber(b)) {
            throw new Error("Invalid arguments provided");
        }
    }

    add(a, b) {
        this.#checkArguments(a, b);
        return a + b;
    }

    subtract(a, b) {
        this.#checkArguments(a, b);
        return a - b;
    }

    multiply(a, b) {
        this.#checkArguments(a, b);
        return a * b;
    }

    divide(a, b) {
        this.#checkArguments(a, b);

        if (b === 0) throw new Error("D'oh! Division by zero!");

        return a / b;
    }
}
