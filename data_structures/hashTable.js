class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0;
        const prime = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const value = key.charCodeAt(i) - 96;
            total = ((total * prime) + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [[key, value]];
        } else {
            const found = this.keyMap[index].find(item => item[0] === key);

            if (found) found[1] = value;
            else this.keyMap[index].push([key, value]);
        }
    }

    get(key) {
        const index = this.hash(key);
        if (this.keyMap[index]) {
            const found = this.keyMap[index].find(item => item[0] === key);
            if (found) return found[1];    
        }

        return undefined
    }

    keys() {
        const keys = [];
        this.keyMap.forEach(array => {
            if (array) array.forEach(item => {
                if (!keys.includes(item[0])) keys.push(item[0]);
            });
        });

        return keys;
    }

    values() {
        const values = [];
        this.keyMap.forEach(array => {
            if (array) array.forEach(item => {
                if (!values.includes(item[1])) values.push(item[1]);
            });
        });
        
        return values;
    }
}

// const hashTable = new HashTable(13);
// hashTable.set('one', 1);
// hashTable.set('two', 2);
// hashTable.set('three', 3);
// hashTable.set('three', 33);
// console.log(hashTable.get('one'));
// console.log(hashTable.get('three'));
// console.log(hashTable.get('four'));
// console.log(hashTable.keys());
// console.log(hashTable.values());