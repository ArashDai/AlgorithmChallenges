//not finished
//implement a linked list to handle collisions
//change holder to an object

function HashTable() {
  this.SIZE = 16
  this.occupied = 0

  this.storage = {};
}

HashTable.prototype.set = function(key, value) {
  if(this.occupied/this.SIZE > .75){
    this.SIZE = this.SIZE*2
  }
  
  if(this.storage[hashCode(key,this.SIZE)] !== undefined){
      var holder = [];
      holder.push(this.storage[hashCode(key,this.SIZE)])
      console.log('step one')
      this.storage[hashCode(key,this.SIZE)] = holder;
      holder.push(value)
      console.log('done')
  }
  else{
  this.storage[hashCode(key,this.SIZE)] = value;
  }
  console.log(this.storage)
}

HashTable.prototype.get = function(key) {
  if( Array.isArray(this.storage[hashCode(key,this.SIZE)])){
      
  }
}

HashTable.prototype.remove = function(key) {
  delete this.storage[hashCode(key,this.SIZE)]

  if( this.SIZE > 16 && this.occupied/this.SIZE < .25){
      this.SIZE = this.SIZE/2
    }
    
}

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size){
  var hash = 0;
  if (string.length === 0) return hash;
  for (var i = 0; i < string.length; i++) {
    var letter = string.charCodeAt(i);
    hash = ((hash<<5)-hash)+letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size ;
}



var myTable = new HashTable()

myTable.set("one",'a')
myTable.set("two",'b')
myTable.set("three",'c')
myTable.set("four",'d')
myTable.set("five",'e')
myTable.set("six",'f')



console.log('the get is here')
