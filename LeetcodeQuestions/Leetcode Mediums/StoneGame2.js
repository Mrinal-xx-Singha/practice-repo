// Alice and Bob continue their games with piles of stones.  There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  The objective of the game is to end with the most stones. 

// Alice and Bob take turns, with Alice starting first.  Initially, M = 1.

// On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).

// The game continues until all the stones have been taken.

// Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

 

// Example 1:

// Input: piles = [2,7,9,4,4]
// Output: 10
// Explanation:  If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 piles in total. If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger. ]

/*
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const memo = new Map();
    const sums = new Array(n).fill(0);


    sums[n-1] = piles[n-1];

    for(let i=n-2;i>=0;i--){
        sums[i] = sums[i+1] + piles[i]; //[1]
    }
    return findMax(0,1);

    function findMax(index,M){
        const Key = `${index} #${M}`;


        //base case

        if(n-index <=2 * M) return sums[index]; //(3)
        if(memo.has(Key)) return memo.get(Key);
        let res = Number.MIN_SAFE_INTEGER;
        for(let x=1; x <= 2 * M ;x++){
            const newM= Math.max(x, M);
            res = Math.max(res, sums[index] - findMax(index + x, newM));
        }
        memo.set(Key, res);
        return res;
    }
};