//create secretNumber
//ask user for guess
//check is guess is right

var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
	alert("You got it right!");
}else if(guess > secretNumber){
	alert("To high. Guess again!");
}else{
	alert("To low. Guess again!");
}