//revserse word in array


var reverseWords = function(s) {
    // made a new array
    const resArr = []
    // split s
    const splitS = s.split(' ')
    // iterated over splitS
    for (let i = 0; i < splitS.length; i++){
        // 
        const word = splitS[i]
        resArr.push(word.split('').reverse().join(''))
    }
    return resArr.join(' ')
}