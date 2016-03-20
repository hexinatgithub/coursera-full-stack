window.onload = prepareLinks;

function prepareLinks() {
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	var gallery = document.getElementById("gallery");
	if (!gallery) return false;
	var links = gallery.getElementsByTagName("a");
	// loop the links, add onclick event to each link
	for (var i = links.length - 1; i >= 0; i--) {
		links[i].onclick = function() {
			return !showPic(this);
		};
		links[i].onkeypress = links[i].onclick;
	}
}

function showPic(whichpic) {
	// set image
	var placeholder = document.getElementById("placeholder");
	if (!placeholder) return false;
	var source = whichpic.getAttribute("href");
	placeholder.setAttribute("src", source);
	// set the image description
	var description = document.getElementById("description");
	if (description) {
		var text = whichpic.getAttribute("title");
		if(text) description.firstChild.nodeValue = text;
	}
	return true;
}