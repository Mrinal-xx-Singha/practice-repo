// Sorting in javascript
// O(n log n)


// not the most efficient 
const numbers = [99,44,6,2,1,5,63,87,283,4,0];

function bubbleSort(numbers){
const length = numbers.length;
    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            if(numbers[j] > numbers[j+1]){
            // swap numbers
                //made a temporary variable  
                let temp = numbers[j];
                // swapping operation
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
}
// call the function
bubbleSort(numbers);
// display the number
console.log(numbers);
