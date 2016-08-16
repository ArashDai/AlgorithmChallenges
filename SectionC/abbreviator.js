var abbreviator = function(str){
	var final = [];
	var sentence = str.split(' ');
	
	for(var i=0;i<sentence.length;i++){
		var current = [];
		
		if(sentence[i].length < 4){
			final.push(sentence[i]);
		}
		
		if(sentence[i].length >= 4){
			if(sentence[i].includes('-')){
				var hyphenFinal = [];
				var subHyphen =[];
				var hyphen = sentence[i].split('-');
				
				for(var j = 0; j<hyphen.length; j++){
					
					if(hyphen[j].length < 4){
						hyphenFinal.push(hyphen[j]);
					}
					
					if(hyphen[j].length >= 4){
						hyphen[j].split('');
					
						subHyphen.push(hyphen[j][0],
										 hyphen[j].length-2,
										 hyphen[j][hyphen[j].length-1]);
						subHyphen = subHyphen.join('');
						hyphenFinal.push(subHyphen);
					}
				}
				var rejoined = hyphenFinal.join('-');
				final.push(rejoined)
			}else{
				
				sentence[i].split('');
				
				current.push(sentence[i][0],
								sentence[i].length-2,
								sentence[i][sentence[i].length-1]);
				current = current.join('');
				final.push(current);
			}
		}
	}
	
	return final.join(' ');
};



