function operations(choice){
	if (choice==1){
		var func=function(a,b){
			console.log("result is:",(a+b));
			}
		}
		if(choice==2){
		var func=function(a,b){
			console.log("result is:",(a-b));
			}
		}
	return func;
	}
	var f= operations(2);
	f(2,7);