function fibonachi(num){
    if(num <2 ){
        return num;
    }
    return fibonachi(num-1) + fibonachi(num-2)
}
console.log(fibonachi(2))