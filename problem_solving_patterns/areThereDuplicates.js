function areThereDuplicates(...args) {
    // Two pointers -> O(n)
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    
    return false

    // Or one line solution -> O(1)
    // new Set(args).size returns the count of set's unique values
    // return new Set(args).size !== arguments.length;
}