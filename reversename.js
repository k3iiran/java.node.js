function reverse(word) {
	var backwards= "";
		for(var i=word.length-1; i>=0;i--) {
			backwards+= word.substring(i,i+1);
		}
	return backwards
}
var message="shafeeq is back"
var newmessage=""
var word=""
	for(var i=0; i<message.length;i++){
		if(message.substring(i,i+1)==" "){
			newmessage+=reverse(word)+" ";
			word=""
		}
	 else{
		 word+=message.substring(i,i+1);
		}
	}
	console.log(newmessage+reverse(word));