function isSubsequence(str1, str2) {
    let p1 = 0;
    
    for (let p2 = 0; p2 < str2.length; p2++) {
        if (str2[p2] === str1[p1]) p1++;
    }
    
    return p1 === str1.length;
}