function validAnagram (text1, text2) {
    // false if lengths are not equal 
    if (text1.length !== text2.length) return false;

    // initialize objects
    const obj1 = {};
    const obj2 = {};

    // fill objects with key (each unique letter) and value (how many times it appears)
    for (let t of text1) obj1[t] ? obj1[t]++ : obj1[t] = 1;
    for (let t of text2) obj2[t] ? obj2[t]++ : obj2[t] = 1;

    // compare these two objects by keys and values
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}