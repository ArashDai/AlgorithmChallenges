// Write a function that sorts an array using the bubble sort algorithm

function bubbleSort(array) {
var temp;

for(var i = 0, var j = 1; i < array.length; i++,j++){
 var a = array[i];
 var b = array[j]; 
  if(a > b){
    temp = array[j] ;
    array[j] = array[i];
    array[i] = temp;
    var backCount = i;
    while(backCount >= 0){
      if(array[backCount] < array[backCount-1]){
        var temp2 = array[backCount-1];
        array[backCount-1] = array[backCount];
        array[backCount]= temp2;
      }
      backCount--;
    }
  }
}

return array

}

