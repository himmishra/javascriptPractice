/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for(let i=0; i<nums.length;i++){
        if(map[nums[i]] > 0){
            return true;
        }
        map[nums[i]] = 1;
    }
    return false;
    
};

containsDuplicate([1,2,3,4,1])