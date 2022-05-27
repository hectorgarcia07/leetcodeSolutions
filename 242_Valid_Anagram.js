/*
Solution to 
https://leetcode.com/problems/valid-anagram/
Run time: O(n)
Space: O(n)
*/
var isAnagram = function(s, t) {
  if(s.length != t.length){
    return false
  }

  let map = new Map()

  for(let i = 0, len = s.length; i < len; i++){
    if(map.has(s.charAt(i))){
      map.set( s.charAt(i), map.get(s.charAt(i)) + 1 )
    }else{
      map.set( s.charAt(i), 1 )
    }
  }
  
  for(let i = 0, len = s.length; i < len; i++){
    if(map.has(t.charAt(i))){
      if(map.get(t.charAt(i)) > 1){
        map.set( t.charAt(i), map.get(t.charAt(i)) - 1 )
      }
      else{
        map.delete( t.charAt(i) )
      }
    }else{
      return false
    }
  }

  return map.size == 0 ? true : false  
};
console.log(isAnagram('rat', 'car'))