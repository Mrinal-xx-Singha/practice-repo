const numbers = [99,44,6,2,1,5,63,87,283,4,0];



function SelectionSort(numbers) {
let length = numbers.length;
for(let i=0;i<length;i++){
    let min  = 1;
    let temp = numbers[i];
    for(let j=i+1;j<length;j++){
        if (numbers[j]>numbers[min]){
            // find the smallest number and make it the smallest number
            // swap it with the first number
            min = j;


        }
    }
    numbers[j]
}

}
SelectionSort(numbers);
console.log(numbers);