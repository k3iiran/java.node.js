var name="shafeeq is back"
var words=1
var word= ""
var alpha= ""
var word1= ""
var alpha1= ""
	for(var i=0; i<name.length;i++){
		if (name.substring(i,i+1)==" "){
			words++
		}
	 }
	for(var i=0; i<name.length;i++){
		if (name.substring(i,i+1)== " "){
			console.log(word)
			word=""
		}
		else {
			alpha=(name.substring(i,i+1))
			word+=alpha
		}
	}
			console.log(word)
			
		for(var i=name.length-1;i>=0;i--){	
		if (name.substring(i,i+1)== " "){
			console.log(word1)
			word1=""
		}
			alpha1=(name.substring(i,i+1))
			word1=alpha1+word1
		}
			console.log(word1)