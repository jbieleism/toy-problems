var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  var leaves = 0;
  function traverse(node){
    if (node.children.length === 0){
      leaves++
    }
    node.children.forEach((child) => {
      traverse(child)
    })
  }
  traverse(this)
  return leaves;
}
