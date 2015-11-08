//check if a given integer is in a sorted array.
//return a boolean value
//for this approach I will be using binary search since the 
//array is already sorted.

var testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function numberFinder(inputArr,value){
 var maximum = inputArr.length-1;
 var minimum = 0;

 function recursiveBinary(array,val,max,min){
  if(val >= array[Math.floor((max+min)/2)]){
    if(val===array[Math.floor((max+min)/2)]){
      var x = 'The value is at '+ Math.floor((max+min)/2)
      return x;
    }
    min = Math.floor((max+min)/2);
    return recursiveBinary(array,val,max,min);
  }
  else if(val <= array[Math.floor((max+min)/2)]){
    if(val===array[Math.floor((max+min)/2)]){
      var y = 'The value is at '+ Math.floor((max+min)/2)
      return y;
    }
    max = Math.floor((max+min)/2);
    return recursiveBinary(array,val,max,min);
  }
  else{
    return 'the number is not here';
  }

}
return recursiveBinary(inputArr,value,maximum,minimum);
}



numberFinder(testArray,3)