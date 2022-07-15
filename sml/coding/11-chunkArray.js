export function chunkArrayV1(array, size) {
  if (!Array.isArray(array) || array.length === 0 || size <= 0) return [];
  let res = [];
  for (let i = 0; i < array.length; i += size) {
    res.push(array.slice(i, size + i));
  }
  if (res.length > 20) throw new Error("Too many chunk");
  return res;
}

export function chunkArray(array, size) {
  if (!Array.isArray(array) || array.length === 0 || size <= 0) return [];

  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
}

console.log(chunkArray([1, 2, 3], 2));

// console.log([1, 2, 3].slice(0, 1));
