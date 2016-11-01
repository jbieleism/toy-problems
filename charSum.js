let charSum = (string) => {
  if (string.length === 0){
    return;
  }
  let count = 0;
  let splitz = string.split('').forEach((index) => {
    let num = parseInt(index)
    if (num) {
      count += num;
    }
  });
  return count;




};


let myString = 'j23483fdsjaf';

charSum(myString);