//created a class node accepts a value properties
//left = null
//right = null
//value = value
class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  //class made named Binary Search Tree
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    //insert method
    insert(value) {
      //made a new node
      //instantiated Node
      const newNode = new Node(value);
      //if root is null
      if (this.root === null) {
        //newNode which we created will be the root
        this.root = newNode;
        //currentNode equals to root node
        //which we made using let keyword
      } else {
        let currentNode = this.root;
        //to keep running the loop
        //we use while loops in tree ds
        while (true) {
          //if the value is less than currentNode value 
          if (value < currentNode.value) {
            //Left
            //if left is empty or nothing is there
            if (!currentNode.left) {
              //newNode will be in the left node
              currentNode.left = newNode;
              //return curretnNode
              return this;
            }
            //place it in the left side of the tree
            currentNode = currentNode.left;
          } else {
            //else place it in the right side
            //Right
            //if right side is empty or nothing is there
            if (!currentNode.right) {
              //currentNode = newNode
              currentNode.right = newNode;
              //return currentNode
              return this;
            }
            //place the item in the right side
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value) {
      //Code here
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  // tree.insert(4)
  // tree.insert(6)
  // tree.insert(20)
  // tree.insert(170)
  // tree.insert(15)
  // tree.insert(1)
  JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  