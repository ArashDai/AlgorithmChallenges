//Given an input string, find if any of the permutations of that string is a palindrome

function permPalin(input) {
var monkey ={};
var unique = 0;

for (var i = 0; i < input.length; i++) {
  
  if(monkey[input[i]] === undefined){

    monkey[input[i]] = 1;

}else{
      monkey[input[i]]++;
}
}
for(key in monkey){

if(monkey[key] % 2 !== 0)
unique++


};
if(unique > 1){
  return false
}else{return true}


}