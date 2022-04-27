/** Bài toán gọi taxi */
function getTaxiCount(passengerCount) {
  if (passengerCount === 0) return "Khong co khach dat";

  if (passengerCount > 4 && passengerCount <= 7) return 1;
  if (passengerCount <= 4) return 1;
  if (passengerCount > 7) return Math.ceil(passengerCount / 7);
}

console.log(getTaxiCount(6));

/** Tìm chữ số lớn nhất của một số nguyên dương */
function getMaxDigit(n) {
  if (n < 0 || n >= 1000) return -1;
  const c = n % 10;
  const b = Math.trunc((n % 100) / 10);
  const a = Math.trunc(n / 100);

  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

console.log(getMaxDigit(1));

/** So sánh 2 số nguyên */
function compareNumbers(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

/** Kiểm tra số đối xứng */
function isSymmetricNumber(n) {
  if (n <= 0 || n >= 1000) return false;

  const c = n % 10;
  const b = Math.trunc((n % 100) / 10);
  const a = Math.trunc(n / 100);

  console.log(a, b, c);
  if (a === c || (b === c && a === 0)) {
    return true;
  } else if (b === c && n.toString().length === 3) {
    return false;
  } else if (n > 0 && n < 10) {
    return true;
  } else return false;
}

console.log(isSymmetricNumber(001));
