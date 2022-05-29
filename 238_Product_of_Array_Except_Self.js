/*
Solution to 
https://leetcode.com/problems/product-of-array-except-self/
Speed: O(n)
Size: O(n)
*/
var productExceptSelf = function(nums) {
  let prefix = Array(nums.length)
  let postfix = Array(nums.length)
  let answer = Array(nums.length)
  let len = nums.length

  //calculates the prefix
  for(let i = 0; i < len; i++){
    if(i == 0){
      prefix[i] = nums[i]
    }else{
      prefix[i] = prefix[i-1] * nums[i] 
    }
  }

  //calculates post fix
  for(let i = len - 1; i >= 0; i--){
    if(i == len - 1){
      postfix[i] = nums[i]
    }else{
      postfix[i] = postfix[i + 1] * nums[i]
    }
  }
  console.log(prefix, postfix)

  //calculate the postifx and prefix position
  for(let i = 0; i < len; i++){
    if(i == 0){
      answer[i] = postfix[1]
    }else if(i == len - 1){
      answer[i] = prefix[ i - 1 ]
    }else{
      answer[i] = prefix[i - 1] * postfix[i + 1]
    }
  }

  return answer
}

console.log(productExceptSelf([-1,1,0,-3,3]))