import { checkIfAllEven } from "./evenCheckAll";

describe("checkIfAllEven()", () => {
  test("should return false when not an array", () => {
    expect(checkIfAllEven(1)).toBe(false);
    expect(checkIfAllEven("")).toBe(false);
    expect(checkIfAllEven({})).toBe(false);
    expect(checkIfAllEven(null)).toBe(false);
    expect(checkIfAllEven(undefined)).toBe(false);
  });

  test("should return false when array is empty", () => {
    expect(checkIfAllEven([])).toBe(false);
  });

  test("should return false when array has no even number", () => {
    expect(checkIfAllEven([1, 3, 5, 7])).toBe(false);
  });

  test("should return true when array has some even number", () => {
    expect(checkIfAllEven([1, 2, 4, 7])).toBe(false);
  });

  test("should return true when array has all even number", () => {
    expect(checkIfAllEven([2, 4, 6, 8])).toBe(true);
  });
});
