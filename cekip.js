function makan(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.countapi.xyz/update/ip-${location.host}/${ipanda}?amount=-1`);
	xhr.responseType = "json";
	xhr.onload = function() {
    	sisaip = this.response.value
	}
	xhr.send();
}

function addip(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.countapi.xyz/create?key="+ipanda+"&namespace=ip-"+location.host+"&value=15");
	xhr.responseType = "json";
	xhr.onload = function() {
    	sisaip = this.response.value
	}
	xhr.send();
}

function countip(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.countapi.xyz/info/ip-${location.host}/${ipanda}`);
	xhr.responseType = "json";
	xhr.onload = function() {
		if (!this.response.value) return addip() 
    	sisaip = this.response.value
	}
	xhr.send();
}

function getip(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.ipify.org/?format=json`);
	xhr.responseType = "json";
	xhr.onload = function() {
    	ipanda = this.response.ip
    	countip()
	}
	xhr.send();
}
getip()