function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (Object.hasOwn(map, complement)) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return [];
}

// Example
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
// [0, 1]
