//Write a function cakes(), which takes the recipe (object) and
//the available ingredients (also an object) and returns the
//maximum number of cakes Pete can bake (integer). For simplicity
//there are no units for the amounts 
//(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
//Ingredients that are not present in the objects, can be considered as 0.
function cakes(recipe, pantry) {
  var perItem = []
  var lowest;
  
  for( var x in recipe){
      if(pantry[x] === 0 || pantry[x] === undefined) return 0;
      if(lowest === undefined) lowest = Math.floor(pantry[x]/recipe[x]);
      if(pantry[x]/recipe[x] < lowest) lowest = Math.floor(pantry[x]/recipe[x]);
      perItem.push(Math.floor(pantry[x]/recipe[x]))
  }
  return lowest;
}


