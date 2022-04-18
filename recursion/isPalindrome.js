// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    let result = true;

    function helper(str) {
        if (!str || str.length === 1) return;

        if (str[0] !== str[str.length - 1]) {
            result = false;
            return;
        } else {
            helper(str.slice(1, str.length - 1));
        }
    }
    helper(str);

    return result;
}
