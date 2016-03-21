function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open( "GET", "file:///Users/hexin/tech/full-stack/DOM%20Scripting/Creating%20Markup%20on%20the%20Fly/response.txt", true ); 
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				alert("receive message");
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText); 
				para.appendChild(txt); 
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	} else {
		alert('Sorry, your browser doesn\'t support XMLHttpRequest'); 
	}
	alert("Function One");
}
addLoadEvent(getNewContent);