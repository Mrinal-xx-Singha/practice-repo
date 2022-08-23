// function frc(input){
//     for(let i=0;i < input.length; i++){
//         for(let j=i+1;j<input.length; j++){ //i+1 ie we always go right 
//             if(input[i] === input[j]){
//                 return input[i];
//             }
//         }
//     }
//     return undefined;
// }
function frc(input){
    let map = {};
    for(let i=0; i<input.length; i++){
        console.log(map[input[i]])
        if(map[input[i]]){
            return input [i];
        }else{
            map[input[i]] = true;
        }
        console.log(map);
    }
    return undefined;
}


frc([2,5,1,2,3,5,1,2,4])
