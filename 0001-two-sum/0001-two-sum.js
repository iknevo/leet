/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i]
        if (comp in seen) {
            return [seen[comp], i]
        }
        seen[nums[i]] = i
    }

};