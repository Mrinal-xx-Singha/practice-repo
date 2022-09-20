// first recurring charaacter
// O(n^2)
function firstRcharacter(input){
    for(let i=0;i< input.length;i++){
        for(let j=i+1;i< input.length;j++){
        if(input[i] === input[j]) {
            return input[i];
            }
        }
    }
    return undefined;
}
// O(n)
function firstRcharacter2(input){
    let map ={};
    for(let i=0;i<input.length;i++){
        if(map[input[i]] !==undefined){
            return input[i]
        } else {
            map[input[i]] = i;
        }
        console.log(map)
    }
    return undefined;
}

console.log(firstRcharacter2([2,5,1,2,3,5,1,2,4]));