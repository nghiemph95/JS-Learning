import { hasEasyFrontend } from "./hasEasyFrontend";

describe("Test function", () => {
  test("should return false", () => {
    expect(hasEasyFrontend(["easy", ""])).toBe(false);
  });

  test("should return false", () => {
    expect(hasEasyFrontend(["easy", "frontend"])).toBe(true);
  });

  test("should return false", () => {
    expect(hasEasyFrontend(["easy frontend"])).toBe(true);
  });
});
