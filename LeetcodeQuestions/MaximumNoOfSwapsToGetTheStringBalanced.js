/**
 * @param {string} s
 * @return {number}
 */
 var minSwaps = function(s) {
    let stk =[]
    for(let i  of s ){
        if(stk && i == "]" ){
            stk.pop()
        }else if(i === "["){
            stk.push(i)
        }
    }
    return (stk.length) /2
};