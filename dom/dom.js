var body = document.querySelector("body"); //Select
var isBlue = false; //Boolean true or false

setInterval(function (){ //Manipulate
	if(isBlue){
		body.style.background = "white";
	}else{
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;

}, 1000);