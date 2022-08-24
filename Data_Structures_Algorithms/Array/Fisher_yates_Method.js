//Fisher Yates Method
//Sorting the array in random order
const points = [40,100,1,5,25,10];
//for loop looping over points - one index and iterating negative
for(let i = points.length -1; i>0; i--) {
    //Math.floor() function returns the largest interger less than or equal to a given number
    //round off basically
    let j = Math.floor(Math.random() *i)
    //Math.random returns a floating point,pseudo random number
    //in the range 0 to less than 1 
    let k = points[i];
    points[i]=points[j];
    points[j]=k
}
console.log(points)