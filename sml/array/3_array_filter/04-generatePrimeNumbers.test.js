import { generatePrimeNumbers } from "./04-generatePrimeNumbers";

describe("Name of the group", () => {
  test("should ", () => {
    expect(generatePrimeNumbers(10)).toStrictEqual([2, 3, 5, 7]);
    expect(generatePrimeNumbers(20)).toStrictEqual([
      2, 3, 5, 7, 11, 13, 17, 19,
    ]);
  });
});
