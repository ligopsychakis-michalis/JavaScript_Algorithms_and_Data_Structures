function maxSubArraySum(array, num) {
    // initialize variables
    let maxSum = 0;

    // found first maxSum for the num of values we want
    for (let i = 0; i < num; i++) {
        // add only if array has value on that index
        if (!isNaN(array[i])) maxSum += array[i];
    }    

    // set value of current window
    let windowSum = maxSum;

    // move the sliding window by subtract the first index of previous window and add the last index of next window
    for (let i = num; i < array.length; i++) {
        windowSum = windowSum - array[i - num] + array[i];
        if (windowSum > maxSum) maxSum = windowSum;
    }

    return maxSum;
}