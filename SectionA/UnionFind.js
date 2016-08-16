// methods: connected, union
var UnionFind = function(n){
	this.id =[];
	this.sz =[];
	
	for(var i=0; i<n.length; i++){
		this.id[i] = i;
		this.sz[i] = 1;
	}
};

UnionFind.prototype.root = function(x){

	while(x !== this.id[x]) {
		this.id[x] = this.id[this.id[x]];
		x = this.id[x];
	}
	
	return x;
};

UnionFind.prototype.connected = function(p,q){
	return (this.root(p)===this.root(q))
};

UnionFind.prototype.union = function(p,q){
	var a = this.root(p);
	var b = this.root(q);
	if(a === b) return;
	
	if(this.sz[a] <= this.sz[b]){ 
		this.id[a] = b; this.sz[b] += this.sz[a];
	} else {
		this.id[b] = a; this.sz[a] += this.sz[b];
	}


	this.id[a] = b;
	
};
