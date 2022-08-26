var c = {name : "athena"};

function swap(feline){
    feline.name = "wild";
    feline = {name: "tabby"};
}

swap(c);
console.log(c.name)