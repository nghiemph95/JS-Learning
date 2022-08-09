function createCounter() {
  const objectResult = {};

  function count() {}

  function resetCount() {}

  return {
    count,
    resetCount,
  };
}

const counter = createCounter();
