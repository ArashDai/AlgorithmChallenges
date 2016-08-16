// amount in coins, denominations is an array of coin denominations
function ChangeMaker(){
     this.memo = {};
}

ChangeMaker.prototype.changePossibilites = function(amount,denominations){
	
	var memoKey = String([amount,denominations]);
	
	if(this.memo.hasOwnProperty(memoKey)){
		console.log("already computed this solution: ");
		return this.memo[memoKey];
	}
	
    if (amount === 0)    return 1;
    
    if (amount < 0)    return 0;
    
    if(denominations.length === 0) return 0;

    var currentCoin = denominations[0];
    var remainingCoins = denominations.slice(1); 

	numPossibilities = 0;
    while( amount >= 0){

        numPossibilities+= this.changePossibilites(amount,remainingCoins);
        amount -= currentCoin;
    }

    this.memo[memoKey] = numPossibilities;
    return [numPossibilities,this.memo];

}

new ChangeMaker().changePossibilites(4, [1, 2, 3]);