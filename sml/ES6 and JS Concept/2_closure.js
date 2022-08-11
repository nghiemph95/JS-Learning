function outerFunc() {
  let outerVar = "I am outside"; // lexical scope

  /** Closure */
  function innerFunc() {
    outerVar; // => 'I am outside'
  }

  return innerFunc;
}

const myInnerFunc = outerFunc();

myInnerFunc();

//Example
function createCounter(initValue) {
  let value = initValue || 0;

  function increase() {
    value++;
  }

  function decrease() {
    value--;
  }

  function getValue() {
    return value;
  }

  return {
    increase,
    decrease,
    getValue,
  };
}

const counter1 = createCounter(0);
counter1.increase();
counter1.decrease();
counter1.getValue();

const counter2 = createCounter(10);
