var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "")
    let p1 = 0, p2 = string.length - 1

    while( p1 < p2 ){
        if(string[p1] !== string[p2]){
            return false
        }

        p1++
        p2--
    }

    return true
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))