function linearSearch(arr, value){
    let result = -1;
    for (let i in arr) {
        if (arr[i] === value) {
            result = parseInt(i);
            break;
        }
    }
    
    return result;
}

// Big O -> O(n)
