function bubbleSort (arr) {
    let swapedOnce;

    for (let i = arr.length - 1; i > 0; i--) {
        swapedOnce = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapedOnce = true; 
            }
        }
        if (!swapedOnce) break;
    }

    return arr;
}

// console.log(bubbleSort([40, 70, 10, 80, 90, 20, 60]));
// console.log(bubbleSort([6, 5, 3, 800, 224, 57, 322, 0]));
// console.log(bubbleSort([12, 35, 77, 2, 46, 7, 22, 4]));
// console.log(bubbleSort([90, 33]));
// console.log(bubbleSort([100]));

// Big O -> O(n^2)