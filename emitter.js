var refevent= require("events")
var emitter= new refevent.EventEmitter()
emitter.on("boom", function(){
	console.log("hello my friends")
})
emitter.on("fire", function(){
	console.log("goodbye my friends")
})
emitter.on("fire", function(){
	console.log("you are not my friends")
})
emitter.on("fire", function(){
	console.log("i hate you my friends")
})
emitter.emit("fire")

