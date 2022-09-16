/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    //     made an empty new array
      const target = new Array(s.length);
    //     iteratted through s.length
        for(let i=0;i<s.length;i++){
    //         target ar indices of i is =s[i];
            target[indices[i]]=s[i];
        }
    //     join it to make it a string 
        return target.join('');
    };