const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 6]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime(0) is false", () => {
    expect(lib.prime(0)).toBe(false);
});

test("prime(1) is false", () => {
    expect(lib.prime(1)).toBe(false);
});

test("prime(2) is true", () => {
    expect(lib.prime(2)).toBe(true);
});

test("prime(17) is true", () => {
    expect(lib.prime(17)).toBe(true);
});

test("prime(100) is false", () => {
    expect(lib.prime(100)).toBe(false);
});

test("fact(0) is 1", () => {
    expect(lib.fact(0)).toBe(1);
});

test("fact(1) is 1", () => {
    expect(lib.fact(1)).toBe(1);
});

test("fact(3) is 6", () => {
    expect(lib.fact(3)).toBe(6);
});

test("fact(10) is 3628800", () => {
    expect(lib.fact(10)).toBe(3628800);
});

test("fact(20) is -1", () => {
    expect(lib.fact(20)).toBe(-1);
});
