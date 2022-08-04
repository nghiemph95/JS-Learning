const studentList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob Tan" },
  { id: 3, name: " John " },
];

function binarySearch(studentList, searchName) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    !searchName ||
    searchName.trim() == ""
  )
    return -1;

  let left = 0;
  let right = studentList.length;
  const trimedSearchName = searchName.trim().toLowerCase();

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    const studentName = studentList[mid].name.trim().toLowerCase();

    if (studentName === trimedSearchName) return mid;

    if (trimedSearchName > studentName) left = mid + 1;
    else right = right - 1;
  }
  return -1;
}

console.log(binarySearch(studentList, "bob tan"));
