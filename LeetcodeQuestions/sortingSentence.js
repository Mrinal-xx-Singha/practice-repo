/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    return s.split(' ')
      .sort((a,b) => a[a.length-1] - b[b.length-1])
      .map((word) => word.slice(0, word.length-1))
      .join(' ');
};

// --------------------------------------------------------------------------------------------------------------
/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let str=s.split(' ')
    let arr=[]
    for(let i=0;i<str.length;i++){
        arr[str[i].slice(-1)-1]=str[i].slice(0,-1)
    }
    return arr.join(' ')
};