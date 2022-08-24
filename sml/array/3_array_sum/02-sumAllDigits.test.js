import { sumAllDigits } from "./02-sumAllDigits";

describe("Name of the group", () => {
  test("should ", () => {
    expect(sumAllDigits([])).toBe(0);
    expect(sumAllDigits([4])).toBe(4);
    expect(sumAllDigits([123, 4])).toBe(10);
    expect(sumAllDigits([1234, 55])).toBe(20);
  });
});
