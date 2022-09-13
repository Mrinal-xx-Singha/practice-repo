var kidsWithCandies = function(candies, extraCandies) {
    var max = Math.max(...candies); //store the maximum value of all candies in a variable max
       var res = []; //maintain a result array to store if that index can form the max value consuming all extraCandies
       for(var i =0;i<candies.length;i++){
       //check if ith index is greater than or equal to max
           if(candies[i]+extraCandies >= max){
               //if so push true
               res.push(true);
           }else{
               //else push false
               res.push(false);
           }
       }
       return res;
   };
   
// Optimal Solution

var kidsWithCandies = function(candies, extraCandies) {
    // made an empty array
    const res = [];
    // found out the maxim array
   const max = Math.max(...candies);
//    looped for the length of candies
   for(let i=0; i< candies.length; i++){
    // made a variable named csum = candies[i] + extraCandies ;
    // added the extraCandies to the array
       const csum = candies[i] + extraCandies;
    //    if the csum is greater than or equal to the max number
       if(csum >= max){
        // push true 
           res[i]= true;
       } else{
        // else push false 
           res[i]= false;
       }
   }
//    return the result
   return res;
};







