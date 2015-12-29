var movieDB = [

		{title: "Interstellar", hasWatched: true, rating: 8.8}, 
		{title: "Gravity", hasWatched: true, rating: 8}, 
		{title: "Sunshine", hasWatched: true, rating: 9.5}, 
		{title: "The Martian", hasWatched: true, rating: 9},
		{title: "Warcraft", hasWatched: false, rating: 7}

		
];




function movies(){
	//for each movieDB as    movie that is how you access the different parts of the obj
	movieDB.forEach(function(movie){
		var result = "You Have ";
		if(movie.hasWatched){
			result += "watched ";
		}else{
			result += "not seen ";
		}
		result += "\"" + movie.title + "\" - ";
		result += movie.rating + " stars";
		console.log(result);


	});


}

movies();

