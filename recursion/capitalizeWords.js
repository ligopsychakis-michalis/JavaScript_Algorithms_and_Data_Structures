function capitalizeWords (arr) {
    const result = [];
    
    function helper(arr) {
        if (arr.length === 0) return;
        result.push(arr[0].toUpperCase());
        helper(arr.slice(1));
    }
    helper(arr);
    
    return result;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
