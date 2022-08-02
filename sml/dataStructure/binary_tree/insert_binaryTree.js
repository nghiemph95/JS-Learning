function createBinarySearchTree(initKeyList) {
  let root = null;

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }

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

  return {
    root,
    insert,
  };
}

const binarySearchTree = createBinarySearchTree([10, 7, 15]);
console.log(binarySearchTree.root);
