function addTo80(n){
    console.log('Long Time')
    return n + 80;
}
let cache = {};
function memoized(n){
    if(n in cache){
        return cache[n];
    }else {
        console.log('Long Time')
        cache[n] = n + 80;
        return cache[n];
    }
}
console.log('1',memoized(5));
console.log('2',memoized(6));