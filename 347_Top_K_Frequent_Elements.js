/*
Solution for
https://leetcode.com/problems/top-k-frequent-elements/
Runtime: O(n+mlogm) where n is the nums and mlogm is the sorting time to sort arr
Space: O(n) 
*/
/* var topKFrequent = function(nums, k) {
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
} */

//New solution is O(n)
var topKFrequent = function(nums, k) {
  let map = new Map()
  let arr = Array.from(Array(nums.length + 1), () => [])

  //map all the frequency of numbers
  for(let num of nums){
    if(map.has(num)){
      map.set(num, map.get(num) + 1)
    }else{
      map.set(num, 1)
    }
  }

  //bucket sort the number of frequencies
  map.forEach((val, key) => {
    arr[val].push(key)
  })
  
  let answer = []
  //find the k number of frequencies
  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i].length != 0){
      for(let num of arr[i]){
        answer.push(num)
        if(answer.length == k){
          return answer
        }
      }
    }
  }
}

console.log(topKFrequent([1], 1))