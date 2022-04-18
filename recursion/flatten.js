function flatten(arrs) {
    let result = [];
    
    function checkIfIsFlatten(arr) {
        let isFlatten = true;
        
        for (let val of arr) {
            if (typeof val !== 'number') {
                isFlatten = false;
                break;
            }
        }
        
        return isFlatten;
    }
    
    function helper(arr) {
        if (checkIfIsFlatten(arr)) {
            result = [...arr];
            return;
        } 
        
        let newArr = [];
        
        arr.forEach(val => {
            if (typeof val === 'number') {
                newArr.push(val);
            } else {
                val.forEach(valIn => newArr.push(valIn));
            }
        });
        helper(newArr);
    }
    helper(arrs);
    
    return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
