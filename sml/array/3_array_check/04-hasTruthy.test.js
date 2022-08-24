import { hasTruthy } from "./04-hasTruthy";

describe("Test function hasTruthy", () => {
  test("should return false", () => {
    expect(hasTruthy([])).toBe(false);
    expect(hasTruthy([true, ""])).toBe(false);
  });

  test("should return true", () => {
    expect(hasTruthy([true, 123])).toBe(true);
  });
});
