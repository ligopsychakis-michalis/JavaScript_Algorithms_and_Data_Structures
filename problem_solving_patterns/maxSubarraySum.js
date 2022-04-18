function maxSubarraySum(arr, num){
    if (num > arr.length) return null;
    let maxSum;
    let windowSum = 0;
    
    // init values
    for (let i = 0; i < num; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // move sliding window and check for max sum
    for (let i = num; i < arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i - num];
        if (windowSum > maxSum) maxSum = windowSum;
    }
    
    return maxSum;
  }