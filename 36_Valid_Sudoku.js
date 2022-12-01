var isValidSudoku = function(board) {
  //check to see if the horizontal row is valid.
  for(let row of board){
    let set = new Set()
    for(let cell of row){
      //if number hasn't been added to the set, add it
      //otherwise return false since numbers should be 0-9 and not duplicated
      if(cell != '.' && set.has(cell)){
        return false
      }
      set.add(cell)
    }
  }

  //itterate over the columns 
  for(let i = 0; i < 9; i++){
    let set = new Set()

    //if the columns find a duplicate number, return false
    //otherwise add it to the set
    for(let j = 0; j < 9; j++){
      if(board[j][i] != '.' && set.has(board[j][i])){
        return false
      }
      set.add(board[j][i])
    }
  }

  //itterate over each 3 * 3 cell and if there are duplicate
  //return false
  let k
  for(let i = 0; i < 3; i++){
    let set = new Set()
    k = 1
    let pos = 0
    for(let j = 0; j < 3 * k; j++){
      if(board[i][pos] == '.' && set.has(board[i][pos])){
        return false
      }
      set.add(board[i][pos])
      console.log(board[i][pos], pos)
    }
    pos = 
    k++
  }

  /* for(let i = 3; i < 6; i++){
    let set = new Set()
    k = 1
    for(let j = 0; j < 3 * k; j++){
      let pos = j + k * 3
      if(board[i][pos] == '.' && set.has(board[i][pos])){
        return false
      }
      set.add(board[i][pos])
    }
    k++
  } */


  return true
};
i = 0
0 - 2, 3 - 5, 6 - 8
console.log(isValidSudoku(
  [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]
))
