window.setTimeout("getip()",1000);
function getip(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.ipify.org/?format=json`);
	xhr.responseType = "json";
	xhr.onload = function() {
    	ipanda = this.response.ip
	}
	xhr.send();
}