function countUniqueValues(arr){  // given a sorted array finds the count of unique values in this array
    // initialize pointers and unique values
    let pointer1 = 0;
    let pointer2 = 1;
    let uniqueValues = arr && arr.length ? 1 : 0;
    
    // loop in array 
    while (pointer2 < arr.length) {
        // if unique value found move pointer1 there
        if (arr[pointer2] !== arr[pointer1]) {
            uniqueValues++;
            pointer1 = pointer2;
        }
        
        // move pointer2 one position forward
        pointer2++;
    }
    
    return uniqueValues;
}