function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            for (let j = 0; j < i; j++) {
                if (arr[i] < arr[j]) {
                    arr.splice(j, 0, arr[i]);
                    arr.splice(i+1, 1);
                    break;
                }
            }
        }
    }

    return arr;
}

// console.log(insertionSort([40, 70, 10, 80, 90, 20, 60]));
// console.log(insertionSort([6, 5, 3, 800, 224, 57, 322, 0]));
// console.log(insertionSort([12, 35, 77, 2, 46, 7, 22, 4]));
// console.log(insertionSort([90, 33]));
// console.log(insertionSort([100]));

// Big O -> O(n^2)