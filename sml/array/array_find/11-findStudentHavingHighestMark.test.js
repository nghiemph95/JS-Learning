import { findStudentHavingHighestMark } from "./11-findStudentHavingHighestMark";

describe("Name of the group", () => {
  const studentList = [
    { id: 1, name: "Alice", math: 9 },
    { id: 2, name: "Bob", math: 10 },
    { id: 3, name: "John", math: 10 },
  ];
  it("should return", () => {
    expect(findStudentHavingHighestMark(studentList)).toStrictEqual({
      id: 2,
      name: "Bob",
      math: 10,
    });
  });
});
