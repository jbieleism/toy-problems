//Inside My Mind - Groove Armada

Array.prototype.isSubsetOf = function(array) {
  for (var i = 0; i < this.length; i++){
    if (array.indexOf(this[i]) === -1){
      return false
    }
  }
  return true;
};