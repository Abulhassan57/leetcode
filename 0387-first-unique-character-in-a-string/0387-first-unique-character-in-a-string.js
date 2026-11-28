/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
     let map = new Map();
    // Step 1: Count frequency of each character
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    // Step 2: Find first non-repeating character
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};