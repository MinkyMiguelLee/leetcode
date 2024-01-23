/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let rotNum = k > nums.length ? k % nums.length : k;
    while(rotNum > 0){
        nums.unshift(nums[nums.length - 1]);
        nums.pop();
        rotNum--;
    }        
};