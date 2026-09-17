/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index=-1
    let left=0;
    let right=nums.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]==target){
            index=mid
        }
        if(nums[mid]<=target){
            left=mid+1
        }else {
            right=mid-1
        }
    }
    return index
};