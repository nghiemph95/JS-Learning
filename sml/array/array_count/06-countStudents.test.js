import { countStudents } from "./06-countStudents";

describe("Name of the group", () => {
  const studentListV1 = [
    { id: 1, name: "Alice", marks: { math: 8 } },
    { id: 2, name: "Bob", marks: { math: 9 } },
  ];

  const studentListV2 = [
    { id: 1, name: "Alice", marks: { math: 5, english: 6 } },
    { id: 2, name: "Bob", marks: { math: 9, english: 8 } },
  ];
  test("should ", () => {
    expect(countStudents(studentListV1, 7)).toBe(2);
    expect(countStudents(studentListV2, 7)).toBe(1);
  });
});
