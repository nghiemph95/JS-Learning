/** Tìm số có số lần xuất hiện nhiều nhất */
export function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  if (numberList.length === 1) return 1;
  let count = 0;

  numberList.find((element) => {
    if (numberList.indexOf(element) > 0) {
      return count++;
    }
  });

  return count;
}

console.log(findMostFrequentNumber([1, 4, 4, 4, 5, 3]));

nums.sort()
       b=False
       i=0
       while i<(len(nums)-1):
           if nums[i]==nums[i+1]:
               b=True
               return b
           else:
               b=False
               i += 1
       return b

       const arr = [1,2,3,4,5,6,7,8,9];
    
const newArr = [];
while(arr.length) newArr.push(arr.splice(0,3));

var construct2DArray = function (original, m, n) {
    if (m * n != original.length) {
        return [];
    }
    const ans = [];
    for (let i = 0; i < m * n; i += n) {
        ans.push(original.slice(i, i + n));
    }
    return ans;
};