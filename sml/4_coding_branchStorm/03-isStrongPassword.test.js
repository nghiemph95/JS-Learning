import { isStrongPassword } from "./03-isStrongPassword";

describe("Name of the group", () => {
  test("should ", () => {
    expect(isStrongPassword("")).toBe(false);
  });
  test("should ", () => {
    expect(isStrongPassword("super strong")).toBe(false);
  });
  test("should ", () => {
    expect(isStrongPassword("Sup3rC0o!")).toBe(true);
  });
});
