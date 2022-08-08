function divisibleBy(n) {
  return function (x) {
    return x % n === 0;
  };
}

const isDivisibleByFive = divisibleBy(5);
console.log(isDivisibleByFive(5)); // true
console.log(isDivisibleByFive(4)); // false

const isDivisibleByTwo = divisibleBy(2);
console.log(isDivisibleByTwo(2)); // true
console.log(isDivisibleByTwo(3)); // false
