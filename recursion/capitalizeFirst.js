function capitalizeFirst(arr) {
    const result = [];
    
    function helper(helpArr) {
        if (helpArr.length === 0) return;
        result.push(helpArr[0][0].toUpperCase() + helpArr[0].slice(1));
        helper(helpArr.slice(1));
    }
    helper(arr);
    
    return result;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']