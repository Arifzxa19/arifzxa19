function makan(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.countapi.xyz/update/ip-${location.host}/${ipkamu}?amount=-1`);
	xhr.responseType = "json";
	xhr.onload = function() {
    	sisaip = this.response.value
    	console.log('makan ip, tersisa: '+sisaip)
	}
	xhr.send();
}

function addip(){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.countapi.xyz/create?key="+ipkamu+"&namespace=ip-"+location.host+"&value=20");
	xhr.responseType = "json";
	xhr.onload = function() {
    	sisaip = this.response.value
    	console.log('addip\ndiisi: '+sisaip+'\n'+this.response.namespace)
    	console.log(this.response)
	}
	xhr.send();
}

function infoip(ipkamu){ 
    var xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.countapi.xyz/info/ip-${location.host}/${ipkamu}`);
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
    	ipkamu = this.response.ip
    	infoip(ipkamu)
    	console.log('getip: '+ipkamu)
	}
	xhr.send();
}
getip()