import { sumSnCalc } from "./sumSnCalc";

describe("test sum of S(n)", () => {
  test("should be return 0 when n <= 0", () => {
    expect(sumSnCalc(0)).toBe(0);
    expect(sumSnCalc(-1)).toBe(0);
  });

  test("should be return sum when n > 0", () => {
    expect(sumSnCalc(1)).toBe(1);
    expect(sumSnCalc(2)).toBe(3);
    expect(sumSnCalc(5)).toBe(15);
  });
});
