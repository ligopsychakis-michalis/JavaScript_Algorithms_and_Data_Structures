// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
    let result = false;
    
    function helper(ind) {
        if (ind === arr.length) return;
        
        if (cb(arr[ind])) {
            result = true;
            return;
        } else {
            helper(++ind);
        }
    }
    helper(0);
    
    return result;
}
