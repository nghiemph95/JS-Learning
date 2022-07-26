function createStack() {
  /** Stack: LAST IN FIRST OUT */
  const stack = [];

  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }

  function getSize() {
    return stack.length;
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function push(data) {
    stack.push(data);
  }

  function pop() {
    return stack.pop();
  }

  return {
    getTop,
    getSize,
    isEmpty,
    push,
    pop,
  };
}

/** run test Stack */
describe("createStack()", () => {
  it("all in one", () => {
    //empty stack
    const stack = createStack();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();

    //push 5
    stack.push(5);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(5);

    //push 10
    stack.push(10);
    expect(stack.getSize()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(10);

    //pop() -> 10
    const ten = stack.pop();
    expect(ten).toBe(10);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(5);

    //pop() -> 5
    const five = stack.pop();
    expect(five).toBe(5);
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();
  });
});
