function openFullscreen() {
	var elem = document.documentElement;
    if (elem.requestFullscreen) {
    	elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
    	/* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
    	elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem = window.top.document.body; //To break out of frame in IE
        elem.msRequestFullscreen();
    }
}

function getwaktu() {
	var waktu = new Date();
    setTimeout("getwaktu()", 1000);
    let strings = `${waktu.getHours()}:${waktu.getMinutes()}:${waktu.getSeconds()}`
    document.getElementById("jamatas").innerText = strings
  }

document.addEventListener('fullscreenchange', async (event) => {
  if (document.fullscreenElement) {
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
    batree.innerText = ' '+battery.level * 100 + "%"
  });
});

navigator.getBattery().then(function(battery) {
  updateLevelInfo();
  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
	batree.innerText = ' '+battery.level * 100 + "%"
  }
});
