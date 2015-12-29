var button = document.querySelector("button");
var body = document.querySelector("body");
//var isClicked = false;

// button.addEventListener("click", function(){

// 	if(isClicked){

// 		body.style.background = "white";
// 	}else{
// 		body.style.background = "purple";
// 	}

// 	isClicked = !isClicked;

// });

button.addEventListener("click", function(){

	document.body.classList.toggle("purple");

});
