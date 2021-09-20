async function openFullscreen() {
	var elem = document.documentElement;
    if (elem.requestFullscreen) {
    	return await elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
    	/* Firefox */
        return await elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
    	return await elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem = window.top.document.body; //To break out of frame in IE
        return await elem.msRequestFullscreen();
    }
}

function getRandomRGBValue() {
    return Math.min(Math.floor(Math.random() * 255 + 1), 255);
}

function getRandomColor() {
    var r = getRandomRGBValue(),
        g = getRandomRGBValue(),
        b = getRandomRGBValue();
    return "#" + (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
}

function changeThemeColor() {
	warna = getRandomColor()
    var metaThemeColor = document.querySelector("#bilahmenuatas");
    metaThemeColor.style['background-color'] = warna
    var getThemeColor = document.querySelector("meta[name=theme-color]");
    getThemeColor.setAttribute("content", warna);
    setTimeout(function() {
        changeThemeColor();
    }, 3000);
}

function getwaktu() {
	var waktu = new Date();
    setTimeout("getwaktu()", 1000);
    let strings = `${waktu.getHours()}:${waktu.getMinutes()}:${waktu.getSeconds()}`
    document.getElementById("jamatas").innerText = '⏰ '+strings
  }

document.addEventListener('fullscreenchange', async (event) => {
  if (document.fullscreenElement) {
	changeThemeColor()
    console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
  } else {
    Swal.fire('','Hello').then((result) => {
    	openFullscreen()
    })
  }
});

window.onload = async function() {
  Swal.fire('','Hello').then((result) => {
    openFullscreen()
  })
  getwaktu()
}

window.addEventListener('online', () => cekinternet.innerText = 'ONLINE');
window.addEventListener('offline', () => cekinternet.innerText = 'OFFLINE');

navigator.getBattery().then(function(battery) {
  battery.addEventListener('levelchange', function(){
    batree.innerText = ' '+(battery.level * 100).toFixed(0) + "%"
  });
});

navigator.getBattery().then(function(battery) {
  updateLevelInfo();
  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
	batree.innerText = ' '+(battery.level * 100).toFixed(0) + "%"
  }
});
