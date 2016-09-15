const romanToNumber = (numeral) => {
  let numeralSplit = numeral.split("");

  let extractVal = (val)=>{
    console.log(DV[val])
  }
  for (let i = 0; i < numeralSplit.length; i++){
    extractVal(numeralSplit[i])
  }


}



let DV = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};


romanToNumber("XIV")