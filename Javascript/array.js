function printReverse(arr){

	for(var i = arr.length - 1; i >= 0; i--){

		console.log(arr[i]);

	}
}



function isUniform(arr){

	var first = arr[0];

	for(var i = 1; i < arr.length; i++){

		if(arr[i] !== first){
			return false;
		}

	}
	return true;

}


function sumArray(arry){

	var total = 0;
	arry.forEach(function(ele){
		total += ele;
	});
	return total;

}

function max(arr){

	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}