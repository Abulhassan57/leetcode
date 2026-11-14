/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();

    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    if (str === reverse) {
        return true;
    }
    else {
        return false;
    }
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

};