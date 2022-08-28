class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    //O(1)
    _hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash = (hash + key.charCodeAt(i) * i )%
            this.data.length
        }
        return hash;
    }
    //O(1)
    //set method which receives a key and value
    set(key, value){
        //createa variable we wanna store this.data at this.hash(key)
        let address = this._hash(key);
        //if address doesnt exist(if nothing is there) 
        if (!this.data[address]) {
            //simply add the data
            this.data[address] = [];
            //push command
            this.data[address].push([key.value])
            console.log(this.data)
        } 
        //returning always adding key and value
        //else 
        this.data[address].push([key, value])
    }
    //O(1)
    //receive a key
    get(key){
        //black box 
        let address = this._hash(key);
        //pointing to the adress
        const currentBucket = this.data[address];
        console.log(currentBucket)
        //
        if(currentBucket/*.length*/){
            //loop over
            //
            for(let i =0; i <currentBucket.length; i++){
                //i is index zero equals key
                if(currentBucket[i][0] === key){
                    //return currentBucket 1
                    return currentBucket[i][1];
                }
            }
        }
        //because there is nothing in the bucket
        return undefined;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes',1000);
myHashTable.set('apples',54);
myHashTable.get('apples');
