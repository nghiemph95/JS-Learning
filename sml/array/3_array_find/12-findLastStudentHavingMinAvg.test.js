import { findLastStudentHavingMinAvg } from "./12-findLastStudentHavingMinAvg";

describe("Name of the group", () => {
  const studentList = [
    { id: 1, name: "Alice", math: 9, english: 9 },
    { id: 2, name: "Bob", math: 5, english: 5 },
    { id: 3, name: "John", math: 5, english: 5 },
  ];
  test("should return", () => {
    expect(findLastStudentHavingMinAvg(studentList)).toEqual({
      id: 3,
      name: "John",
      math: 5,
      english: 5,
    });
  });
});
