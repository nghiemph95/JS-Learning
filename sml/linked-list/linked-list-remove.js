/** some(isValidFn)
 */

function createLinkedList() {
  let head = null;

  //Insert Tail
  function insertTail(data) {
    const newNode = { data: data, next: null };

    if (!head) {
      head = newNode;
    } else {
      let lastNode = head;
      while (lastNode.next != null) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
      /** Other solution */
      //   const tail = getTail();
      //   tail.next = newNode;
    }
    return head;
  }

  // Insert Before Position
  function insertBeforePosition(data, position) {
    if (position <= 0 || head == null) {
      return insertHead(data);
    }

    const newNode = { data: data, next: null };

    let prev = head;
    let curr = head;
    let i = 0;

    while (curr != null && i < position) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    newNode.next = curr;
    prev.next = newNode;
    return head;
  }

  /** Get Head */
  function getHead() {
    return head;
  }

  //Get Tail
  function getTail() {
    if (head == null) return null;

    let tail = head;
    while (tail.next != null) {
      //   console.log(tail.data);
      tail = tail.next;
    }
    return tail;
  }

  //Get Size
  function getSize() {
    if (head == null) return 0;

    let current = head;
    let count = 0;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }

  //Find Index by Data
  function findIndexByData(data) {
    if (head == null) return -1;

    let current = head;
    let index = 0;
    while (current != null) {
      if (current.data === data) return index;
      index++;
      current = current.next;
    }
    return -1;
  }

  //Find With Callback
  function findWithCallback(callback) {
    if (head == null) return;

    let current = head;
    let index = 0;
    while (current != null) {
      if (callback(current.data, index)) return current.data;
      index++;
      current = current.next;
    }
    return;
  }

  //Insert Head
  function insertHead(newData) {
    const newNode = { data: newData, next: null };

    if (head == null) {
      head = newNode;
      return;
    }

    newNode.next = head;
    head = newNode;
  }

  //Some
  function some(isValidFn) {
    if (head == null) return false;

    let current = head;

    while (current != null) {
      if (isValidFn(current.data)) return true;

      current = current.next;
    }
    return false;
  }

  //Every
  function every(isValidFn) {
    if (head == null) return false;

    let current = head;

    while (current != null) {
      if (isValidFn(current.data)) return true;
      current = current.next;
    }
    return false;
  }
  //   return false;

  // Remove Head
  function removeHead() {
    if (head != null) head = head.next;

    return head;
  }

  // Remove Tail
  function removeTail() {
    if (head == null) return null;

    if (head.next == null) {
      head = null;
      return head;
    }

    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }

    secondLast.next = null;
    return head;
  }

  // Remove Position
  function removeAtPosition(position) {
    if (position < 0 || head == null) return removeHead;

    // has only 1 item
    if (head.next == null) {
      head = null;
      return head;
    }

    let curr = head;
    let prev = head;
    let i = 0;

    while (i < position && curr.next !== null) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    prev.next = curr.next;
    return head;
  }

  //Print List
  function printList() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  return {
    getHead,
    getTail,
    getSize,
    insertTail,
    insertBeforePosition,
    findIndexByData,
    findWithCallback,
    insertHead,
    some,
    every,
    removeHead,
    removeTail,
    removeAtPosition,
    printList,
  };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);

numberLinkedList.insertTail(6);

// numberLinkedList.removeHead(1);
numberLinkedList.removeTail(5);

numberLinkedList.insertBeforePosition(3, 2);

console.log("Head", numberLinkedList.getHead());
console.log("Tail", numberLinkedList.getTail());
console.log("Size", numberLinkedList.getSize());

console.log("findIndexByData", numberLinkedList.findIndexByData(3)); // -> 2
console.log("findIndexByData", numberLinkedList.findIndexByData(6)); // -> -1

console.log(
  "findWithCallback",
  numberLinkedList.findWithCallback((x, idx) => x % 2 === 0)
); // -> 2
console.log(
  "findWithCallback",
  numberLinkedList.findWithCallback((x, idx) => x > 5)
); // -> undefined

console.log(
  "some(isValidFn(x => x < 6))",
  numberLinkedList.some((x) => x < 6)
); // -> true

console.log(
  "every(isValidFn(x => x > 1))",
  numberLinkedList.every((x) => x > 1)
); // -> true

numberLinkedList.printList();
