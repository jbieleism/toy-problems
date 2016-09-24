var commonCharacters = (string1, string2) =>{
  var results = "";

  var split1 = string1.split("");
  var split2 = string2.split("");
  split1.map(function(char){
    for (var i = 0; i < split2.length; i++){
       if (char === " "){
          char = "";
        }
      if (char === split2[i]){
        results += char
      }
    }
    return results;
  });
  var finalAnswer = ""
  var truther = {};
  results.split("").forEach(function(char){
    if (truther[char] === undefined){
      truther[char] = true;
    }
  });
  for(var key in truther){
    finalAnswer+=key
  }
  return finalAnswer;
}





console.log(commonCharacters("What is love?", "Baby don't hurt me"));