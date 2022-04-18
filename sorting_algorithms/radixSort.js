function getDigit(number, digit) {
    const str = number.toString();
    let result = str[str.length - digit - 1];
    
    if (result === '-') return '-';
    else return parseInt(result || 0);
}

function maxDigits(array) {
    let result = 0;
    
    array.forEach(num => {
        const numLenght = num.toString().length;
        if (numLenght > result) result = numLenght 
    })

    return result;
}


function radixSort(array) {
    const buckets = [];
    for (let i = 0; i < 11; i++) buckets.push([]);

    for (let i = 0; i < maxDigits(array); i++) {
        for (let num of array) {
            const digit = getDigit(num, i);

            if (digit === '-'){
                buckets[0].push(num);
            } else {
                buckets[getDigit(num, i) + 1].push(num);
            }
        }

        let count = 0;
        for (let j = 0; j < buckets.length; j++) {
            if (j > 0) {
                for (let k = 0; k < buckets[j].length; k++) {
                    array[count] = buckets[j][k];
                    count++;
                }
            } else {
                for (let k = buckets[j].length - 1; k >= 0; k--) {
                    array[count] = buckets[j][k];
                    count++;
                }
            }
            buckets[j] = [];
        }

    }

    return array;
}

// console.log(radixSort([52, 0, -124, -500, 5046, 3]));
// console.log(radixSort([1, 4, 6, 2, 6, 8, 3, 2222, 55667, -200]));
// console.log(radixSort([90, -344, -388, 2000, 44]));

// Big O -> O(nk)
// n -> length of array
// k -> number of digits
// *because of how computers store data, k is equal to logn
// So Big O actually is -> O(n logn)