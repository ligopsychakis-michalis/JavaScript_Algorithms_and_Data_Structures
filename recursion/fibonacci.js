function fibonacci(nth) {  // returns the nth number of fibonacce sequence  
    let arr = [0, 1];
    
    function helper() {
        if ((arr.length - 1) === nth) return;
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        helper();
    }
    helper();
    
    return arr[arr.length - 1];
}

// fibonacci(4) -> 3
// fibonacci(10) -> 55