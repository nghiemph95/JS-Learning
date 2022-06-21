import { countEmails } from "./countEmails";

describe("Test countEmails()", () => {
  test("should return 0", () => {
    expect(countEmails("")).toEqual(0);
  });
  test("should return the number of Email", () => {
    expect(countEmails("my email should be abc@super.com")).toEqual(1);
    expect(
      countEmails(
        "my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn"
      )
    ).toEqual(3);
  });

  test("should return 0 of Email", () => {
    expect(countEmails("my email should be a@a.com")).toEqual(0);
    expect(countEmails("my email should be @ bla .com")).toEqual(0);
  });
});
