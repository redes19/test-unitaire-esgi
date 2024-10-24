const { add, sub, mult, div } = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("sub 5 - 2 to equal 3", () => {
  expect(sub(5, 2)).toBe(3);
});

test("mult 2 * 20 to equal 40", () => {
  expect(mult(2, 20)).toBe(40);
});

test("div 10 / 2 to equal 5", () => {
  expect(div(10, 2)).toBe(5);
});

test("div 10 / 0 to equal 0", () => {
  expect(div(10, 0)).toBe(0);
});
