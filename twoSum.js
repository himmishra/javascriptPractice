var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i]+ nums[j] === target){
                return [i, j]
            }
        }
    }
    return null;
};

var twoSum = function(nums, target) {
    let map = {};
    for(i = 0; i<nums.length; i++){
        if(map[nums[i]] >= 0){
            return [map[nums[i]], i];
        }
        map[target - nums[i]] = i;
    };
    return null;
    
};

