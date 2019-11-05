var message="shafeeq is back is shafeeq no";
var checkedwords=[]
var exists=0
var newmessage=""
var word=""

function checkedword(argument){
	exists=0
	for(var i=0;i<checkedwords.length;i++){
		if(argument==checkedwords[i]){
			exists++
		}
	}
	if(exists==0){
		checkedwords.push(argument)
		return argument+ " "
	}
	else return ""
}	
for(var i=0;i<message.length;i++){
		if(message.substring(i,i+1)==" "){
			newmessage+=checkedword(word);
			word=""
		}
	 else{
		 word+=message.substring(i,i+1);
		}
	}
	console.log(newmessage+checkedword(word))	