
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix){
        return [];
    }
    var output = [];
    for (var i = 1; i < matrix.length; i += 2) {
      matrix[i].reverse();
    }

    output = output.concat(...matrix);
    return output;
};


