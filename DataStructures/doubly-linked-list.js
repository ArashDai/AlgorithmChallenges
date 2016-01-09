//Create a doubly linked list with methods
 
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}


 
LinkedList.prototype.add = function(val) {
  var node = new Node(val);
  if(this.head === null){
    this.head = node;
    this.tail = node;
  }
  else{
    var current = this.head  
    while(current.next){
      current = current.next
    }
    current.next = node;
  }
}  
  

LinkedList.prototype.remove = function(val) {
  var position = 0;
  var current = this.head;

  if (current.val === val ){return true}

  

}


LinkedList.prototype.contains = function(val) {
  var position = 0;
  var current = this.head;

  if (current.val === val ){return true}
    
  while(current.next){
    if (current.val === val ){return true}
    else{
      current = current.next
    }

  }
return false
}






