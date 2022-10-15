


// O(n)
let beast = ['centaur','godzilla','Mosura','Minataur','Hydra','Nessie'];

console.log(beast.indexOf('godzilla'));

beast.findIndex(function(item){
    return item === 'godzilla';
});

beast.find(function(item){
    return item === "godzilla";
})
beast.includes('godzilla');

