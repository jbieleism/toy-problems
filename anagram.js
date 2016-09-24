function allAnagrams(string){
  var result = [];
  var splitString = string.split("");
  function recurse(){
    var resultString = "";
    if (resultString.length === splitString.length){
      if (resultString.indexOf(result) === -1){
        result.push(result);
        return;
      }
    }
    for(var i = 0; i < splitString.length; i++){
      var start = splitString[i];
      var resultString = resultString.concat(start)
      var remaining = splitString.slice(i);

      console.log(start, "our starting character")
      console.log(resultString, "our current result string")
      console.log(remaining, "our remaining characters")


    }
    console.log(resultString, "our final result string")
  }
  recurse()
}



allAnagrams("Hello")














// function allAnagrams(string){
//   var result = [];
//   var splitString = string.split("");
//   function recurse(start, remaining){
//     var resultString = "";
//     if (resultString.length === splitString.length){
//       console.log("Length met!")
//       if (resultString.indexOf(result) === -1){
//         result.push(result);
//       }
//       return;
//     }
//     for(var i = 0; i < splitString.length; i++){
//       var start = splitString[i];
//       resultString = resultString.concat(start)
//       var remaining = splitString.slice();
//       console.log(resultString)
//     }
//     recurse(start, remaining);
//     console.log(resultString, "our final result string")
//   }
//   recurse(result, splitString)
// }



// allAnagrams("Hello")