import { findStudentById } from "./09-findStudentById";

describe("Name of the group", () => {
  const studentList = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Frontend" },
  ];
  test("should ", () => {
    expect(findStudentById(studentList, 1)).toEqual(0);
    expect(findStudentById(studentList, 3)).toEqual(-1);
  });
});
