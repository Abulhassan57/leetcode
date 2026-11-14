/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        let remaining = target - nums[i];

        if (map.has(remaining)) {
            return [map.get(remaining), i];
        }

        map.set(nums[i], i);
    }
console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));

};