/*
Solution for:
https://leetcode.com/problems/group-anagrams/
Time: O(n * m)
space: O(n)
*/
var groupAnagrams = function(strs) {
  let map = new Map()

  for(let str of strs){
    let arr = Array(26).fill(0)//will hold the number of occurences of a letter
    
    for(let i = 0; i < str.length; i++){
      //increment the number of letters encountered
      arr[str[i].charCodeAt() - 97] += 1
    }
    let arrToStr = JSON.stringify(arr)

    if(map.has(arrToStr)){
      console.log(map.get(arrToStr))
      map.set(arrToStr, [...map.get(arrToStr), str] )
    }else{
      map.set( arrToStr, [str] )
    }
  }

  return [...map.values()]
};

console.log(groupAnagrams(['a']))