class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].psuh([key, value]);
        return this;
    }

    get(key) {
        let index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][0] === key) {
                    return this.dataMap[index][1];
                }
            }
        }
        return undefined
    }

    keys() {
        const allKeys = [];
        for(let i = 0; i < this.dataMap.length; i++){
            if(this.dataMap[i]) {
                for(let j=0; j < this.dataMap[i].length; j++){
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys;
    }
}