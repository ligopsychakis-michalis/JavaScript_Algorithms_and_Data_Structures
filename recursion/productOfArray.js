function productOfArray(arr) {
    function helper(ind) {
        if (ind === arr.length) return 1;
        return arr[ind] * helper(++ind);
    }
    
    return helper(0);
}

// productOfArray([1, 2, 3]) -> 6
// productOfArray([1, 2, 3, 10]) -> 60