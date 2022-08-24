import { findLastUrl } from "./08-findLastUrl";

describe("Name of the group", () => {
  test("should ", () => {
    expect(findLastUrl(["https://google.com", "wss://chat.sample.com"])).toBe(
      "wss://chat.sample.com"
    );
    expect(findLastUrl([])).toBe();
  });
});
