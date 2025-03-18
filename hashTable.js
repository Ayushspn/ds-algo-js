class HashTables {

    constructor(size) {
        this.data = new Array(size);
    }

    // to make it private property add "_"
    _hash(key) {
        let hash = 0;
        for(let i =0; i< key.length; i++) {
            hash = (hash + key.charCodesAt(i)*i) % this.data.length;
        }
        return hash;
    } // O(1)

    set(key, value) {
        let address = this._hash(key);
         if( ! this.data[address]) {
            this.data[address] = [];
         }
         this.data[address].push([key, value]);
    } // O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i =0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
    } // O(n)-- worts case
}