/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let count = {};

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === undefined) {
            count[s[i]] = 1;
        } else {
            count[s[i]]++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (count[t[i]] === undefined || count[t[i]] === 0) {
            return false;
        }

        count[t[i]]--;
    }

    return true;

};