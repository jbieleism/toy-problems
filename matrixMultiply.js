function multiplicationMatrix(factors){

  let matrix = [];
  factors.forEach((index) => {
    var row = [];
    for (var i = 0; i < factors.length; i++){
      row.push(index*factors[i])
    }
    matrix.push(row)
  })
  return matrix;
}