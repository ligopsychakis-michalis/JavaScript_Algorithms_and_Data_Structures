function recursiveRange(num){
    if (num === 1) return 1;
    return num + recursiveRange(--num);
}

// recursiveRange(4) -> 10
// recursiveRange(6) -> 21