import { findAllNumber } from "./06-findAllNumberStartByEven";

describe("Name of the group", () => {
  test("should ", () => {
    expect(findAllNumber([1, 5, 6])).toStrictEqual([1, 5]);
    expect(findAllNumber([234, 421, 123])).toStrictEqual([123]);
  });
});
