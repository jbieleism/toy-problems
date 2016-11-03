
var reverseLinkedList = function(list) {

  if (!list.next){
    return list.value;
  }
  var result = ''
  function recurse(node) {
    console.log(node.value)

    if(!node.next){
      return;
    }
    return recurse(node.next)

  }
  recurse(list)
  return result.split('').reverse().join('');
};