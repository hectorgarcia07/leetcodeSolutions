var minSubArrayLen = function(target, nums) {
    if(nums.length < 2)
        return 0
    
    let p1 = 0
    let p2 = 1
    let min_len = Infinity
    let cur_sum = nums[0]

    for(let i = 0; i < nums.length; i++){
        while(cur_sum >= target){
            if(min_len > (p2 - p1) ){
                min_len = p2 - p1
            }
            cur_sum -= nums[p1]
            p1++
        }
        cur_sum += nums[p2]
        p2++
    }

    return min_len == Infinity ? 0 : min_len
};