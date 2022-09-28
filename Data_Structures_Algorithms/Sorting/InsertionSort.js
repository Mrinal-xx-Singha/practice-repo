// Insertion Sort

const number=[99,44,6,2,1,5,63,87,283,4,0];

function insertionSort(array){
    const length =array.length;
    for(let i=0;i<length;i++){
        console.log(i,"i");
        if(array[i]<array[0]){
            console.log(array.unshift(array.splice(i,1)[0]));
        } else {
            for(let j=1;j<i ;j++){
                console.log(j,"j");
                if(array[i] > array[j-1] && array[i] < array[j]){
                    console.log(array.splice(j,0,array.splice(i,1)[0]));
                }
            }
        }
    }
}
insertionSort(number);
console.log(number);


// Time Complexity - o(n)
// space complexity -o(1)