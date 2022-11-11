// Given n pairs of parentheses,
//  write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]


/*
 * @param {number} n
 * @return {string[]}
 */
 const generateParenthesis = (n) => {
    const res =[]
    const go = (l,r,s) =>{
        if(l>r)return
        if(l=== 0 && r ===0){
            res.push(s);
            return;
        }
        if(l > 0)go(l-1,r,s+'(');
        if(r > 0)go(l,r-1,s+')');
    };
    go(n, n, '');
    return res
};