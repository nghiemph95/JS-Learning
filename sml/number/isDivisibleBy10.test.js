import { isDivisibleBy10 } from "./isDivisibleBy10";

describe("test divide 10", () => {
  test("should be return false", () => {
    expect(isDivisibleBy10(10)).toBe(false);
  });

  test("should be return true", () => {
    expect(isDivisibleBy10(1234)).toBe(true);
    expect(isDivisibleBy10(123455)).toBe(true);
  });
});
