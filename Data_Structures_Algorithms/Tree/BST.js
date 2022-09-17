// Binary Search Treee
class Node {
    // made right left and value 
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
// created a class named binarysearchtree
class BinarySearchTree {
    constructor() {
        // root node is empty 
        this.root = null;
    }
    // then insert value 
    insert(value){
        // created a new node which has node instances c
        const newNode = new Node(value);
        // if the root node is empty 
        if(this.root === null){
            // then the new node is equal to the root node 
            this.root = newNode;
        }else{
            // else currentNode = root node 
            let currentNode = this.root;
            // while is used in making tree 
            while(true){
                // kkep looping untill the value is less than the value of currentNode 
                if(value < currentNode.value){
                    // left

                    // check if there is a curreent node. left 
                    if(!currentNode.left){
                        // if there is nothing then currentNode.left is equal to the newNode 
                        currentNode.left = newNode;
                        // we have to stop the loop or else it will loop forever
                        return this;
                    }
                    // else make the current node currentNode.left
                        currentNode = currentNode.left;


                        // else check if there is any currentNode.right present
                } else {

                    // right


                    // if there is no currentNode.right 
                    if(!currentNode.right){
                        // make the currentNode.right the new node
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }

    }
    lookup(value){

    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(1);
console.log(tree);