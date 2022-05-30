import { sumSnCalcV1, sumSnCalcV2 } from "./sumSnCalcV1";

describe("test sum func S(n)", () => {
  test("should be return 0 when n <= 0", () => {
    expect(sumSnCalcV1(0)).toBe(0);
    expect(sumSnCalcV1(-1)).toBe(0);
    expect(sumSnCalcV2(0)).toBe(0);
    expect(sumSnCalcV2(-1)).toBe(0);
  });
  test("should be return sum when n > 0", () => {
    expect(sumSnCalcV1(1)).toBe(1);
    expect(sumSnCalcV1(2)).toBe(3);
    expect(sumSnCalcV2(5)).toBe(15);
  });
});
