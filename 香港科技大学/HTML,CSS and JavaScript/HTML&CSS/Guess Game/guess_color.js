var colors = ["blue","cyan","gold","green","magenta","orange","red","white","yellow"];
var target_color_index;
var target_color;
var color_input;
var guess;
var finished = false;

function do_game() {
	target_color_index = Math.floor(Math.random() * (colors.length));
	target_color = colors[target_color_index];
	console.log(target_color, target_color_index);
	while(!finished) {
		color_input = prompt("Guess a color");
		guess += 1;
		finished = check_guess();
	}
	var element = document.getElementsByTagName("body")
	element[0].setAttribute("style", "background-color: " + target_color);
}

function check_guess() {
	var index = colors.indexOf(color_input);
	console.log("guess index:" + index);
	if (index == -1) {
		alert("You guess a color not in array");
		return false;
	} else if (index < target_color_index) {
		alert("Smaller");
		return false;
	} else if (index > target_color_index) {
		alert("large");
		return false;
	}
	alert("You guess correct!");
	return true;
}