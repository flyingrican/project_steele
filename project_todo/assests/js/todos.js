//Check off specific to-dos by clicking
//can only add a listener in jQuery on elements that exist when the code is run the first time
//have to select ul parent, then listen for click on li's inside of a ul.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
//can only add a listener in jQuery on elements that exist when the code is run the first time
//have to select ul parent, then listen for click on spans inside of a ul.
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//stopPropagation ensures that only the element you want
	//clicked is clicked no bubbling up to other elements
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input 
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});

//trying to fade out the input and ul

// $(".fa-plus-circle").click(function(){
// 	$("#input").fadeToggle();
// 	$("#ul").fadeToggle();
// });

// $("h1").on("click", ".fa-plus-circle", function(){
// 	$("#input, #ul").fadeOut(500, function(){
// 		$(this).toggleClass("display");
// 	});
// });