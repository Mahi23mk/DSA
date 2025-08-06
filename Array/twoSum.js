var twoSum = function(nums, target) {
  const map = {};

  for(let i=0; i<nums.length; i++){
    const val = map.hasOwnProperty(target - nums[i]);
    if(val){
        return [i, map[target - nums[i]]]
    }
        map[nums[i]] = i;    
    
  }  

  return [-1,-1];
};