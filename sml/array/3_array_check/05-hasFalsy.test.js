import { hasFalsy } from "./05-hasFalsy";

describe("Test function hasFalsy()", () => {
  test("should return false", () => {
    expect(hasFalsy([])).toBe(false);
    // expect(hasFalsy(["easy", 123])).toBe(false);
  });

  test("should return true", () => {
    expect(hasFalsy([false, ""])).toBe(true);
    expect(hasFalsy([false, 123])).toBe(true);
  });
});
