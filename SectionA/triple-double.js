//tripledouble kata from codewars
function tripledouble(num1, num2) {
  var mgmt = {
    one:[],
    two:[]
  };
  num1 = num1.toString().split('').map(Number);
  num2 = num2.toString().split('').map(Number);
  
  for(var i = 0; i<num1.length; i++){
  	console.log(num1[i],i)
    if(num1[i] === num1[i+1] && num1[i] === num1[i+2]){
      mgmt.one.push(num1[i])
      i=i+2
    }
  }
  
  for(var j = 0; j<num2.length; j++){
  	if(num2[j] === num2[j+1]){
  		if(mgmt.one.includes(num2[j])){
  			mgmt.two.push(num2[j])
  		}
  	}
  }
  
  console.log(mgmt)
  
  if(mgmt.two.length > 0){
  	return true
  }
  return false
}


//{ '0': 83579688837775, '1': 4559214779 }

//var m =83579688837775;
//var g =4559214779;


//tripledouble(m,g)
