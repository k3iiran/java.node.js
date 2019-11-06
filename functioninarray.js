var something = []
var msg= function(){
	console.log("hello")
}
something.push(msg)
something.push(function(){
	console.log("hello2")
})
something.push(function(){
	console.log("hello3")
})
something.forEach(function(msg){
	msg()
})