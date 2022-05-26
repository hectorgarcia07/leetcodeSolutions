/*
Solution to 
https://leetcode.com/problems/contains-duplicate/
Time complexity: O(n)
Space Complexity: O(n)
*/
var containsDuplicate = function(nums) {
  const set = new Set()//will store numbers encounterd in set

  //loop throught array until you find a match
  for(let i = 0; i < nums.length; i++){
    if(set.has(nums[i])){
      return true
    }
    set.add(nums[i])
  }
  return false
};

console.log(containsDuplicate( [1,2,3,4] ))