/** Create Iterator */
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

for (const number of interator) {
  console.log(number); // interator is not iterable
}

/** Create Iterable */
function createIterable(n) {
  let i = 0;

  return {
    //(){} zero-argument function
    [Symbol.iterator]() {
      return {
        next() {
          const result = {
            value: [i, i * 2],
            done: i >= n,
          };
          //inscrease counter
          i += 5;

          return result;
        },
      };
    },
  };
}

const iterable = createIterable(50);
for (const [number, numberX2] of iterable) {
  console.log(number, numberX2);
}
