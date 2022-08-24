import { removeStudentById } from "./03-removeStudentById";

describe("Name of the group", () => {
  const studentList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  const studentListV1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  test("should ", () => {
    expect(removeStudentById(studentList, 1)).toStrictEqual([
      { id: 2, name: "Bob" },
    ]);
  });

  test("should return 2 value of array", () => {
    expect(removeStudentById(studentListV1, 3)).toMatchObject([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
  });
});
