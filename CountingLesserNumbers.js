class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        //root of the binary search tree;
        this.root = null;
    }
    //helper methods implemented for 1)inserting data 2)getting root node 3)finding smaller values less than a key

    //2. insert(data) : method for inserting data;
    insert(data){
        //creating a node and initializing with data
        var newNode = new Node(data);

        //root is null then node will be added to the tree and made root
        if(this.root === null){
            this.root = newNode;
        }            
        else{
            //find the correct position and insert the node 
            this.#insertNode(this.root, newNode);
        }
    }

    //2. get the root node
    getRootNode(){
        return this.root;
    }

    //3.get the Count of smaller nodes present in the tree
    getCountOfSmallerNodes(key){
        var count = this.#CountOfSmallerNodes(this.root,key);
        return count;
    }

    //Private Method to insert a node at the correct position in a tree
    #insertNode(node,newNode){
        //if data is less than the node, then data move left of the tree
        if(newNode.data < node.data){
            //if left is null insert node here
            if(node.left === null){
                node.left = newNode;
            }else{
                //if left is not null recurse until null is found
                this.#insertNode(node.left, newNode);
            }
        } else {
            // if right is null insert node here
            if(node.right === null){
                node.right = newNode;
            }else{
                //if right id not null recurse until null is found
                this.#insertNode(node.right,newNode);  
            }
        }
    }   

    //Private method for counting the number of smaller nodes less than the key
    #CountOfSmallerNodes(root, key){
        var count = 0;
        if(root == null){
            return 0;
        } else if (root.data < key){
            count++;
            count += this.#CountOfSmallerNodes(root.left,key);
            count += this.#CountOfSmallerNodes(root.right,key);
        } else {
            count += this.#CountOfSmallerNodes(root.left, key);
        }

        return count;
    }
}

// A sample test case for the prolem
var BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var result = BST.getCountOfSmallerNodes(5);
console.log(result);

result = BST.getCountOfSmallerNodes(7);
console.log(result);

result = BST.getCountOfSmallerNodes(9);
console.log(result);

result = BST.getCountOfSmallerNodes(10);
console.log(result);

result = BST.getCountOfSmallerNodes(13);
console.log(result);

result = BST.getCountOfSmallerNodes(15);
console.log(result);

result = BST.getCountOfSmallerNodes(17);
console.log(result);

result = BST.getCountOfSmallerNodes(22);
console.log(result);

result = BST.getCountOfSmallerNodes(25);
console.log(result);

result = BST.getCountOfSmallerNodes(27);
console.log(result);


console.log(BST)
