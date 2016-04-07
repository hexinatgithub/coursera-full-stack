var target;
var guess_input_text;
var guess_input;
var finished = false;
var guess = 0;

function do_game() {
	target = Math.floor((Math.random() * 100)) + 1;
	console.log(target);

	while (!finished) {
		guess_input_text = prompt("Guess a number between 0 and 100");
		guess_input = parseInt(guess_input_text);
		guess += 1;
		finished = check_guess();
	}
	document.write("you have guess the number: " + target);
}

function check_guess() {
	if (guess_input > 100 || guess_input < 0) {
		alert("Exceed the range");
		return false;
	} else if (guess_input < target) {
		alert("Smaller")
		return false;
	} else if (guess_input > target) {
		alert("Larger");
		return false;
	} else if (isNaN(guess_input)) {
		alert("Not a number");
		return false;
	}
	return true;
}