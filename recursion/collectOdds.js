// solution with helper recursion function
function collectOdds (arr) {
    const result = [];

    function helper (helperArr) {
        if (helperArr.length === 0) return;

        if (helperArr[0] % 2 !== 0) result.push(helperArr[0]);

        helper(helperArr.slice(1));
    }

    helper(arr);

    return result;
}

// solution with pure recursion function
function collectOddsPure (arr) {
    let result = [];

    if (arr.length === 0) return [];

    if (arr[0] % 2 !== 0) result.push(arr[0]);

    result = [...result, ...collectOddsPure(arr.slice(1))];
    return result;
}

console.log(collectOdds([0,1,2,3,4,5,6,7,8,9]));
console.log(collectOddsPure([0,1,2,3,4,5,6,7,8,9]));