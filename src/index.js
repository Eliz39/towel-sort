
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var result = [];
    if (matrix === undefined || matrix.length === 0) { return []}
    else {
      var max = matrix[0].length -1;

    // Grab the first row | result.push.apply(result,array[0])
    for (var i=0; i<=max; i++){
        result.push(matrix[0][i]);
    }

    // Grab the last column
    for (var i=1; i< max; i++){
        result.push(matrix[i][max]);
    }
    // Grab the last row
    for (var i=max; i>=0; i--){
        result.push(matrix[max][i]);
    }

    // Grab the first column
    for (var  i=max-1; i> 0; i--){
        result.push(matrix[i][0]);
    }

    subarray = [];
    // Form the inner matrix
    for (var i=1; i<max; i++){
        subarray.push(matrix[i].splice(1,max-1));
    }

    //call it recursively
    result = result.concat( towelSort(subarray) );


}
return result;
}


