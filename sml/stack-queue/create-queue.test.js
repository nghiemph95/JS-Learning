function createQueue() {
  /** Queue: FIRST IN FIRST OUT */
  const queue = [];

  function getFront() {
    // return queue.length > 0 ? queue[0] : undefined;
    return queue[0];
  }

  function getSize() {
    return queue.length;
  }

  function getBack() {
    // return queue.length > 0 ? queue[queue.length - 1] : undefined;
    return queue[queue.length - 1];
  }

  function enqueue(data) {
    queue.push(data);
  }

  function dequeue() {
    return queue.shift();
  }

  return {
    getFront,
    getSize,
    getBack,
    enqueue,
    dequeue,
  };
}

describe("createQueue()", () => {
  it("all in one", () => {
    //empty queue
    const queue = createQueue();
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBeUndefined();
    expect(queue.getBack()).toBeUndefined();

    //queue: 1
    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(1);

    //queue: 2
    queue.enqueue(2);
    expect(queue.getSize()).toBe(2);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(2);

    //dequeue
    const one = queue.dequeue();
    expect(one).toBe(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(2);
    expect(queue.getBack()).toBe(2);

    //dequeue
    const two = queue.dequeue();
    expect(two).toBe(2);
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBeUndefined();
    expect(queue.getBack()).toBeUndefined();
  });
});

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
