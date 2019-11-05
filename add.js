function add(){
	var result=0;
	for(var i=0; i<arguments.length; i++){
		result+= arguments[i];
		}
	return result;
}
console.log(add(2,7,4))
console.log(add(10,2,8))
console.log(add(190,2,13))