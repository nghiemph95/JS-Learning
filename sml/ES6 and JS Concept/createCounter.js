function createCounter() {
  const objectResult = {};

  function count(label = "default") {
    objectResult[label] = (objectResult[label] || 0) + 1;

    return `${label}: ${objectResult[label]}`;
  }

  function resetCount(label = "default") {
    objectResult[label] = 0;
  }

  return {
    count,
    resetCount,
  };
}

const counter = createCounter();
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());

console.log(counter.count("test"));
console.log(counter.count("test"));
console.log(counter.count("test"));

console.log(counter.count("Counter"));
console.log(counter.count("Counter"));
console.log(counter.resetCount("Counter"));
console.log(counter.count("Counter"));
