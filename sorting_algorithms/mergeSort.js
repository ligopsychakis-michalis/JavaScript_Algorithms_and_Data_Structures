function merge(arr1, arr2) {
    let [arr, p1, p2] = [[], 0, 0];

    while (arr.length < (arr1.length + arr2.length)) {
        if (arr1[p1] < arr2[p2] || p2 >= arr2.length) {
            arr.push(arr1[p1]);
            p1++;
        } else {
            arr.push(arr2[p2]);
            p2++;
        }
    }

    return arr;
}

// console.log(merge([1, 4, 6, 7, 9, 11, 12], [2, 3, 5, 8, 10]));

function mergeSort(arr) {
    let result = arr.map(item => [item]);

    while (result.length > 1) {
        const mergeResult = [];
        for (let i = 0; i < result.length; i = i+2) {
            mergeResult.push(merge(result[i], result[i+1] || []));
        }
        result = [...mergeResult];
    }

    return result[0];
}

// console.log(mergeSort( Array.apply(null, {length: 100000}).map(Function.call, Math.random) ));
// console.log(mergeSort([40, 70, 10, 80, 90, 20, 60]));
// console.log(mergeSort([6, 5, 3, 800, 224, 57, 322, 0]));
// console.log(mergeSort([12, 35, 77, 2, 46, 7, 22, 4]));
// console.log(mergeSort([90, 33]));
// console.log(mergeSort([100]));


// Big O -> O(n logn)
