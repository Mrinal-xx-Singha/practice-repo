// Memoization



/*let calculations = 0;
function fibonachi(n){
    calculations++
    if(n < 2 ){
        return n;
    }
    return fibonachi(n-1) + fibonachi(n-2);
}

console.log(fibonachi(2)); */
// ---------------------------------------------
// Memoization and recursion

 function fibonachi(){
    let cache={};
    return function fib(n){
        if(n in cache){
            return cache[n];
        } else {
            if(n >2 ){
                return n;
            }else{
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

const firstfib = fibonachi();
console.log('DP',firstfib(10));




