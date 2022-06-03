import { countURLs } from "./countURLs";

describe("Test", () => {
  test("return 1 ", () => {
    expect(
      countURLs("my website is: http://ezfrontend.com you can visit it")
    ).toEqual(1);
  });
  test("return 0 ", () => {
    expect(countURLs("my website is: https://ez.com you can visit it")).toEqual(
      0
    );
  });
});
