// in array inserts and delets are onabort(n)

const strings = ['a','b','c','d'];

console.log(strings[2])
//methods in arrays
//push
//add items in the end of an array o(1) operation
strings.push('e')
//pop()
//removes the last item from the array
strings.pop(); //o(1) time complexity
//unshift()
// adds item at the begining of the array
strings.unshift('x'); //O(n) //iteration
//splice()
//adds item at the middle of an array
//splice takes three parameters one is start
//second is delete and third is insertion
strings.splice(2,0,'alien')
console.log(strings);
