// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".


/*
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    const map = new Map()
    for(const path of paths){
        map.set(path[0],map.has(path[0]) ? 0 : 1)
        map.set(path[1],map.has(path[1]) ? 0 : -1)
    }
    for(const item of map){
        if (item[1] === -1) return item[0]
    }
};