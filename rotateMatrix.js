//St.Elmo's Fire - John Parr
function rotateMatrix(matrix){
  var rotaMatrix = [];
  for(var j = 0; j < matrix.length; j++){
    var row = [];
    for (var i = matrix.length - 1; i >= 0; i--){
      row.push(matrix[i][j])
    }
    rotaMatrix.push(row)
  }
  return rotaMatrix;
}
