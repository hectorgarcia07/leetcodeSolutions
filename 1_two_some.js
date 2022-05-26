/*
Solution to problem:
https://leetcode.com/problems/two-sum/submissions/
Time: O(n)
Space: O(n)
*/
var twoSum = function(nums, target) {
  const map = new Map()//the value will be key and index will be the value
  let index;

  for(let i = 0; i < nums.length; i++){
    index = map.get( target - nums[i] )
    if( typeof index == 'number' ){
      return [i, index]
    }else{
      map.set( nums[i], i )
    }
  }
};

console.log(twoSum([3,3], 6))