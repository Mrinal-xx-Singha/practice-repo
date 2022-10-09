class Graph {
    constructor(){
        // Number of nodes
        this.numberOfNodes = 0;
        // adjescent list
        this.adjacentList = {};
    }
    // add vertex using a key named node
    addVertex(node){
        // take the key and make an empty array 
        this.adjacentList[node] = [];
        // increment the no of nodes
        this.numberOfNodes++;
    }
    addEdge(node1,node2){
        // adding the edges 
        this.adjacentList[node1].push(node2);
        // cyclic graph
        this.adjacentList[node2].push(node1);

    }
    
}
const myGraph = new Graph();
myGraph.addVertex()