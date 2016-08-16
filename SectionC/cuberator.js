//Your task is to construct a building which will be a pile of n cubes.
// The cube at the bottom will have a volume of n^3, the cube above will
//  have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

var cuberator = function(){
	this.n = 2;	
	this.outcome = 0;
};

cuberator.prototype.helper = function(n){
	var final = 0;
	
	if(n<=0) return 'input a number greater than zero';
	
	while (n > 0){
		final += n*n*n;
		n--;
	}
	return final;
};

cuberator.prototype.run = function(m){
	if(!m) return 'please input a number';
	if(m===1) return 1;
	
	while(this.outcome <= m){
		
		if(this.outcome === m){
			return this.n;
		}
		
		if(this.outcome < m){
			this.n++;
			this.outcome = cuberator.prototype.helper(this.n);
			console.log('outcome: ',this.outcome)
		}
	}
	
	if(this.outcome > m) return 'sorry not able to cuberate'
};


var myCube = new cuberator()
myCube.run(1071225) // should equal 45