const studentList = [
  { id: 1, name: "Alice", marks: { math: 9, english: 10 } },
  { id: 3, name: "Bob", marks: { math: 5, english: 10 } },
  { id: 2, name: "John", marks: { math: 10, english: 10 } },
];

function sortById() {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => s1.id - s2.id);
}
console.log("sortById", sortById(studentList));

function sortByName() {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => {
    if (s1.name > s2.name) return 1;
    if (s1.name < s2.name) return -1;
    return 0;
  });
}
console.log("sortByName", sortByName(studentList));

function sortByAvg() {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => {
    const s1Avg = (s1.marks.math + s1.marks.english) / 2;
    const s2Avg = (s2.marks.math + s2.marks.english) / 2;

    return s1Avg - s2Avg;
  });
}

console.log("sortByAvg", sortByAvg(studentList));
