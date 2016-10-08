function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}
var list = Node('A');
var nodeB = list.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');

var insertFromEnd = function(linkedList, value, offset) {
  //find length
  let length = 0;
  let temp = linkedList;
  while (temp){
    length++;
    temp = temp.next
  }
  //this is our new node
  var newNode = Node(value);
  if (offset > length){
    return linkedList;
  }
  if (offset === length){
    newNode.next = linkedList
    return newNode;
  }
  var copyNode = linkedList
  //position to insert
  var position = length - offset;
  for (var i  = 0; i < position - 1;i++){
    copyNode = copyNode.next;
  }
  //tempor will temporarily save the next node's value
  //so that we may keep its reference for our new node
  var tempor = copyNode.next;
  copyNode.next = newNode;
  newNode.next = tempor;
  return linkedList
};

insertFromEnd(list, 'F', 2);
