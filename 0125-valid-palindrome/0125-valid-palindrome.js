/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase()

    str=str.replace(/[^a-z0-9]/g,"")

    let rev = str.split("").reverse().join("")

    if(str===rev){
        return true
    }
    return false
};