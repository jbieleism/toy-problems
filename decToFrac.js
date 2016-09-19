var num = 0.345;
function decToFrac (number){
  if (typeof number !== "number"){
    return NaN;
  }
  let numera = number;
  let denom = 1;
  // ==> "numerator / 1"
  //this function will be used to determine if our numerator has a decimal. If not, it will return the length of that number. If there is a decimal, it should return the length of the numbers following the decimal. This will be used to multiply our numerator and denominator by 10 to the power of that length, giving us a fraction with whole numbers for both the numerator and denominator.

  function findDecLength(number){
    return number.toString().split(".").pop().length;
  }
  //get whole numbered numerator and denominator
  let powerOfTen = Math.pow(10, findDecLength(number));
  numera *= powerOfTen;
  denom *= powerOfTen;
  // ==> "whole number numerator / whole number denominator"

  function findGCD(n, d){
    var divisor = Math.min(n, d);
    for (var i = divisor; i>1; i--){
      if(n%i === 0 && d%i === 0){
        divisor = i;
        return divisor;
      }
    }
  }
  //console.log("" + numera + "/" + denom + "")
  let GCD = findGCD(numera, denom);
  let reducedFraction = "" + (numera/GCD) + "/" + (denom/GCD) + "";
  console.log(reducedFraction)
};

decToFrac(num);