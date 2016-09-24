//Living Color - Mitis
function evenOccurrence(array){
  let result;
  let counter = {};
  for (let i = 0; i < array.length; i++){
    let curVal = array[i];
    if (counter[curVal] === undefined){
      counter[curVal] = 1
    }else{
      counter[curVal] += 1;
    }
  }
  for (let key in counter){
    if (counter[key]%2===0){
      result = key;
      if (Number(result)){
        return Number(result);
      }else{
        return result
      }
    }else{
      result = null;
    }
  }
  return result;
}