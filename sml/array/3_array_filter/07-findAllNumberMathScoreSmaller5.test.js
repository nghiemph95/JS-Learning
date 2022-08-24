import { findAllNumber } from "./07-findAllNumberMathScoreSmaller5";

describe("Name of the group", () => {
  const studentList = [
    { id: 1, name: "Alice", math: 9 },
    { id: 2, name: "Bob", math: 4 },
    { id: 3, name: "John", math: 0 },
  ];
  test("should return array", () => {
    expect(findAllNumber(studentList)).toStrictEqual([
      { id: 2, name: "Bob", math: 4 },
      { id: 3, name: "John", math: 0 },
    ]);
  });
});
