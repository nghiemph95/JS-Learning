/** Liệt kê các số trong khoảng */
export function generateNumberInRange(a, b) {
  const length = b - a + 1;

  return Array.from({ length }, (_, i) => a + i);
}

// console.log(generateNumberInRange(1, 5));
