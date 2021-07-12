function makan(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.countapi.xyz/update/ip-${location.host}/${ipanda}?amount=-1`);
	xhr.responseType = "json";
	xhr.onload = function() {
    	sisaip = this.response.value
    	console.log('makan ip, tersisa: '+sisaip)
	}
	xhr.send();
}

function addip(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.countapi.xyz/create?key="+ipanda+"&namespace=ip-"+location.host+"&value=20");
	xhr.responseType = "json";
	xhr.onload = function() {
    	sisaip = this.response.value
    	console.log('addip\ndiisi: '+sisaip+'\n'+this.response.namespace)
    	console.log(this.response)
	}
	xhr.send();
}

function infoip(ipanda){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.countapi.xyz/info/ip-${location.host}/${ipanda}`);
	xhr.responseType = "json";
	xhr.onload = function() {
		if (!this.response.value) return addip() 
    	sisaip = this.response.value
    	console.log('infoip\nsisa: '+sisaip+'\n'+this.response.namespace)
	}
	xhr.send();
}

function getip(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.ipify.org/?format=json`);
	xhr.responseType = "json";
	xhr.onload = function() {
    	ipanda = this.response.ip
    	infoip(ipanda)
    	console.log('getip: '+ipanda)
	}
	xhr.send();
}
getip()