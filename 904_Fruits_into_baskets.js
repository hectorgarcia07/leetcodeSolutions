var totalFruit = function(fruits) {
    let a = 0
    let b = 0
    let max_len = 0

    let set = new Map()
    
    while(b < fruits.length ){        
        set.set(fruits[b], set.get(fruits[b]) + 1 || 1 )

        while(set.size > 2){

            set.set(fruits[a], set.get(fruits[a]) - 1 )
            
            if(set.get(fruits[a ]) == 0){
                set.delete(fruits[a ])
            }
            a++
        }
        max_len = (max_len <( b - a) + 1) ? ((b - a) + 1) : max_len
        b++

    }
    return max_len
};