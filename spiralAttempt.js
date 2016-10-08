function spiralTraversal(matrix){
  var spiral = '';

  //top
  spiral += matrix.shift() + ',';

  //top to bottom
  matrix.forEach((row)=>{
    spiral += row.pop() + ','
  })

  //right to left
  spiral += (matrix[matrix.length-1].reverse())

  //bottom to top
  console.log(matrix)


  //return spiral


}



var myMatrix = [
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ]
  ]





console.log(spiralTraversal(myMatrix))