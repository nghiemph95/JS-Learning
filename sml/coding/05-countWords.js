export function countWords(str) {
  if (typeof str !== "string" || str.length === 0) return 0;

  return str.trim().split(" ").length;
}

console.log("   easy cdhc   ".trim().split(" ").length);
