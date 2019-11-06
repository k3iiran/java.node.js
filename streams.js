var fs= require("fs")
var count=0
var fwrite= fs.createWriteStream("constructor1.txt")
var f = fs.createReadStream("constructor.txt",{encoding:'utf8'})
f.on("data", function(text){
	for(var i=0; i<text.length;i++) {
		if(text.substring(i, i+1) == "e") {
			fwrite+="?"
		}
		else {
			if(text.substring(i, i+1) == "a"){
				fwrite+="*"
		}
		}
		else{
			fwrite+= text.substring(i,i+1)
	}
}
})	
f.on("end", function(){
	console.log
	console.log("file finished")
})