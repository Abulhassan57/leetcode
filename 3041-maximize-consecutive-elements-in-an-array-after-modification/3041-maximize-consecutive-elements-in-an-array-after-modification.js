/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function(nums) {
    nums.sort((a,b)=>a-b);

   let dp = new Map();
    let ans = 0;

    for (let num of nums) {
        let len = (dp.get(num - 1) || 0) + 1;

        let newLen = (dp.get(num) || 0) + 1;

        dp.set(num, Math.max(dp.get(num) || 0, len));
        dp.set(num + 1, Math.max(dp.get(num + 1) || 0, newLen));

        ans = Math.max(ans, len, newLen);
    }


    return ans;
};