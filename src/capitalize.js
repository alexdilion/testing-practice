#!/usr/bin/env node

export default function capitalize(string) {
    if (!string) return "";

    return string[0].toUpperCase() + string.slice(1);
}
