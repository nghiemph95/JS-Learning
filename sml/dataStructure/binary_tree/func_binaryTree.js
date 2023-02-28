function createBinarySearchTree(initKeyList) {
  let root = null;

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }

  /** Insert */
  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };

    //base case
    if (node === null) return newNode;
    if (key === node.key) return node;

    if (key > node.key) {
      //right
      node.right = insert(node.right, key);
    } else {
      //node.left (root)
      node.left = insert(node.left, key);
    }

    return node;
  }

  /** Find Min: node nhỏ nhất trong tree tính từ root */
  function findMin(node) {
    if (node === null) return null;

    let minNode = node;

    while (minNode.left != null) {
      minNode = minNode.left;
    }

    return minNode;
  }

  /** Search */
  function search(node, key) {
    if (node === null) return null;

    if (key > node.key) return search(node.right, key);
    if (key < node.key) return search(node.left, key);

    return node;
  }

  /** Đếm số node */
  function getMaxNodesCount(node) {
    if (node === null) return 0;

    const leftHeight = getMaxNodesCount(node.left);
    const rightHeight = getMaxNodesCount(node.right);

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }
  /** Tính chiều cao tree dựa vào nhánh dài nhất */
  function getHeight() {
    const height = getMaxNodesCount(root);

    return height > 0 ? height - 1 : 0;
  }

  function printNodeAtLevel(node, level) {
    if (node === null) return;

    if (level === 0) {
      console.log(node.key);
      return;
    }

    printNodeAtLevel(node.left, level - 1);
    printNodeAtLevel(node.right, level - 1);
  }
  //bfs: breadth first traversal: duyệt qua tất cả node
  /** Duyệt từng tầng */
  function bfs() {
    const height = getHeight();

    for (let i = 0; i <= height; i++) {
      printNodeAtLevel(root, i);
    }
  }

  //dfs: duyệt qua tất cả node
  /** DFS: Depth First Traversals
   * có 3 dạng:
   * 1. InOrder: Left - Root - Right
   * 2. PreOrder: Root - Left - Right
   * 3. PostOrder: Left - Right - Root
   */

  function printInOrder(node) {
    if (node == null) return;

    printInOrder(node.left);
    console.log(node.key); //root
    printInOrder(node.right);
  }

  function printPreOrder(node) {
    if (node == null) return;

    console.log(node.key); //root
    printPreOrder(node.left);
    printPreOrder(node.right);
  }

  function printPostOrder(node) {
    if (node == null) return;

    printPostOrder(node.left);
    printPostOrder(node.right);
    console.log(node.key); //root
  }

  return {
    root,
    insert,
    findMin,
    search,
    getMaxNodesCount,
    getHeight,
    bfs,
    printInOrder,
    printPreOrder,
    printPostOrder,
  };
}

const binarySearchTree = createBinarySearchTree([10, 7, 15, 5, 9, 20, 13, 17]);
console.log(binarySearchTree.root);

binarySearchTree.printInOrder(binarySearchTree.root);
