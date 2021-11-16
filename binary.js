class Node {
    constructor(value){
       this.value= value;
       this.left = undefined;
       this.right = undefined;
    }
 }
 
 class BinarySearchTree{
    constructor(root){
        this.root = root;
    }
 
    add(newNode){
       var currentNode = this.root;
       while(currentNode){
          if(newNode.value < currentNode.value){
             if(currentNode.left == undefined){
                currentNode.left = newNode;
                break;
             }
             else{
               currentNode = currentNode.left;
            }
          }
          else{
             if(currentNode.right == undefined){
                currentNode.right = newNode;
                break;
             }
             else{
               currentNode = currentNode.right;
            }
         }
       }
     }
 }

 
 
var root = new Node(40);
var treeTeam = new BinarySearchTree(root);

var first = new Node(25);
treeTeam.add(first);

var second = new Node(78);
treeTeam.add(second);

var third = new Node(10);
treeTeam.add(third);

var fourth = new Node(65);
treeTeam.add(fourth);

var fifth = new Node(75);
treeTeam.add(fifth);

var sixth = new Node(30);
treeTeam.add(sixth);

console.log(treeTeam);