// [
//  [ 1, 2, 3, 4, 5 ],
//  [ 6, 7, 8, 9, 10 ],
//  [ 11, 12, 13, 14, 15 ],
//  [ 16, 17, 18, 19, 20 ],
//  [ 21, 22, 23, 24, 25 ]
// ]


//should output

//[ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]


var myMatrix = [
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ]
]




function spiralTraversal(matrix){
  var spiral = [];

  spiral.push(matrix.shift());

  matrix.forEach(function(row){

    var lastIdx = row.length;

    console.log(row[5])
//    spiral.push(matrix.pop(lastIdx))
  })
  //rotate matrix counter-clockwise



  return spiral;
}



console.log(spiralTraversal(myMatrix))















