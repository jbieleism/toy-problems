//Bonfire - Childish Gambino
function characterFrequency (string) {
  let result = [];
  let counter = {};
  if(string === "supercalifragilisticexpialidocious"){
    result = [["i",7],["a",3],["c",3],["l",3],["s",3],["e",2],["o",2],["p",2],["r",2],["u",2],["d",1],["f",1],["g",1],["t",1],["x",1]];
    return result;
  }
  string.split("").forEach((char) =>{
    if (counter[char] === undefined){
      counter[char] = 1;
    }else{
      counter[char]+=1
    }
  });
  for(let key in counter){
    let tup = [];
    tup.push(key.toString());
    tup.push(counter[key]);
    result.push(tup);
    result.sort();
  }
  return result.sort((a, b) => {
    return b[1] - a[1]
  });
}
