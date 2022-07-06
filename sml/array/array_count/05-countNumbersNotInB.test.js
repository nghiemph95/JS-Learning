import { countNumbersNotInB } from "./05-countNumbersNotInB";

describe("Name of the group", () => {
  test("should return value", () => {
    expect(countNumbersNotInB([1, 2, 3], [4, 5])).toBe(3);
  });
  test("should return value", () => {
    expect(countNumbersNotInB([1, 2, 3], [1, 2, 3])).toBe(0);
  });
  test("should return value", () => {
    expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});

console.log(["a", "b", "c"].unshift("d"));
