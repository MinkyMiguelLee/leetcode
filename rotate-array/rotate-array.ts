/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    // 뒤에서부터 k번째 element가 0번이 됨.
    if(nums.length > 1 && k > 0){
        let startIdx = nums.length >= k ? nums.length - k : nums.length - k % nums.length;
        const tmpArr = [...nums];
        nums.forEach((ele: number, idx: number) => {
            nums[idx] = tmpArr[startIdx];
            if(startIdx < nums.length - 1){
                startIdx += 1;
            }else{
                startIdx = 0;
            }
        })
    }
        
};