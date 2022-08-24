/** Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số bằng với số dương chẳn đầu tiên trong
mảng.
Trường hợp mảng không có số dương chẳn thì trả về mảng rỗng.
Mảng kết quả không bao gồm số dương chẵn đầu tiên. */

export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList
    .filter((element) => element > 0 && element % 2 === 0)
    .slice(1);
}
// console.log(findAllNumbers([1, 3, 5]));
