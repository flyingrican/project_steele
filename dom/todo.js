var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
	this.classList.add("selected");
});
	lis[i].addEventListener("mouseout", function(){
	this.classList.remove("selected");
});
	lis[i].addEventListener("click", function(){

		//insert work around here not fully working in chrome

		this.classList.toggle("done");

	});

}
//change the bullet point as well not completely working in chrome
// if (this.classList.contains('selected')) {
//       this.classList.remove('selected');
//     }