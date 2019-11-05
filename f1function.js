var f1 = function(a,b){
	var result = a+b;
	console.log("result:"+result);
	}
var f2 = function(a,b){
	var result = a-b;
	console.log("result:"+result);
	}
function maths(f,a,b){
	f(a,b);
}
maths(f1,5,8)
maths(f2,5,2)
	