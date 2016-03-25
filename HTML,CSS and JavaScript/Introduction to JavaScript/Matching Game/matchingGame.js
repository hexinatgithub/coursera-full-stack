var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
window.onload = generateFaces;

function generateFaces() {
	// clear all child node in theLeftSide and theRightSide
	while(theLeftSide.hasChildNodes()) {
		theLeftSide.removeChild(theLeftSide.lastChild);
	}
	while(theRightSide.hasChildNodes()) {
		theRightSide.removeChild(theRightSide.lastChild);
	}
	// generate the new face on theLeftSide
	for (var i = 0; i < numberOfFaces; i++) {
		var img = document.createElement("img");
		img.src="smile.png";
		//random position for img
		var top = Math.floor(Math.random() * 400 + 1);
		var left = Math.floor(Math.random() * 400 + 1);
		img.style.left = left + "px";
		img.style.top = top + "px";
		theLeftSide.appendChild(img);
	}
	// copy the left side image to the right side
	var leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);

	// Add an event handler function to the extra face
	theLeftSide.lastChild.onclick = function nextLevel(event) {
		event.stopPropagation();
		numberOfFaces += 5;
		generateFaces();
	};
	theBody.onclick = function gameOver(event) {
		alert("Game over!");

		//clear the event handler
		theBody.onclick = null;
		theLeftSide.onclick = null;
	};
}
