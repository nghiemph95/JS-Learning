import { countWords } from "./05-countWords";

describe("Name of the group", () => {
  test("should ", () => {
    expect(countWords("")).toEqual(0);
  });

  test("should ", () => {
    expect(countWords("easy")).toEqual(1);
  });

  test("should ", () => {
    expect(countWords("easy checker")).toEqual(2);
  });

  test("should ", () => {
    expect(countWords("   easy checker   ")).toEqual(2);
  });
});
