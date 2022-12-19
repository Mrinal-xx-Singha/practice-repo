// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

// Choosing any x with 0 < x < n and n % x == 0.
// Replacing the number n on the chalkboard with n - x.
// Also, if a player cannot make a move, they lose the game.

// Return true if and only if Alice wins the game, assuming both players play optimally.

 

// Example 1:

// Input: n = 2
// Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.


/*
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    let winArray = new Array(N+1).fill(false);
    /** This array represents whether a person will win or not with this current value
     */
    
    for (let i = 1; i <= N; i++) {
        for (let x = 1; x <= i/2; x++) {
            if(i % x === 0 && winArray[i - x] === false) {
                /** Here we check if the current x is the divisor or not 
                 * also if current turn is of Alice and [i - x] would be the
                 * the turn of Bob and that has to be false for Alice to win
                 */
                winArray[i] = true;
                break;
            }
        }
    }
    return winArray[N];
};
4
4

