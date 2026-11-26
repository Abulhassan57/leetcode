/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words=s.trim().split(/\s+/);

    words.reverse();

    let result = words.join(" ")

    return result;
};