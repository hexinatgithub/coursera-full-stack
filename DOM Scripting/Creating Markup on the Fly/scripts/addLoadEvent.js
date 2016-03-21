function addLoadEvent(fun) {
	var onload = window.onload;
	if (typeof onload != "function") {
		window.onload = fun;
	} else {
		window.onload = function(){
			onload();
			fun();
		};
	}
}