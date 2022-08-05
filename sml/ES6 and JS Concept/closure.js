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
