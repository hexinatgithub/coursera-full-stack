window.onload = function() {
	var testdiv = document.getElementById("testdiv");
	var p = document.createElement("p");
	var txt = document.createTextNode("dasdsada");
	testdiv.appendChild(p);
	p.appendChild(txt);
}