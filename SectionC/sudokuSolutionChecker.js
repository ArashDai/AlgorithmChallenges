var validSolution = function(solution){
	var checklist = {
		1:0,
		2:0,
		3:0, 
		4:0, 
		5:0,
		6:0,
		7:0, 
		8:0, 
		9:0
	};
	
	var verticalChecklist = {
		1:0,
		2:0,
		3:0, 
		4:0, 
		5:0,
		6:0,
		7:0, 
		8:0, 
		9:0
	};
	
	var cubeOne = {
		1:0,
		2:0,
		3:0, 
		4:0, 
		5:0,
		6:0,
		7:0, 
		8:0, 
		9:0
	};
	
	var cubeTwo = {
		1:0,
		2:0,
		3:0, 
		4:0, 
		5:0,
		6:0,
		7:0, 
		8:0, 
		9:0
	};
	
	var cubeThree = {
		1:0,
		2:0,
		3:0, 
		4:0, 
		5:0,
		6:0,
		7:0, 
		8:0, 
		9:0
	};
	
	for(var i=0; i<solution.length; i++){
		for(var j=0; j<solution[i].length; j++){
			if(solution[i][j] === 0)return false;
			
			if(j===0){
				if(solution[i][j] <= 9){
					if(verticalChecklist[solution[i][j]] === 0){
						verticalChecklist[solution[i][j]] = 1;
					}
					else{
						console.log('column fail')
						return false;
						//we have more than one of a number in a row
					}
				}
					
			}
			
			
			
			if(i%3 === 0 && i!==0){
				//reset the cubes up front 
				console.log('RESET DA CUBES')
				cubeOne = {
						1:0,
						2:0,
						3:0, 
						4:0, 
						5:0,
						6:0,
						7:0, 
						8:0, 
						9:0
				};
				cubeTwo = {
						1:0,
						2:0,
						3:0, 
						4:0, 
						5:0,
						6:0,
						7:0, 
						8:0, 
						9:0
				};
				cubeThree = {
						1:0,
						2:0,
						3:0, 
						4:0, 
						5:0,
						6:0,
						7:0, 
						8:0, 
						9:0
				};
			}
			
				if(j<3){
					//cubeOne
					if(cubeOne[solution[i][j]] === 0){
						cubeOne[solution[i][j]] = 1;
					}
					else{
						console.log('cubeOne fail:', cubeOne)
						console.log(solution[i][j])
						return false;
						//this cube contains more than one of a number
					}
				}
				
				if(3<=j&&j<6){
					//cubeTwo
					if(cubeTwo[solution[i][j]] === 0){
						cubeTwo[solution[i][j]] = 1;
					}
					else{
						console.log(3<= j <6)
						console.log('cubeTwo fail:',i,j, cubeTwo)
						console.log(solution[i][j])
						return false;
						//this cube contains more than one of a number
					}
				}
				
				if(6<=j&&j<9){
					//cubeThree
					if(cubeThree[solution[i][j]] === 0){
						cubeThree[solution[i][j]] = 1;
					}
					else{
						console.log('cubeThree fail:', cubeThree)
						console.log(cubeThree[solution[i][j]])
						console.log(solution[i][j])
						return false;
						//this cube contains more than one of a number
					}
				}
			
			if(solution[i][j] <= 9){
				if(checklist[solution[i][j]] === 0){
					checklist[solution[i][j]] = 1;
				}
				else{
					console.log('row fail')
					return false;
					//we have more than one of a number in a row
				}
			}
		}
		checklist = {
						1:0,
						2:0,
						3:0, 
						4:0, 
						5:0,
						6:0,
						7:0, 
						8:0, 
						9:0
					};
	}
	return true;
};
