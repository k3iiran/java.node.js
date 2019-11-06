var numbers=[24,27,91]
var f = function(item){
	if(item%2==0){
		console.log(item, "is even")
	}
	else{
		console.log(item, "is odd")
	}
}
numbers.forEach(f);
