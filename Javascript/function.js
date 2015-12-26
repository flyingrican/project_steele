// function isEven(num){
// 	if(num % 2 === 0){
// 		// console.log("Its even!");
// 		return true
// 	}else{
// 		// console.log("Its odd!");
// 		return false
// 	}

// }

// isEven(3);
// isEven(22);
// isEven(5783);
// isEven(478942512368);

function isEven(num){
	return num % 2 === 0;
}


function factorial(num){
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	//return the result variable
	return result;
}



function kebabToSnake(str){
	//Replace all '-' with "_"
	//return str
	var newStr = str.replace(/-/g , "_");
	return newStr;
}

