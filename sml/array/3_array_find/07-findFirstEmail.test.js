import { findFirstEmail } from "./07-findFirstEmail";

describe("Name of the group", () => {
  it("should return res", () => {
    expect(findFirstEmail(["abc@easy.frontend", "abc@gmail.com"])).toBe(
      "abc@gmail.com"
    );
  });
  it("should return undefined", () => {
    expect(findFirstEmail(["abc@easy.frontend"])).toBe();
  });
});
