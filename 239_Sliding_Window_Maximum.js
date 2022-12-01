var maxSlidingWindow = function(nums, k) {
    const window = []
    const windowItterator = nums.length - k + 1
    const result = []
    let windowCount = 0

    if(k > nums.length){
        k = nums.length
    }

    for(let i = 0, len = nums.length; i < len; i++ ){
        console.log(i)

        if(windowCount < k){
            if(!window.length){
                window.push(i)
            }
            else{
                while(nums[window[window.length - 1]] < nums[i]){
                    window.pop()
                }  
                window.push(i)
            }
            console.log('window', window)

            windowCount++
        }
        else{
            console.log('window', window)

            //add the largest to the result array
            result.push(nums[window[0]])

            if(window[0] < (i - 2)){
                window.shift()
            }

            while(nums[window[window.length - 1]] < nums[i]){
                window.pop()
            }  
            window.push(i)
        }
    }
    console.log(nums[window[0]])
    result.push(nums[window[0]])
    console.log(result)
};

maxSlidingWindow([1], 3)