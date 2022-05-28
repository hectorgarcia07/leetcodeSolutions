/*
Solution for
https://leetcode.com/problems/top-k-frequent-elements/
Runtime: O(n+mlogm) where n is the nums and mlogm is the sorting time to sort arr
Space: O(n) 
*/
var topKFrequent = function(nums, k) {
  let map = new Map()
  let answer = []

  for(let num of nums){
    if(map.has(num)){
      map.set(num, map.get(num) + 1)
    }else{
      map.set(num, 1)
    }
  }

  let arr = [...map]
  arr.sort((a, b) => b[1] - a[1])
  console.log(arr)
  for(let i = 0; i < k; i++){
    answer.push(arr[i][0])
  }
  console.log(map)
  return answer
}

console.log(topKFrequent([3,0,1,0], 1))