// Hint:

// #1.
// Think of model of linked list, and algorithm of cycle detection.
// A common and practical one is Tortoise and Hare algorithm, also known as Floyd's algorithm.

// #2.
// Convert this challenge into cycle detection in linked list, and locating of start node of cycle.

// Each array cell denotes a node in linked list.
// And the value of each array cell points to the next node in linked list.

// Finally, what we want to know is the duplicate number, which also is the start node of cycle, and vice versa.

// We take the demo input as example, please refer to the diagram as following.

// #3.

// Remeber that description asks us not to modify the array.
// (assume the array is read only).

// Illustration:

// Input:
// nums = [1,3,4,2,2]
// ------------------------------------------
var findDuplicate = function(nums) {
    
    // start hopping from Node_#0
    let [slow, fast] = [0,0];
    
    // for locating start node of cycle
    let check = 0;
    
    // Step_#1
    // Cycle detection
    // Let slow jumper and fast jumper meet somewhere in the cycle
    
    while( true ){
        
        // slow jumpper hops 1 step, while fast jumpper hops two steps forward
        slow = nums[ slow ];
        fast = nums[ nums[ fast ] ];
        
        if( slow == fast ){
            break;
        }
    }
    
    // Step_#2
    // Locate the start node of cycle (i.e., the duplicate number)
    while( true ){
        
        slow = nums[ slow ];
        check = nums[ check ];
        
        if( slow == check ){
            break;
        }
    }
    
    return check;
    
};