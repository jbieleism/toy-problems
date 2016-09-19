//We Can Make The World Stop - The Glitch Mob
const translateRomanNumeral = (numeral) => {
  let splitz = numeral.split("");
  let total = 0;
  let numVal = (val)=>{
    return DIGIT_VALUES[val];
  }
  for (let i = 0; i < splitz.length; i++){
    let curVal = numVal(splitz[i]);
    if (curVal == undefined){
      return "null";
    }
    if ( curVal < numVal(splitz[i+1]) ){
      total = total - curVal;
    }
    else{
    total += curVal;
    }
  }
  return total
}