
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0) { return []}
    else {
      for ( let i = 1; i < matrix.length; i+2) {
            let newArr =  matrix[i]
            let reverseMatrix = newArr.reverse()
            matrix.splice(i, 1, reverseMatrix )
          }
        var merged = [].concat.apply([], matrix);

    }
    return merged
    }



