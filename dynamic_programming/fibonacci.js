const storage = {};

// store the values in order to avoid duplication in calculations - Memoization
// Overlapping Subproblems
function fibonacciMemoization(n) {
    if (n < 1) return;

    if (n <= 2) {
        return 1;
    } else{
        const result = storage[n] || (fibonacciMemoization(n-1) + fibonacciMemoization(n-2));
        if (!storage[n]) storage[n] = result;
        return result;
    } 
    
}


// bottom to top approach - Tabulation
function fibonacciTabulation(n) {
    if (n <= 0) return;
    if (n < 3) return 1;
    let array = [0, 1, 1];

    while (n >= array.length) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }

    return array[array.length - 1];
}

const d1 = new Date();
console.log(fibonacciMemoization(100));
const d2 = new Date();
console.log(`duration: ${(d2-d1)/1000}s`);

const d3 = new Date();
console.log(fibonacciTabulation(100));
const d4 = new Date();
console.log(`duration: ${(d4-d3)/1000}s`)