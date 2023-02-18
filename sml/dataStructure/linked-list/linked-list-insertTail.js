/** insertTail
 */

function createLinkedList() {
  let head = null;

  //Insert Tail
  function insertTail(data) {
    const newNode = { data: data, next: null };

    if (!head) {
      head = newNode;
    } else {
      /** get tail */
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

  function getHead() {
    return head;
  }

  function getTail() {
    if (head == null) return null;

    let tail = head;
    while (tail.next != null) {
      //   console.log(tail.data);
      tail = tail.next;
    }
    return tail;
  }

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

  function insertHead(newData) {
    const newNode = { data: newData, next: null };

    if (head == null) {
      head = newNode;
      return;
    }

    newNode.next = head;
    head = newNode;
  }
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
    findIndexByData,
    findWithCallback,
    insertHead,
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

numberLinkedList.printList();
