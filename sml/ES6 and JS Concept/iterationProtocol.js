function createIterator(n) {
  let i = 0;

  return {
    next() {
      const result = {
        value: i,
        done: i >= n,
      };
      //inscrease counter
      i += 5;

      return result;
    },
  };
}

const interator = createIterator(50);
let result = interator.next();

while (!result.done) {
  console.log(result.value);

  result = interator.next();
}
