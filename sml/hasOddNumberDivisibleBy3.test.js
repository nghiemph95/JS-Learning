import { hasOddNumberDivisibleBy3 } from "./hasOddNumberDivisibleBy3";

describe("Test result of hasOddNumberDivisibleBy3", () => {
  test("should show result true", () => {
    expect(hasOddNumberDivisibleBy3([1, 5, 9])).toBe(true);
  });

  test("should show result true", () => {
    expect(hasOddNumberDivisibleBy3([1, 6, 8])).toBe(false);
  });
});
