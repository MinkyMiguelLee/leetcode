/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    while(k > 0){
        nums.unshift(nums[nums.length - 1]);
        nums.pop();
        k--;
    }        
};