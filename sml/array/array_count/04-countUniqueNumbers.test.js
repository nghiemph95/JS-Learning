import { countUniqueNumbers } from "./04-countUniqueNumbers";

describe("Name of the group", () => {
  test("should return 0 when  array equall [] ", () => {
    expect(countUniqueNumbers([])).toBe(0);
  });

  test("should return 0 when  array equall [] ", () => {
    expect(countUniqueNumbers([1, 1, 1])).toBe(1);
  });

  test("should return 0 when  array equall [] ", () => {
    expect(countUniqueNumbers([1, 2, 3])).toBe(3);
  });

  test("should return 0 when  array equall [] ", () => {
    expect(countUniqueNumbers([1, 2, 3, 2, 3, 1])).toBe(3);
  });
});
