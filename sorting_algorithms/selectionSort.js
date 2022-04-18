function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }

        if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
    }    

    return arr;
}

// console.log(selectionSort([40, 70, 10, 80, 90, 20, 60]));
// console.log(selectionSort([6, 5, 3, 800, 224, 57, 322, 0]));
// console.log(selectionSort([12, 35, 77, 2, 46, 7, 22, 4]));
// console.log(selectionSort([90, 33]));
// console.log(selectionSort([100]));

// Big O -> O(n^2)