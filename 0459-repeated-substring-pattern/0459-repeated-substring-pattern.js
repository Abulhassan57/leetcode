/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n = s.length;

    for(let i = 1; i <= n / 2; i++) {

        if(n % i === 0) {

            let sub = s.substring(0, i);
            let result = "";

            while(result.length < n) {
                result += sub;
            }

            if(result === s) {
                return true;
            }
        }
    }

    return false;
};