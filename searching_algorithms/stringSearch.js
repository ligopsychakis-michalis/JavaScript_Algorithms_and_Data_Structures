function stringSearch (str, value) {
    if (value.lenght > str.length) return false;
    
    for (let i = 0; i < (str.length - value.length + 1); i++) {
        if (str.slice(i, i + value.length) === value) return true;
    }

    return false;
}

// console.log(stringSearch('hello world', 'w'));  // true
// console.log(stringSearch('hello world', 'wor')); // true
// console.log(stringSearch('hello world', 'ello')); // true
// console.log(stringSearch('hello world', 'yo'));  // false