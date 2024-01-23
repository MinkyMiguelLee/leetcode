function removeDuplicates(nums: number[]): number {
    let cnt = 0;
    
    nums.forEach((ele: number, idx: number) => {
        if(nums.indexOf(ele) === idx){
            cnt += 1;   
        }else{
            nums[idx] = undefined;
        }
    });
    
    nums.sort((a: number, b: number) => a - b);
    return cnt;
};