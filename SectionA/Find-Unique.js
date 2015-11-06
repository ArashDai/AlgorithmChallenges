// Given an array of numbers, which contains many duplicate integers
// and one unique integer, find the unqiue integer in the array.
//  uniqueNumber([1,2,1,3,3]); -> 2
 

 
function uniqueNumber(array) {
var holder = {};  
  for (var i = 0; i < array.length;i++){
      if(holder[array[i]]===undefined){
          holder[array[i]]=1;
      }
      else{
          holder[array[i]]++;
      }
  console.log(holder)
  }
  for(var key in holder){
      if(holder[key]===1){
        return holder[key];
      }
  }

}
